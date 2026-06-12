# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the public-facing website for the [Catalogue of Life](https://www.catalogueoflife.org), built with [Astro](https://astro.build/) (TypeScript/Node). It is a **static-first** site: most pages prerender to HTML at build time, a handful of dynamic data routes render on demand on a small Node service, and interactive taxonomy widgets render client-side as React islands from the shared `col-browser` (portal-components) library. Build-time and per-request data come from the ChecklistBank API.

This replaced the previous Jekyll/Ruby site — there is no Ruby, Liquid, or backend-Freemarker SEO layer anymore. See `README.md` (editor-facing: writing posts/articles, git workflow) and `DEPLOY.md` (Node service, Apache vhost, Varnish, Jenkins).

## Commands

```bash
# Install dependencies (Node >= 22.12, npm >= 10 — see package.json engines / .nvmrc)
npm install

# Run locally — `predev` first bakes API data into src/data/_generated/
npm run dev

# Type-check (Astro + TS); there is no separate linter/test suite
npm run check

# Build for production — `prebuild` bakes data, then `astro build` emits
#   dist/client/  (static HTML + assets, served by Apache)
#   dist/server/  (Node entry for the SSR routes, run behind Varnish)
npm run build
npm run preview          # serve the built output locally

# Re-bake the build-time API data on its own
npm run fetch:data
```

Dev points at the **production** CLB API by default. For gated (private draft) preview data, set basic-auth via env (see below).

## Architecture

### Static-first hybrid (the core idea)

`astro.config.mjs` uses `output: 'static'` with the `@astrojs/node` standalone adapter. **Every page prerenders by default.** Only the two per-record data routes opt out with `export const prerender = false` and run on Node:

- `src/pages/data/taxon/[id].astro`
- `src/pages/data/dataset/[key].astro`

These fetch the public CLB API server-side and emit `<meta>` + schema.org `ld+json` (Taxon / Dataset) directly in the HTML — SEO lives where the HTML is made, one language. They also reproduce the old route logic: **synonym → 301 redirect** to the accepted taxon, **archived → tombstone**, **not found → 404**. This is what replaced the backend Freemarker `PortalPageRenderer` system.

`/data/metadata` and `404` are about a single resource (the current release / the not-found page), so they are **prerendered static**, not SSR.

### React islands (`col-browser`)

The interactive widgets are imported as ESM from `col-browser` and rendered as **`client:only="react"`** islands (so the browser owns them; the SSR routes still emit crawlable SEO markup above them):

`src/components/islands/` — `TreeIsland`, `SearchIsland`, `SourceListIsland`, `MetricsIsland`, `SourceDatasetIsland`, `TaxonIsland`. Each wraps the component with `withRouting(...)` and passes a `theme` (antd ConfigProvider) and `auth` prop. The UMD CDN build of portal-components that third parties embed is untouched — Astro consumes the ESM entry.

### Build-time data baking

`scripts/fetch-data.mjs` (run by the `predev`/`prebuild` hooks) fetches release metadata and the changelog from the CLB API, **projects them down to the fields actually used**, and writes JSON into `src/data/_generated/` (git-ignored). The changelog reuses an incremental cache in `_data/releases/`. This replaced the two Ruby plugins (`get_release_metadata.rb`, `changelog.rb`). Consume the baked data via `@data/releaseMetadata` and `@data/changelog`.

### Data-driven navigation

