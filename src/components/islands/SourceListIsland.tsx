import { SourceDatasetList } from 'col-browser/source-dataset-list';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLSourceList = withRouting(SourceDatasetList, routingFor('sourceList'));

export default function SourceListIsland(props: Record<string, unknown>) {
  return <URLSourceList theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />;
}
