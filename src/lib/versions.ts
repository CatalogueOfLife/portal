// Build-time package versions. The set of packages comes from this project's
// package.json (its direct dependencies); the exact installed version of each
// comes from package-lock.json (e.g. packages["node_modules/col-browser"]).
// Vite inlines both JSON files at build time, so the numbers are frozen into
// the static HTML and the SSR server bundle — exactly what `npm ci` installed,
// with no runtime filesystem lookups. Surfaced as the `col-browser-version`
// <meta> tag (Base.astro) and on the hidden /about/version page.
import pkg from '../../package.json';
import lock from '../../package-lock.json';

export interface PackageInfo {
  name: string;
  version: string;
  dev: boolean;
}

const lockPackages = (lock as { packages: Record<string, { version?: string }> }).packages;

const versionOf = (name: string): string => lockPackages[`node_modules/${name}`]?.version ?? 'unknown';

const toList = (names: string[], dev: boolean): PackageInfo[] =>
  [...names].sort((a, b) => a.localeCompare(b)).map((name) => ({ name, version: versionOf(name), dev }));

/** Direct dependencies (runtime first, then dev), each with its installed version. */
export const packages: PackageInfo[] = [
  ...toList(Object.keys(pkg.dependencies ?? {}), false),
  ...toList(Object.keys(pkg.devDependencies ?? {}), true),
];

/** col-browser (portal-components) version bundled into this build. */
export const colBrowserVersion: string = versionOf('col-browser');

/** Astro version this site was built with. */
export const astroVersion: string = versionOf('astro');
