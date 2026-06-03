import { Search } from 'col-browser/search';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLSearch = withRouting(Search, routingFor('search'));

export default function SearchIsland(props: Record<string, unknown>) {
  return <URLSearch theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />;
}
