import { Taxon } from 'col-browser/taxon';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth, colBasemapStyle } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLTaxon = withRouting(Taxon, routingFor('taxon'));

// `basemapStyle` reached col-browser after 2.3.x; spread it (rather than name
// it as an attribute) so this typechecks against either version's .d.ts. Older
// builds ignore the prop and keep their built-in CARTO Positron style.
const basemapProps: Record<string, unknown> = colBasemapStyle
  ? { basemapStyle: colBasemapStyle }
  : {};

export default function TaxonIsland(props: Record<string, unknown>) {
  return (
    <URLTaxon
      theme={colTheme}
      auth={colAuth || undefined}
      {...basemapProps}
      {...props}
      datasetKey={String(versionCtx.datasetKey)}
    />
  );
}
