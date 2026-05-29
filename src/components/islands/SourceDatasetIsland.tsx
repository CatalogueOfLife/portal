import { SourceDataset } from 'col-browser/source-dataset';
import { withRouting } from 'col-browser/routing';
import { colPaths, colTheme, colAuth } from '../../lib/colPaths';

const URLSourceDataset = withRouting(SourceDataset, { kind: 'source', mode: 'path', navigation: 'reload', paths: colPaths });

export default function SourceDatasetIsland(props: Record<string, unknown>) {
  return <URLSourceDataset theme={colTheme} auth={colAuth || undefined} {...props} />;
}
