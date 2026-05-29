import { Tree, withRouting } from 'col-browser';
import { colPaths, colTheme } from '../../lib/colPaths';

const URLTree = withRouting(Tree, { kind: 'tree', mode: 'path', navigation: 'reload', paths: colPaths });

export default function TreeIsland(props: Record<string, unknown>) {
  return <URLTree theme={colTheme} {...props} />;
}
