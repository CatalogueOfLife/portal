// The set of COL versions a user can browse, derived entirely from the
// already-baked build data (no extra fetch):
//   - eXtended release  -> the default; the canonical /, /data/* URLs
//   - Base release      -> the same URLs + ?v=br
//   - Annual releases    -> /annual-checklist/{year}/ (ChecklistBank-hosted, 2021+)
//
// Used by the homepage version selector, the header indicator, and the
// per-version routing/SSR (see src/lib/version.ts).
import { metadata } from './releaseMetadata';
import { changelogEntries } from './changelog';

export type VersionKind = 'extended' | 'base' | 'annual';

export interface Version {
  kind: VersionKind;
  key: number;
  /** Calendar year, for annual releases. */
  year?: number;
  /** Short label for the header indicator + selector (e.g. "eXtended", "Annual 2023"). */
  label: string;
  /** The underlying release version string (e.g. "2026-05-15 XR"). */
  version: string;
  /** Where selecting this version navigates. */
  href: string;
  isDefault?: boolean;
}

// First annual release hosted in ChecklistBank (earlier years stay on the
// legacy archives site under the same /annual-checklist/{year}/ path).
const FIRST_CLB_ANNUAL = 2021;

const extended: Version = {
  kind: 'extended',
  key: metadata.releaseKey,
  label: 'eXtended',
  version: metadata.current.version,
  href: '/',
  isDefault: true,
};

const base: Version | null = metadata.base
  ? {
      kind: 'base',
      key: metadata.base.current.key,
      label: 'Base',
      version: metadata.base.current.version,
      href: '/data/browse?v=br',
    }
  : null;

const annual: Version[] = changelogEntries
  .filter((e) => !e.rel.extended && /^Annual/i.test(e.rel.dataset.version || ''))
  .map((e) => {
    const year = Number((e.rel.dataset.version || '').match(/(\d{4})/)?.[1]);
    return { entry: e, year };
  })
  .filter(({ year }) => Number.isFinite(year) && year >= FIRST_CLB_ANNUAL)
  // de-dupe by year (keep the first / newest, since changelog is newest-first)
  .filter(({ year }, i, arr) => arr.findIndex((x) => x.year === year) === i)
  .map(({ entry, year }) => ({
    kind: 'annual' as const,
    key: entry.rel.key,
    year,
    label: `Annual ${year}`,
    version: entry.rel.dataset.version || `Annual ${year}`,
    href: `/annual-checklist/${year}/`,
  }))
  .sort((a, b) => (b.year ?? 0) - (a.year ?? 0));

/** All selectable versions: eXtended (default), Base, then annual newest-first. */
export const versions: Version[] = [extended, ...(base ? [base] : []), ...annual];

export const extendedKey = extended.key;
export const baseKey = base?.key ?? extended.key;
export const defaultVersionKey = extended.key;
/** year -> annual release dataset key (CLB-hosted years only). */
export const annualKeyByYear: Record<number, number> = Object.fromEntries(
  annual.map((v) => [v.year as number, v.key]),
);
/** Annual years served by the portal (vs. the legacy archives backend). */
export const clbAnnualYears: number[] = annual.map((v) => v.year as number);
