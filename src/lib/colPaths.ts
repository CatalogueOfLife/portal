// col-browser's stylesheet, exported by the package (2.0.1+). Imported here
// because every island wrapper imports this module, so the CSS is bundled with
// the island and loaded only on the data pages that use it.
import 'col-browser/style.css';

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
