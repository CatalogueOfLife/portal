// Pure URL -> COL version label. Deliberately standalone (no versions/colPaths
// imports, so it can load in the global header without dragging col-browser
// CSS onto every page). Mirrors the labels in src/lib/version.ts.
export function versionLabel(pathname = '/', search = ''): string {
  const annual = pathname.match(/^\/annual-checklist\/(\d{4})(?:\/|$)/);
  if (annual) return `Annual ${annual[1]}`;
  return new URLSearchParams(search).get('v') === 'br' ? 'Base' : 'Extended';
}

/** The metadata page URL for the version the given URL represents. */
export function versionMetadataHref(pathname = '/', search = ''): string {
  const annual = pathname.match(/^\/annual-checklist\/(\d{4})(?:\/|$)/);
  if (annual) return `/annual-checklist/${annual[1]}/metadata`;
  return new URLSearchParams(search).get('v') === 'br' ? '/data/metadata?v=br' : '/data/metadata';
}

// Map a /data/* nav path to its per-year equivalent under /annual-checklist/.
// (Browse is the year root; download/changelog are version-agnostic and absent.)
const ANNUAL_NAV: Record<string, string> = {
  '/data/search': 'search',
  '/data/sources': 'sources',
  '/data/metrics': 'metrics',
  '/data/metadata': 'metadata',
};

// Rewrite a nav link so it stays within the active version. Annual is path-based
// and known server-side (in Astro.url), so the header rewrites those links at
// render time; Base (?v=br) is query-based and fixed client-side instead, so
// here we only handle annual and otherwise return the path unchanged.
export function versionScopedHref(path: string, pathname = '/'): string {
  const annual = pathname.match(/^\/annual-checklist\/(\d{4})(?:\/|$)/);
  if (annual && path in ANNUAL_NAV) return `/annual-checklist/${annual[1]}/${ANNUAL_NAV[path]}`;
  return path;
}

/** Where the home logo points for the active version (annual stays in-year;
 *  Base keeps '/' and gets ?v=br appended client-side). */
export function versionHomeHref(pathname = '/'): string {
  const annual = pathname.match(/^\/annual-checklist\/(\d{4})(?:\/|$)/);
  return annual ? `/annual-checklist/${annual[1]}/` : '/';
}
