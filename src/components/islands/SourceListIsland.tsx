import { SourceDatasetList } from 'col-browser/source-dataset-list';
import { withRouting } from 'col-browser/routing';
import { colPaths, colTheme, colAuth } from '../../lib/colPaths';

const URLSourceList = withRouting(SourceDatasetList, { kind: 'sourceList', mode: 'path', navigation: 'reload', paths: colPaths });

export default function SourceListIsland(props: Record<string, unknown>) {
  return <URLSourceList theme={colTheme} auth={colAuth || undefined} {...props} />;
}
