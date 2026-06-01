// Pure URL/token -> COL version helpers. Deliberately standalone (no
// versions/colPaths imports, so it can load in the global header without
// dragging col-browser CSS onto every page). Mirrors src/lib/version.ts.
//
// A "version token" is the compact, storable identity of the active version:
//   'extended' | 'base' | a 4-digit annual year (e.g. '2023').
// The URL wins whenever it pins a version; otherwise the header + islands fall
// back to the remembered token (localStorage) so the choice survives navigation
// to version-agnostic pages (downloads, news, about, home, …).

export const VERSION_STORAGE_KEY = 'col-portal:version';

const ANNUAL_RE = /^\/annual-checklist\/(\d{4})(?:\/|$)/;
// The per-version /data surfaces. Their bare form is the Extended release; with
// ?v=br they are the Base release. (download/changelog are version-agnostic.)
const DATA_SCOPED_RE = /^\/data\/(browse|search|sources|metrics|metadata|taxon\/|dataset\/)/;
const isYear = (t: string | null | undefined): t is string => !!t && /^\d{4}$/.test(t);

/** The version token a URL represents (ignores any remembered preference). */
export function versionToken(pathname = '/', search = ''): string {
  const annual = pathname.match(ANNUAL_RE);
  if (annual) return annual[1];
  return new URLSearchParams(search).get('v') === 'br' ? 'base' : 'extended';
}

/** True when the URL itself pins a version, so it must win over the stored
 *  preference: an annual path, ?v=br, or a per-version /data surface. */
export function isVersionSpecificPath(pathname = '/', search = ''): boolean {
  if (ANNUAL_RE.test(pathname)) return true;
  if (new URLSearchParams(search).get('v') === 'br') return true;
  return DATA_SCOPED_RE.test(pathname);
}

export function labelForToken(token: string): string {
  if (token === 'base') return 'Base';
  if (isYear(token)) return `Annual ${token}`;
  return 'Extended';
}

export function metadataHrefForToken(token: string): string {
  if (token === 'base') return '/data/metadata?v=br';
  if (isYear(token)) return `/annual-checklist/${token}/metadata`;
  return '/data/metadata';
}

/** Where the home logo points for the active version. */
export function homeHrefForToken(token: string): string {
  if (token === 'base') return '/?v=br';
  if (isYear(token)) return `/annual-checklist/${token}/`;
  return '/';
}

// Per-version /data nav paths and their per-year equivalents under
// /annual-checklist/{year}/ (browse is the year root; it isn't in the nav).
const ANNUAL_NAV: Record<string, string> = {
  '/data/search': 'search',
  '/data/sources': 'sources',
  '/data/metrics': 'metrics',
  '/data/metadata': 'metadata',
};
const BASE_SCOPED = new Set(Object.keys(ANNUAL_NAV));

/** Rewrite a canonical /data nav path to its equivalent in the active version. */
export function navHrefForToken(dataPath: string, token: string): string {
  if (isYear(token)) return dataPath in ANNUAL_NAV ? `/annual-checklist/${token}/${ANNUAL_NAV[dataPath]}` : dataPath;
  if (token === 'base') return BASE_SCOPED.has(dataPath) ? `${dataPath}?v=br` : dataPath;
  return dataPath; // extended
}

/** The taxon page URL for a (release-shared) id in the active version. */
export function taxonHrefForToken(id: string, token: string): string {
  if (isYear(token)) return `/annual-checklist/${token}/taxon/${id}`;
  if (token === 'base') return `/data/taxon/${id}?v=br`;
  return `/data/taxon/${id}`;
}

// --- URL-based wrappers used by the server-rendered header ------------------
export const versionLabel = (pathname = '/', search = '') => labelForToken(versionToken(pathname, search));
export const versionMetadataHref = (pathname = '/', search = '') => metadataHrefForToken(versionToken(pathname, search));
export const versionHomeHref = (pathname = '/') => homeHrefForToken(versionToken(pathname));
export const versionScopedHref = (path: string, pathname = '/') => navHrefForToken(path, versionToken(pathname));
