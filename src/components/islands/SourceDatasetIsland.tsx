import { SourceDataset, withRouting } from 'col-browser';
import { colPaths } from '../../lib/colPaths';

const URLSourceDataset = withRouting(SourceDataset, { kind: 'source', mode: 'path', navigation: 'reload', paths: colPaths });

export default function SourceDatasetIsland(props: Record<string, unknown>) {
  return <URLSourceDataset {...props} />;
}
