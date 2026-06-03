import { SourceDataset } from 'col-browser/source-dataset';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLSourceDataset = withRouting(SourceDataset, routingFor('source'));

export default function SourceDatasetIsland(props: Record<string, unknown>) {
  return (
    <URLSourceDataset theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />
  );
}
