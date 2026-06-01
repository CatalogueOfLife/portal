// Pure URL -> COL version label. Deliberately standalone (no versions/colPaths
// imports, so it can load in the global header without dragging col-browser
// CSS onto every page). Mirrors the labels in src/lib/version.ts.
export function versionLabel(pathname = '/', search = ''): string {
  const annual = pathname.match(/^\/annual-checklist\/(\d{4})(?:\/|$)/);
  if (annual) return `Annual ${annual[1]}`;
  return new URLSearchParams(search).get('v') === 'br' ? 'Base' : 'eXtended';
}

/** The metadata page URL for the version the given URL represents. */
export function versionMetadataHref(pathname = '/', search = ''): string {
  const annual = pathname.match(/^\/annual-checklist\/(\d{4})(?:\/|$)/);
  if (annual) return `/annual-checklist/${annual[1]}/metadata`;
  return new URLSearchParams(search).get('v') === 'br' ? '/data/metadata?v=br' : '/data/metadata';
}
