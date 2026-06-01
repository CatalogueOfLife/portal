import { SourceDatasetList } from 'col-browser/source-dataset-list';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';
import './sourceList.css';

const URLSourceList = withRouting(SourceDatasetList, routingFor('sourceList'));

export default function SourceListIsland(props: Record<string, unknown>) {
  // Single-lineage releases (Base, annual) contain no Extended (XR) data, so the
  // list's "Include XR" toggle is meaningless — flag the wrapper so sourceList.css
  // hides it. The Extended release keeps the toggle.
  const className = versionCtx.kind !== 'extended' ? 'sources-single' : undefined;
  return (
    <div className={className}>
      <URLSourceList theme={colTheme} auth={colAuth || undefined} {...props} datasetKey={String(versionCtx.datasetKey)} />
    </div>
  );
}
