import { TaxonBreakdown } from 'col-browser/taxon-breakdown';
import { withRouting } from 'col-browser/routing';
import { colPaths, colTheme } from '../../lib/colPaths';

// TaxonBreakdown (col-browser 2.1.0) takes no `auth` prop — it reads public
// release metrics, like the rest of /data/metrics' unauthenticated fetches.
const URLBreakdown = withRouting(TaxonBreakdown, { kind: 'taxonBreakdown', mode: 'path', navigation: 'reload', paths: colPaths });

export default function MetricsIsland(props: Record<string, unknown>) {
  return <URLBreakdown theme={colTheme} {...props} />;
}
