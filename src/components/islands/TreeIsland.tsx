import { Tree } from 'col-browser/tree';
import { withRouting } from 'col-browser/routing';
import { colTheme, colAuth } from '../../lib/colPaths';
import { versionCtx, routingFor } from '../../lib/island';

const URLTree = withRouting(Tree, routingFor('tree'));

export default function TreeIsland({ currentRootKey, defaultTaxonKey, ...props }: Record<string, unknown>) {
  // Which root the tree opens on load. `currentRootKey` is a root id that only
  // exists on the current Extended/Base lineage (e.g. "CS5HF" = Eukaryota), so
  // it is ignored on a remembered annual edition whose roots differ — otherwise
  // col-browser would expandToTaxon a missing id. An explicit `defaultTaxonKey`
  // (the annual browse page resolves its own root) always wins.
  const expandKey =
    (defaultTaxonKey as string | undefined) ??
    (versionCtx.kind === 'annual' ? undefined : (currentRootKey as string | undefined));
  return (
    <URLTree
      theme={colTheme}
      auth={colAuth || undefined}
      defaultTaxonKey={expandKey}
      {...props}
      datasetKey={String(versionCtx.datasetKey)}
    />
  );
}
