// Shared version-aware routing for the col-browser island wrappers.
//
// The active version is derived once from the URL (islands are client:only +
// navigation:'reload', so the location is fixed for the island's lifetime):
//   - datasetKey  -> the version's release key (overrides the page's prop)
//   - linkPaths   -> per-kind URL prefixes (year-prefixed for annual versions)
//   - linkQuery   -> reserved query (?v=br for Base) carried onto cross-links
import { resolveVersionFromLocation } from './version';

export const versionCtx = resolveVersionFromLocation();

type RoutingKind = 'tree' | 'search' | 'taxon' | 'source' | 'sourceList' | 'taxonBreakdown';

export function routingFor(kind: RoutingKind) {
  return {
    kind,
    mode: 'path' as const,
    navigation: 'reload' as const,
    paths: versionCtx.linkPaths,
    // Reserved query (Base = ?v=br): appended to cross-links, excluded from the
    // component's parsed state. Empty for Extended/annual. (col-browser ≥ 2.2.1)
    query: versionCtx.linkQuery,
  };
}
