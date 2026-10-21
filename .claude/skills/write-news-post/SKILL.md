---
name: write-news-post
description: Use when asked to write, draft, add or publish a news item, news post, blog post or announcement for the Catalogue of Life website (catalogueoflife.org/news), including release announcements, partnership news, obituaries and job ads.
---

# Writing a COL news post

News posts are Markdown files in the `news` content collection, rendered at
`/YYYY/MM/DD/<slug>`, listed at `/news`, in yearly and category archives and in
`/feed.xml`. Schema: `src/content.config.ts`; date/URL parsing: `src/lib/posts.ts`.

## 1. File

`src/content/news/YYYY-MM-DD-<slug>.md`

- **Date** = publication date, taken from the filename. Use today unless told otherwise. Do not add a `date:` key. There is no future-date filtering: a post for a later date goes live with the next deploy, so hold it back with `published: false`.
- **Slug** = short, lowercase, hyphenated (`rcol-r-package`, `annual-release`). Check spelling: it becomes the permanent public URL.
- Use `.mdx` instead of `.md` **only** when the body imports components (see Images).

## 2. Frontmatter

```yaml
---
title: "rcol: an R client for the Catalogue of Life"
author: "Markus Döring"
excerpt: "One or two sentences shown in /news, the RSS feed and search results."
categories: ["Release", "API"]
images: images/posts/example.webp   # optional
---
```

| Key | Rule |
|---|---|
| `title` | Required. Quote it when it contains `:` or starts with a quote. |
| `author` | Full name(s), `"A & B"` for two. Ask if unknown; for the user's own posts use `git config user.name`. |
| `excerpt` | Required in practice. Plain text, quoted if it contains `:`. Not a repeat of the title. |
| `categories` | YAML array, 1–3 entries. Reuse existing ones (`grep -h '^categories' src/content/news/*`) before inventing new; common: `Release` (a new COL release, or a newly released app/tool/package), `Partnerships`, `Infrastructure`, `API`, `ChecklistBank`, `Identifier`, `Documentation`, `General`, `Jobs`, `Obituary`. Use the capitalised form: archives are `/category/<lowercased>`, so `release` would merge with `Release`. A plain string is split on spaces (`categories: API Identifier` = two categories), so write a multi-word category hyphenated inside an array. |
| `images` | Optional banner(s) shown full-width between title and body. Use for a photo or illustration that sets the scene, not for UI screenshots (those go in the body next to the text describing them). Path **without** leading slash, file in `public/images/posts/`. |
| `published` | Set `false` to keep a draft out of the build. Omit otherwise. |

Never add `layout:` (Astro reserves it; the route picks the layout).

## 3. Body

- Do **not** repeat the title as a heading; the layout renders it. Open with a lead paragraph saying what is new and why it matters.
- Structure with `##` sections. Keep it short; link to docs/READMEs for detail.
- House style: British spelling (organisation, recognised), "Catalogue of Life (COL)" on first mention then **COL** (never "CoL"), **ChecklistBank**, "Extended Release (XR)".
- Links: site pages as root-relative (`/data/browse`, `/2026/05/29/portal-components-v2`), external links absolute.
- End with where to give feedback when relevant: the GitHub issues of the repo the topic lives in (`backend` for API, `checklistbank` for the CLB UI, `portal-components`, `data` for data errors), or `support@catalogueoflife.org`.

**Check every technical claim before writing it.** Endpoints, parameters, UI paths, URLs, version numbers and counts must match what exists: the backend code (`~/code/col/backend`), the live API (`https://api.checklistbank.org`), or the linked page. If something the user named doesn't exist, or exists under another name, ask the user before writing the post. Don't publish the user's wording unchecked, and don't silently substitute your own.

## 4. Images

| Need | How |
|---|---|
| Simple inline image (`.md`) | Put it in `public/images/posts/`, reference `![Alt text](/images/posts/x.webp)` (leading slash). |
| Captioned figure (`.mdx`) | `import Figure from '@components/Figure.astro';` then `<Figure url="/images/posts/x.webp" alt="…" description="caption, markdown ok" />` |
| Large screenshots, responsive (`.mdx`) | Put it in `src/assets/posts/`, then `import { Image } from 'astro:assets'; import shot from '../../assets/posts/shot.png';` and `<Image src={shot} widths={[480, 960, 1400]} sizes="(max-width: 1000px) 100vw, 1000px" format="webp" alt="…" />` |

To caption a responsive `<Image>`, wrap it by hand: `<figure class="image"><Image … /><figcaption>Caption</figcaption></figure>` (`Figure` only takes a URL).

Files in `public/` are served as-is: convert to WebP/JPEG and keep them ≤ 1800px wide. Anything wider, or a PNG screenshot, goes in `src/assets/posts/` as-is; Astro resizes it and converts it to WebP. Always write meaningful `alt` text, based on what the image actually shows.

## 5. Verify

1. `npm run check` — catches frontmatter schema errors.
2. `npx astro dev` and open `http://localhost:4321/YYYY/MM/DD/<slug>` plus `/news`: title, excerpt, images and links render.

## 6. Hand off

Commit on `master` (e.g. `Add <topic> news item`) only when the user asks; push only when asked. Merging does not publish: the post goes live when the portal Jenkins job runs for `dev`, `preview` or `prod` (see `DEPLOY.md`).

## Common mistakes

| Mistake | Effect |
|---|---|
| Filename without `YYYY-MM-DD-` prefix | Wrong date and URL |
| `images: /images/posts/x.jpg` | Rendered as `//images/...` (broken, protocol-relative) |
| `import` / `<Image>` in a `.md` file | Printed as literal text; rename to `.mdx` |
| Unquoted `:` in title or excerpt | YAML parse error, build fails |
| `# Title` at top of body | Title shown twice |
| New category spelling variant (`release`, `Releases`) | Splits or duplicates category archives |
| `categories: Name Matching` (string) | Two categories, `Name` and `Matching` |
| Endpoint/URL taken from the request unchecked | Post announces something that doesn't exist |
