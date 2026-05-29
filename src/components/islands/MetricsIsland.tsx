import { TaxonBreakdown, withRouting } from 'col-browser';
import { colPaths, colTheme } from '../../lib/colPaths';

const URLBreakdown = withRouting(TaxonBreakdown, { kind: 'taxonBreakdown', mode: 'path', navigation: 'reload', paths: colPaths });

export default function MetricsIsland(props: Record<string, unknown>) {
  return <URLBreakdown theme={colTheme} {...props} />;
}
