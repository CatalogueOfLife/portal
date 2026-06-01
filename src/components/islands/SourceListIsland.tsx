import { SourceDatasetList } from 'col-browser/source-dataset-list';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLSourceList = withRouting(SourceDatasetList, routingFor('sourceList'));

export default function SourceListIsland(props: Record<string, unknown>) {
  // The Base release contains no Extended (XR) data, so the list's "Include XR"
  // toggle is meaningless there — flag it so the page CSS hides it (sources.astro).
  const className = versionCtx.kind === 'base' ? 'sources-base' : undefined;
  return (
    <div className={className}>
      <URLSourceList theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />
    </div>
  );
}
