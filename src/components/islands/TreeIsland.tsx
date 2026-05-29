import { Tree } from 'col-browser/tree';
import { withRouting } from 'col-browser/routing';
import { colPaths, colTheme, colAuth } from '../../lib/colPaths';

const URLTree = withRouting(Tree, { kind: 'tree', mode: 'path', navigation: 'reload', paths: colPaths });

export default function TreeIsland(props: Record<string, unknown>) {
  return <URLTree theme={colTheme} auth={colAuth || undefined} {...props} />;
}
