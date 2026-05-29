[![Build Status](https://builds.gbif.org/job/col-portal/badge/icon)](https://builds.gbif.org/job/col-portal/)

# Catalogue of Life — public website

The public website for the [Catalogue of Life](https://www.catalogueoflife.org),
built with [Astro](https://astro.build). It is a content-driven static site
(Markdown articles + news) with a few **dynamic data pages** (taxon, dataset,
search, tree, metrics) powered by the [`col-browser`](https://www.npmjs.com/package/col-browser)
React components and the [ChecklistBank API](https://api.checklistbank.org).

Most pages are pre-rendered to static HTML at build time. The handful of
taxon/dataset pages render on demand in a small Node server so their SEO
metadata (`<meta>` + schema.org JSON-LD) is produced server-side. See
[`DEPLOY.md`](./DEPLOY.md) for how that is deployed.

> Migrated from Jekyll. If you worked on the old site: you still write Markdown,
> but **do not add a `layout:` line to frontmatter** — Astro reserves that key
> and applies the right layout automatically.

## Running locally

Prerequisites: **Node 20+** and npm.

```bash
npm install            # first time, or after dependencies change

npx astro dev          # fast: serves http://localhost:4321 using existing data
# or
npm run dev            # same, but first refreshes release data from the API (~20s)
```

Edits to Markdown, components and `_data/nav.yml` hot-reload in the browser.

Production build / preview:

```bash
npm run build          # fetches data, then builds to dist/ (static + Node server)
npm run preview        # serve the build locally at http://localhost:4321
```

The release metadata and changelog shown on the site are fetched at build time
by `scripts/fetch-data.mjs` (run automatically by the `predev`/`prebuild` npm
hooks) and cached in `src/data/_generated/`. To refresh them manually:

```bash
npm run fetch:data
```

---

## Editing content

You only need Markdown and a little YAML. Changes can be made on a branch and
committed via Git (see *Working with Git* below).

### Articles

Articles live in `src/content/articles/<section>/`, where `<section>` is one of
`about`, `building`, `data`, `howto`, `tools`. The page URL comes from the
`permalink` in the frontmatter (or the file path if omitted).

```markdown
---
title: What is COL
tagline: Connecting global taxonomy           # subtitle under the headline
section_id: about                              # highlights the matching menu item
imageUrl: /images/species/Example.jpg          # banner image (1800px, sRGB, 80% JPEG)
imageCaption: _Example name_ - [Photo CC BY ...](https://...)
toc: true                                      # show a table of contents (default false)
noindex: false                                 # hide from search engines (default false)
permalink: /about/what-is-col                  # the page URL
published: true                                # set false to keep it a draft
---

Your Markdown content goes here.
```

- **Captioned images** inside an article: rename the file to `.mdx` and use the
  `Figure` component (the replacement for the old `{% include image.html %}`):

  ```mdx
  import Figure from '@components/Figure.astro';

  <Figure url="/images/example.jpg" alt="Alt text" description="My caption with a [link](/foo)" />
  ```

- **Dynamic data** (e.g. a list driven by the current release) also uses `.mdx`,
  importing from `@data/releaseMetadata`. See `src/content/articles/about/community.mdx`
  for a worked example.

### News posts

News posts live in `src/content/news/`. The filename **must** start with the
date: `YYYY-MM-DD-title.md` (the date is taken from the filename). Posts appear
at `/YYYY/MM/DD/title`, are listed at `/news` (paginated), and are grouped into
yearly and category archives plus the RSS feed at `/feed.xml`.

```markdown
---
title: "Monthly release June 2026"
author: "Your Name"                # optional
excerpt: A short summary for listings and search results.
categories: Release                # one word, or several space-separated (Release Awards)
images:                            # optional
  - images/@stock/example.jpg
---

What's new in this edition…
```

### Navigation menu

The menu is defined in **`_data/nav.yml`** (unchanged from the Jekyll site). Each
top-level item has a `path` (its landing page) and `children`; `section_id` ties
articles to the menu item they highlight.

### Images

Put images under `public/`. They are served from the same path with `public/`
removed (e.g. `public/images/logos/col_logo.svg` → `/images/logos/col_logo.svg`).
Article banner images go in `public/images/species/`: 1800px wide, sRGB, JPEG at
80% quality.

---

## Working with Git

Simple typo fixes can be made through the GitHub web interface, but anything
larger is best done locally with an editor (e.g. [VS Code](https://code.visualstudio.com/))
and committed.

```bash
git clone git@github.com:CatalogueOfLife/portal.git
cd portal
git checkout -b my-change          # work on a branch

# …edit files…

git status                          # see what changed
git add src/content/news/2026-06-24-merry-christmas.md
git commit -m "Add Christmas news post"
git push -u origin my-change        # then open a pull request on GitHub
```

After merging, the [development site](https://www.dev.catalogueoflife.org/) rebuilds automatically (a few minutes).

---

## How it's built (for developers)

```
src/
├── pages/                 # routes
│   ├── index.astro            # homepage
│   ├── [...slug].astro        # renders every article at its permalink
│   ├── data/
│   │   ├── browse|search|sources|metrics.astro   # static shell + col-browser island
│   │   ├── taxon/[id].astro    # SSR (prerender=false): SEO + Taxon island, synonym redirects
│   │   ├── dataset/[key].astro # SSR: SEO + SourceDataset island
│   │   └── metadata.astro      # static release metadata + JSON-LD
│   ├── news/[...page].astro, [year]/…, category/[category].astro
│   └── feed.xml.ts, robots.txt.ts, sitemap.txt.ts, sitemap-datasets.txt.ts
├── layouts/               # Base, Content, NavPage, News
├── components/            # Header, Footer, SectionHeader, NavList, Figure, …
│   └── islands/           # *.tsx wrappers around col-browser components
├── content/               # articles/ and news/ collections (see content.config.ts)
├── data/                  # releaseMetadata.ts, changelog.ts, milestones.ts (+ _generated/)
└── lib/                   # nav, posts, numf, md, colPaths, site helpers

_data/nav.yml              # navigation (editor-owned)
scripts/fetch-data.mjs     # build-time data fetch (replaces the old Ruby plugins)
scripts/update-sitemaps.sh # monthly taxon-sitemap regeneration (Jenkins)
public/                    # static assets served at the site root
```

- **Static vs SSR:** every page is pre-rendered except routes with
  `export const prerender = false` (`data/taxon/[id]`, `data/dataset/[key]`),
  which run in the Node server and own their SEO. Editorial pages ship
  essentially **no JavaScript** (just a tiny nav-menu toggle); the React
  `col-browser` bundle loads only on the data pages that use it.
- **Build-time data:** `scripts/fetch-data.mjs` pulls the current release
  metadata and the changelog from the API and writes projected JSON into
  `src/data/_generated/`. `src/data/{releaseMetadata,changelog}.ts` type and
  re-export it.
- **Dynamic components:** `col-browser` (the published `portal-components`
  build) is rendered as Astro islands via the wrappers in
  `src/components/islands/`. `src/lib/colPaths.ts` configures cross-linking.
- **Sitemaps & robots:** `/sitemap.txt` (editorial) and `/sitemap-datasets.txt`
  are generated at build; the large per-taxon sitemaps are produced monthly by
  `scripts/update-sitemaps.sh` into `public/sitemaps/`, and `robots.txt` lists
  them (gated by the `SITE_ENV` env var — non-prod returns `Disallow: /`).
- **Deployment:** see [`DEPLOY.md`](./DEPLOY.md).

### Tech stack

Astro 6 · React 19 (islands) · TypeScript · `@astrojs/node` adapter ·
`col-browser` + maplibre · the ChecklistBank API.
