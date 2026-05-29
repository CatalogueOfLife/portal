import { Taxon, withRouting } from 'col-browser';
import { colPaths, colTheme } from '../../lib/colPaths';

const URLTaxon = withRouting(Taxon, { kind: 'taxon', mode: 'path', navigation: 'reload', paths: colPaths });

export default function TaxonIsland(props: Record<string, unknown>) {
  return <URLTaxon theme={colTheme} {...props} />;
}
