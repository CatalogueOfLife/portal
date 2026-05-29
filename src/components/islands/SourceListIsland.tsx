import { SourceDatasetList, withRouting } from 'col-browser';
import { colPaths, colTheme, colAuth } from '../../lib/colPaths';

const URLSourceList = withRouting(SourceDatasetList, { kind: 'sourceList', mode: 'path', navigation: 'reload', paths: colPaths });

export default function SourceListIsland(props: Record<string, unknown>) {
  return <URLSourceList theme={colTheme} auth={colAuth || undefined} {...props} />;
}
