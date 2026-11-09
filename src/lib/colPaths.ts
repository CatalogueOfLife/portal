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
// col-browser. Empty -> col-browser keeps its own default (>= 2.9.0: the
// bundled, keyless COL Positron style on GBIF vector tiles), so we
// deliberately don't repeat that URL here.
export const colBasemapStyle = import.meta.env.PUBLIC_COL_BASEMAP_STYLE || '';

// Site-wide defaults for every col-browser instance. This module is imported by
// all island wrappers, and col-browser reads config as it renders, so these
// land before any island mounts.
if (colBasemapStyle) configure({ basemapStyle: colBasemapStyle });
