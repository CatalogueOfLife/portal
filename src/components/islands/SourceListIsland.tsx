import { SourceDatasetList, withRouting } from 'col-browser';
import { colPaths } from '../../lib/colPaths';

const URLSourceList = withRouting(SourceDatasetList, { kind: 'sourceList', mode: 'path', navigation: 'reload', paths: colPaths });

export default function SourceListIsland(props: Record<string, unknown>) {
  return <URLSourceList {...props} />;
}
