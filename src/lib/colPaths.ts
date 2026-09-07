// col-browser's stylesheet, exported by the package (2.0.1+). Imported here
// because every island wrapper imports this module, so the CSS is bundled with
// the island and loaded only on the data pages that use it.
import 'col-browser/style.css';
import { configure } from 'col-browser/config';

// Cross-linking paths for col-browser's withRouting (was window.ColBrowserPaths).
export const colPaths = {
  taxon: '/data/taxon/',
  tree: '/data/browse',
  search: '/data/search',
  source: '/data/dataset/',
};

// antd v5 (used by col-browser 2.x) defaults borderRadius to 6px; the previous
// portal-components design used near-square 2px corners. Forwarded to every
// component via its `theme` prop -> antd ConfigProvider (was window.ColBrowserTheme).
export const colTheme = { token: { borderRadius: 2 } };

// Raw "user:pass" passed to col-browser's `auth` prop (it base64-encodes it) so
// the client-side API calls can read private candidate releases on preview/dev.
// Empty on prod (public release) -> col-browser sends no Authorization header.
// NOTE: this value is inlined into the client bundle, so on preview/dev it is
// visible to anyone who can reach those (gated) sites — prefer a read-only
// credential over an admin one.
export const colAuth = import.meta.env.PUBLIC_COL_AUTH || '';

// Optional MapLibre style URL for the distribution map's basemap, forwarded to
// col-browser. Empty -> col-browser keeps its own default (CARTO's free keyless
// Positron style), so we deliberately don't repeat that URL here.
//
// NOTE: a MapLibre style URL is fetched by the *browser*, so any CARTO
// `api_key` embedded in it is necessarily public. Use a key restricted to the
// catalogueoflife.org hosts; don't reuse one with broader scope.
export const colBasemapStyle = import.meta.env.PUBLIC_COL_BASEMAP_STYLE || '';

// CARTO Basemaps API key. col-browser installs a MapLibre transformRequest that
// appends it to every cartocdn.com request the distribution map makes — style,
// vector tiles, glyphs, sprites. CARTO meters *tile* requests, and their style
// files are static with absolute key-free tile URLs, so a key baked into the
// style URL alone would authenticate nothing that counts.
//
// Like colAuth, this is inlined into the client bundle — unavoidable, since
// MapLibre fetches the tiles from the browser. Supplied per environment from
// the Jenkins credential 'carto-basemap-cred', not committed to this repo.
export const colCartoKey = import.meta.env.PUBLIC_CARTO_KEY || '';

// Site-wide defaults for every col-browser instance. This module is imported by
// all island wrappers, and col-browser reads config as it renders, so these
// land before any island mounts.
if (colBasemapStyle) configure({ basemapStyle: colBasemapStyle });
if (colCartoKey) configure({ cartoKey: colCartoKey });
