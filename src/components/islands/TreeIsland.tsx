import { Tree } from 'col-browser/tree';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLTree = withRouting(Tree, routingFor('tree'));

export default function TreeIsland(props: Record<string, unknown>) {
  return <URLTree theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />;
}
