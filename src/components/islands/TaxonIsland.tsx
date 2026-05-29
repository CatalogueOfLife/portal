import { Taxon } from 'col-browser/taxon';
import { withRouting } from 'col-browser/routing';
import { colPaths, colTheme, colAuth } from '../../lib/colPaths';

const URLTaxon = withRouting(Taxon, { kind: 'taxon', mode: 'path', navigation: 'reload', paths: colPaths });

export default function TaxonIsland(props: Record<string, unknown>) {
  return <URLTaxon theme={colTheme} auth={colAuth || undefined} {...props} />;
}
