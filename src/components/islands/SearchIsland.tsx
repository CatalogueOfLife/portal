import { Search, withRouting } from 'col-browser';
import { colPaths } from '../../lib/colPaths';

const URLSearch = withRouting(Search, { kind: 'search', mode: 'path', navigation: 'reload', paths: colPaths });

export default function SearchIsland(props: Record<string, unknown>) {
  return <URLSearch {...props} />;
}
