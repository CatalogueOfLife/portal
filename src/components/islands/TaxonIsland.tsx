import { Taxon } from 'col-browser/taxon';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth, colBasemapStyle } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLTaxon = withRouting(Taxon, routingFor('taxon'));

export default function TaxonIsland(props: Record<string, unknown>) {
  // `basemapStyle` is already set globally via configure() in colPaths; passing
  // it here too puts it before {...props}, so a page can override the basemap
  // per instance. The CARTO key is global-only — it applies to whatever CARTO
  // basemap ends up being used.
  return (
    <URLTaxon
      theme={colTheme}
      auth={colAuth || undefined}
      basemapStyle={colBasemapStyle || undefined}
      {...props}
      datasetKey={String(versionCtx.datasetKey)}
    />
  );
}
