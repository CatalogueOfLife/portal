import { Search } from 'col-browser/search';
import { withRouting } from 'col-browser/routing';
import { colPaths, colTheme, colAuth } from '../../lib/colPaths';

const URLSearch = withRouting(Search, { kind: 'search', mode: 'path', navigation: 'reload', paths: colPaths });

export default function SearchIsland(props: Record<string, unknown>) {
  return <URLSearch theme={colTheme} auth={colAuth || undefined} {...props} />;
}
