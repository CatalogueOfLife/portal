/**
 * Resolve a ChecklistBank license to its canonical URL.
 *
 * The source/dataset API returns `license` as a plain enum string (e.g. "cc by"),
 * which is NOT a valid value for schema.org's `license` property — Google flags it.
 * This maps the enum name to the matching URL from the CLB license vocabulary:
 *   https://api.checklistbank.org/vocab/license
 *
 * `unspecified` and `other` carry no URL and resolve to undefined.
 */
const LICENSE_URLS: Record<string, string> = {
  'cc0': 'http://creativecommons.org/publicdomain/zero/1.0/legalcode',
  'cc by': 'http://creativecommons.org/licenses/by/4.0/legalcode',
  'cc by nc': 'http://creativecommons.org/licenses/by-nc/4.0/legalcode',
};

/** Resolve a CLB license (enum name string, or a {url} object) to a URL, or undefined. */
export function licenseUrl(license: unknown): string | undefined {
  if (!license) return undefined;
  if (typeof license === 'string') return LICENSE_URLS[license.trim().toLowerCase()];
  if (typeof license === 'object' && 'url' in license) {
    const u = (license as { url?: unknown }).url;
    return typeof u === 'string' ? u : undefined;
  }
  return undefined;
}
