// Resolves which COL version a given URL represents, and the routing the
// col-browser islands should use for it. The URL is the single source of truth:
//   /annual-checklist/{year}/...  -> that year's annual release (links stay under the prefix)
//   ...?v=br                       -> latest Base release (links carry ?v=br)
//   everything else                -> latest eXtended release (default)
//
// Works on both server (Astro SSR routes pass pathname+search) and client
// (islands call resolveVersionFromLocation). localStorage only remembers the
// last pick to preselect the homepage selector — it never drives routing.
import { colPaths } from './colPaths';
import { annualKeyByYear, baseKey, extendedKey, type VersionKind } from '@data/versions';

export interface VersionContext {
  kind: VersionKind;
  datasetKey: number;
  year?: number;
  /** Per-kind URL prefixes for withRouting cross-links. */
  linkPaths: typeof colPaths;
  /** Query appended to cross-links ('' or '?v=br'). */
  linkQuery: string;
  label: string;
}

export function resolveVersion(pathname = '/', search = ''): VersionContext {
  const annual = pathname.match(/^\/annual-checklist\/(\d{4})(?:\/|$)/);
  if (annual) {
    const year = Number(annual[1]);
    const key = annualKeyByYear[year];
    if (key) {
      const base = `/annual-checklist/${year}`;
      return {
        kind: 'annual',
        datasetKey: key,
        year,
        linkPaths: {
          taxon: `${base}/taxon/`,
          tree: `${base}/`,
          search: `${base}/search`,
          source: `${base}/dataset/`,
        },
        linkQuery: '',
        label: `Annual ${year}`,
      };
    }
  }
  if (new URLSearchParams(search).get('v') === 'br') {
    return { kind: 'base', datasetKey: baseKey, linkPaths: colPaths, linkQuery: '?v=br', label: 'Base' };
  }
  return { kind: 'extended', datasetKey: extendedKey, linkPaths: colPaths, linkQuery: '', label: 'eXtended' };
}

export function resolveVersionFromLocation(): VersionContext {
  if (typeof window === 'undefined') return resolveVersion('/', '');
  return resolveVersion(window.location.pathname, window.location.search);
}

// --- selector memory (UI only) --------------------------------------------
const STORAGE_KEY = 'col-portal:version';

export function getStoredVersionHref(): string | null {
  try {
    return window.localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

export function setStoredVersionHref(href: string): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, href);
  } catch {
    /* private mode / SSR */
  }
}
