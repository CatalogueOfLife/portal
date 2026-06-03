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

/** Where the header logo points. Like the home, but an annual edition returns
 *  to the Extended home — the logo is the way out of an annual list (the Header
 *  also resets the remembered version to Extended on that click). */
export function logoHrefForToken(token: string): string {
  return token === 'base' ? '/?v=br' : '/';
}

// Per-version /data nav paths and their per-year equivalents under
// /annual-checklist/{year}/. Browse maps to the year root (an annual edition's
// browse tree); it is shown in the data menu only for annual versions.
const ANNUAL_NAV: Record<string, string> = {
  '/data/browse': '',
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

// The per-version data surfaces that have an equivalent in every version, keyed
// off their canonical /data path (download + changelog are intentionally absent
// — they are version-agnostic and dropped from the annual menu). Each surface
// appears either as /data/<surface> (Extended/Base) or
// /annual-checklist/{year}/<surface> (annual) — the two forms are exclusive.
const SWITCHABLE_SURFACE_RE = /^(?:\/annual-checklist\/\d{4}\/|\/data\/)(search|sources|metrics|metadata)(?:[/?]|$)/;
const TAXON_RE = /^(?:\/annual-checklist\/\d{4}\/|\/data\/)taxon\/([^/?]+)/;
const HOME_RE = /^(?:\/|\/annual-checklist\/\d{4}\/?|\/data\/browse\/?)$/;

/**
 * Where the header version popup sends you when picking `token`: the same data
 * surface in the chosen version, or — for pages with no per-version equivalent
 * (home → that version's home; about/news/download/changelog/dataset/… →
 * metadata) — a sensible fallback. Depends only on (token, current path), so it
 * can be computed server-side and never needs the active version.
 */
export function versionSwitchHref(token: string, pathname = '/'): string {
  if (HOME_RE.test(pathname)) return homeHrefForToken(token);
  const taxon = pathname.match(TAXON_RE);
  if (taxon) return taxonHrefForToken(taxon[1], token);
  const surface = pathname.match(SWITCHABLE_SURFACE_RE);
  if (surface) return navHrefForToken(`/data/${surface[1]}`, token);
  return metadataHrefForToken(token);
}

/** The storable token for a version record ('extended' | 'base' | a year). */
export function tokenForVersion(v: { kind: string; year?: number }): string {
  return v.kind === 'annual' && v.year ? String(v.year) : v.kind;
}

// --- URL-based wrappers used by the server-rendered header ------------------
export const versionLabel = (pathname = '/', search = '') => labelForToken(versionToken(pathname, search));
export const versionLogoHref = (pathname = '/', search = '') => logoHrefForToken(versionToken(pathname, search));
export const versionScopedHref = (path: string, pathname = '/') => navHrefForToken(path, versionToken(pathname));
