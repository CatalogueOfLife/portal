# Deploying the portal (Astro)

The portal is an [Astro](https://astro.build) site. Most pages are prerendered
to static HTML; a handful of data routes render on demand in a small Node
service. This replaces the old Jekyll build + the backend's Freemarker
`PortalPageRenderer` (which can be removed once this is live — see the migration
plan, Phase 7).

## Build

```bash
npm ci
npm run build      # runs `prebuild` (scripts/fetch-data.mjs) then `astro build`
```

Output:
- `dist/client/` — static assets + prerendered HTML (served directly by Apache/CDN).
- `dist/server/entry.mjs` — the standalone Node server for on-demand routes.

Environment variables (build time):
- `SITE_ENV` — `prod` (default), `dev`, or `preview`. Non-prod emits a
  `Disallow: /` robots.txt.
- `CLB_API` — API base (default `https://api.checklistbank.org`); `COL_KEY`,
  `COL_ORIGIN`, `COL_PRIVATE`, and `CLB_USER`/`CLB_PASS` for the data fetch.

## On-demand (SSR) routes

Only these run in the Node service (everything else is static):

- `/data/taxon/[id]` — taxon SEO + island; synonyms 301 → accepted taxon.
- `/data/dataset/[key]` — source dataset SEO + island.

Run the server with `node ./dist/server/entry.mjs` (listens on `PORT`, default
4321). Put it behind Varnish like the rest of the stack.

## Routing (Apache / Varnish)

Serve `dist/client/` statically and **proxy the SSR paths to the Node service**:

```
/data/taxon/*     -> Node SSR service
/data/dataset/*   -> Node SSR service
everything else   -> static dist/client/ (then 404.html)
```

This obsoletes the old `.htaccess` / `_redirects` rewrite that sent
`/data/taxon/*` to a single `data/taxon.html` shell — the Node service now
renders each taxon/dataset page directly. Those two files can be deleted.

### Legacy `/annual-checklist`
The download page links to `/annual-checklist/<year>` (pre-2021 annual editions).
These are **not** served by the portal — they live on the legacy archive
infrastructure. Apache must continue to proxy `/annual-checklist/*` there (it is
`Disallow`ed in robots.txt). They will 404 against the portal alone.

### Legacy URL redirects
The migration changed a few URL shapes. `/news/index` → `/news` is handled by
Astro. Handle the rest at the edge (301):
- `*.html` → same path without `.html` (e.g. `/about/catalogueoflife.html`).
- `/category/<x>/index` → `/category/<x>`, `/<year>/index` → `/<year>`.

## Sitemaps (monthly, Jenkins)

`scripts/update-sitemaps.sh` regenerates the chunked taxon sitemaps from the
latest public XRelease into `public/sitemaps/*.txt.gz` (50k URLs/file) and
commits them. The commit triggers a rebuild, and `robots.txt` lists whatever
`.gz` files are present. Editorial and dataset sitemaps are generated at build
by `/sitemap.txt` and `/sitemap-datasets.txt`.

Ensure Apache serves `public/sitemaps/*.txt.gz` with
`Content-Type: text/plain` and `Content-Encoding: gzip`.
