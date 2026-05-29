# Deploying the portal (Astro)

The portal is an [Astro](https://astro.build) site. Most pages are prerendered
to static HTML; a handful of data routes render on demand in a small Node
service. This replaces the old Jekyll build + the backend's Freemarker
`PortalPageRenderer` (which can be removed once this is live — see the migration
plan, Phase 7).

## Requirements

- **Node 22 LTS (≥ 22.12.0)** — hard requirement of Astro 6 (enforced via the
  `engines` field; `.nvmrc` pins `22`). Use the same version to build and to run.
- **npm 10+** — the version bundled with Node 22 (no separate install).
- The monthly sitemap job (`scripts/update-sitemaps.sh`) additionally needs
  **bash, curl, jq, gzip** on the box it runs on.

## Build

```bash
npm ci             # reproducible install from package-lock.json (needs network)
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

## Continuous deployment (Jenkins)

`scripts/deploy.sh` builds and deploys all three environments from a freshly
cloned repo:

```bash
ENV=prod|preview|dev   PWD_PORTAL=<colportal read-only pw>   scripts/deploy.sh
```

The repo's `Jenkinsfile` (a Pipeline job, "Pipeline script from SCM") runs exactly
this for manual deploys: `ENV` is a choice parameter and `PWD_PORTAL` is a
password parameter (entered per run, masked in the log). Jenkins injects both as
environment variables for the script, which runs straight from the checked-out
workspace — nothing is copied into the Jenkins job.

All envs build identically (Node 22 in Docker) and pull data from the **prod**
ChecklistBank; they differ only in the pinned release alias and the deploy
targets:

| ENV | release alias | host | static dir | Varnish target | SSR port |
|---|---|---|---|---|---|
| prod | `3LXR` | apps.checklistbank.org | `/var/www/html/col-portal/` | www.catalogueoflife.org | 4321 |
| preview | `3LRC` | apps.checklistbank.org | `/var/www/html/col-portal-preview/` | preview.catalogueoflife.org | 4322 |
| dev | `3LXRC` | apps.dev.checklistbank.org | `/var/www/html/col-portal/` | www.dev.catalogueoflife.org | 4321 |

The script resolves the alias to a release key against the prod CLB, builds with
`COL_RELEASE` pinned to it, rsyncs `dist/client/` to the static dir **and**
`dist/` + `node_modules` to `/opt/col-portal/<env>/`, then restarts the SSR
service and flushes Varnish. The old release-key/template PUTs to the backend
are gone (Astro renders those routes now).

### SSR service (systemd)

`scripts/col-portal@.service` is a template unit — install it once per app host
as `/etc/systemd/system/col-portal@.service` and `systemctl enable --now
col-portal@<env>`. It runs `node /opt/col-portal/<env>/dist/server/entry.mjs`
reading `service.env` (HOST/PORT, written by the deploy). Needs Node 22, a `col`
user, and a sudoers rule letting `jenkins-deploy` restart `col-portal@*`.

### Authentication (private candidate releases)

`3LRC`/`3LXRC` (preview/dev) are **private**, so `deploy.sh` authenticates every
API call for those envs (prod's `3LXR` is public and stays unauthenticated):

- **`PUBLIC_COL_AUTH`** (`"user:pass"`, passed to the Docker build) covers the
  build-time fetches (`fetch-data.mjs`, homepage milestone counts) **and** is
  baked into the client bundle as col-browser's `auth` prop for the islands.
- **`COL_AUTH`** (`"user:pass"`, written to `service.env`) is read at request
  time by the SSR taxon/dataset routes (`src/lib/colApi.ts`).

Both use the dedicated **read-only `colportal`** CLB account (password
`PWD_PORTAL`), since the island `auth` prop ships in client JS and is therefore
visible to anyone who can reach the (gated) preview/dev sites. `service.env`
holds the credential too — `deploy.sh` writes it `umask 077`; keep it `col`-only.

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
