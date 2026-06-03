import { TaxonBreakdown } from 'col-browser/taxon-breakdown';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLBreakdown = withRouting(TaxonBreakdown, routingFor('taxonBreakdown'));

// TaxonBreakdown hits /dataset/{key}/taxon/… which needs Basic auth for private
// candidate releases (preview/dev). col-browser 2.2.x accepts the `auth` prop
// again (BreakDownWrapper calls setAuth), so forward it like the other islands.
// Empty on prod (public release) -> no Authorization header.
export default function MetricsIsland(props: Record<string, unknown>) {
  return <URLBreakdown theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />;
}