All navigation is defined in **`_data/nav.yml`** (kept at the Jekyll-style path on purpose — it's imported by `src/lib/nav.ts`). The `section_id` frontmatter field maps to it to highlight the active menu item. Top-level items are dropdown groups (their section landing pages — `about.astro`, `data.astro`, etc. — use the `NavPage` layout).

### Content collections

Defined in `src/content.config.ts` (Zod schemas via `astro:schema`):

- **`articles`** — editorial pages, `src/content/articles/**` (`.md`/`.mdx`), rendered at their `permalink` by `src/pages/[...slug].astro`.
- **`news`** — posts, `src/content/news/**`. The date comes from the **`YYYY-MM-DD-title.md`** filename (parsed in `src/lib/posts.ts`); posts appear at `/YYYY/MM/DD/title`, listed at `/news`, with year/category archives and the RSS feed. Only `published: false` hides a post — there is **no future-date filtering**.

Path aliases (tsconfig): `@components/*`, `@data/*`, `@lib/*`, `@layouts/*`.

### Sitemaps / robots / feed

Three independent mechanisms — see `DEPLOY.md`:
- `src/pages/sitemap.txt.ts` — editorial URLs (the `articles` collection + landing pages), built every deploy.
- `src/pages/sitemap-datasets.txt.ts` — data pages + one URL per source dataset, from `@data/releaseMetadata`, built every deploy.
- `scripts/update-sitemaps.sh` — the giant chunked **taxon** sitemaps → `public/sitemaps/*.gz`, regenerated **monthly** by Jenkins and committed back.
- `src/pages/robots.txt.ts` — lists all three (reads `public/sitemaps/*.gz` at build time). Gated by `SITE_ENV`: only `prod` is crawlable.

### Canonical URLs

`Base.astro` emits a **self-referencing** `<link rel="canonical">` on every page: `site.url` + `Astro.url.pathname`, with the **query string dropped** and trailing slash normalized (root stays `/`). This is what consolidates the island pages' query-variant URLs — `/data/search?q=…`, `/data/browse?taxonKey=…`, `/data/sources?…` (Search/Tree/SourceList push routing state into the URL via `withRouting`) — onto one indexable page, and clears Google's "Duplicate – user hasn't declared a canonical" report. It also collapses `utm_*`/`fbclid`/slash duplicates everywhere.

Dropping the query is correct here because **all** query handling is client-side (no static page has query-distinct server-rendered content). A page that ever needs a query param to define unique indexable content must pass an explicit `canonical` prop to `Base`. The SSR `data/taxon/[id]` and `data/dataset/[key]` pages already do this — they pass their version-correct clean URL (`taxonUrl`/`url`) so the canonical is exact despite the `?v=` param.

### Project structure

```
src/
├── pages/          # routes: index, about/data/howto/tools/procedures landing,
│                   #   [...slug] (articles), news/, [year]/.., category/..,
│                   #   data/.. (incl. SSR taxon/[id] & dataset/[key]),
│                   #   robots.txt.ts, sitemap*.txt.ts, feed.xml.ts
├── layouts/        # Base, Content, NavPage, NewsLayout
├── components/     # Header, Footer, Figure, Changelog, Sidebar, … + islands/
├── content/        # articles/ and news/ collections (schema: src/content.config.ts)
├── data/           # releaseMetadata.ts, changelog.ts (+ _generated/ baked JSON)
└── lib/            # nav, posts, site, colApi/colPaths, md, numf helpers
_data/              # nav.yml + releases/ changelog cache  (READ by Astro — keep)
public/             # served verbatim: css/, fonts/, images/, sitemaps/, favicon, etc.
scripts/            # fetch-data.mjs, update-sitemaps.sh, deploy.sh, col-portal@.service
astro.config.mjs · Jenkinsfile · DEPLOY.md
```

## Page frontmatter

There is **no `layout:` key** — the route picks the layout. Unknown keys are ignored by the Zod schema.

**Article** (`src/content/articles/**`):
```yaml
---
title: Page Title
tagline: Subtitle text
section_id: about        # maps to _data/nav.yml for menu highlighting
imageUrl: /images/species/example.jpg   # banner, 1800px wide, sRGB, 80% JPEG
imageCaption: Caption text
toc: true                # table of contents (default: false)
noindex: false           # robots noindex (default: false)
permalink: /custom/url   # optional; defaults to the file path
published: true
---
```

**News post** (`src/content/news/YYYY-MM-DD-title.md`):
```yaml
---
title: "Post title"
author: "Name"                     # optional
excerpt: Short description for listings/search
categories: Release                # one word, or several (string or array)
images: images/posts/example.jpg   # optional; path is served from /<value>
---
```

## Assets

- **Images** go under `public/` and are served with `public/` stripped (e.g. `public/images/logos/x.svg` → `/images/logos/x.svg`). Article banners: `public/images/species/`, 1800px wide, sRGB, JPEG 80%.
- Captioned figures in markdown use the `Figure` component (`src/components/Figure.astro`): `<Figure url="/images/x.jpg" alt="…" description="caption (markdown ok)" />`.
- **CSS**: the surviving stylesheets are `public/css/{foundation,style,custom}.css` (linked in `Base.astro`) — edit those, not any `_sass`. Prefer minimal CSS: component-scoped `<style>` blocks in `.astro` files (no Tailwind). The old icon fonts (Font Awesome / fontello) were dropped — use inline SVG.

## Environment variables

- `PUBLIC_COL_AUTH` / `COL_AUTH` — `user:pass` basic auth for the CLB API; needed for gated **preview** (private draft) data (build-time islands fetch + runtime SSR fetch). Note `PUBLIC_*` is exposed in the client bundle.
- `SITE_ENV` — `prod` makes `robots.txt` crawlable; anything else returns `Disallow: /`.
- `COL_RELEASE` — pin a specific release key for the build-time data fetch.
- `scripts/fetch-data.mjs` reads additional `CLB_*` / `COL_*` vars; see that file and `DEPLOY.md`.
