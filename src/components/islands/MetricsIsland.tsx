import { TaxonBreakdown } from 'col-browser/taxon-breakdown';
import { withRouting } from 'col-browser/routing';
import { colPaths, colTheme } from '../../lib/colPaths';

const URLBreakdown = withRouting(TaxonBreakdown, { kind: 'taxonBreakdown', mode: 'path', navigation: 'reload', paths: colPaths });

// NOTE: TaxonBreakdown hits /dataset/{key}/... which needs Basic auth for
// private candidate releases (preview/dev). col-browser 2.1.0 dropped the
// `auth` prop here and exposes no setAuth, so it can't be authenticated from
// the host yet — restore `auth={colAuth}` once col-browser re-adds the prop
// (see colPaths.colAuth). On prod (public release) no auth is needed.
export default function MetricsIsland(props: Record<string, unknown>) {
  return <URLBreakdown theme={colTheme} {...props} />;
}
