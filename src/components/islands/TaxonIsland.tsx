import { Taxon } from 'col-browser/taxon';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLTaxon = withRouting(Taxon, routingFor('taxon'));

export default function TaxonIsland(props: Record<string, unknown>) {
  return <URLTaxon theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />;
}
