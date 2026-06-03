// Build-time "Changes over time" series, assembled once and shared by the
// chart at the bottom of /data/download. ChecklistBank releases (2020-12
// onward) come from the cached changelog metrics; 2005–2019 from the static
// annual-checklist figures in _data/legacy_metrics.yml. No runtime API call.
//
// Each point carries `ext` so a single array can drive both the Base and
// Extended series — the chart filters by it (legacy figures are Base-only).
import { changelogEntries } from './changelog';
import { legacyMetrics } from './legacyMetrics';

export interface TimelinePoint {
  t: string; // ISO date (YYYY-MM-DD)
  ext: boolean;
  family: number | null;
  genus: number | null;
  species: number | null;
  names: number | null;
}

export const timeline: TimelinePoint[] = [
  ...changelogEntries
    .filter((e) => e.rel?.metrics?.taxaByRankCount?.species)
    .map((e) => ({
      t: (e.rel.dataset.issued || e.rel.dataset.created || '').slice(0, 10),
      ext: !!e.rel.extended,
      family: e.rel.metrics.taxaByRankCount.family ?? null,
      genus: e.rel.metrics.taxaByRankCount.genus ?? null,
      species: e.rel.metrics.taxaByRankCount.species ?? null,
      names: e.rel.metrics.nameCount ?? null,
    })),
  ...legacyMetrics.map((r) => ({
    t: r.date,
    ext: false,
    family: r.family ?? null,
    genus: r.genus ?? null,
    species: r.species ?? null,
    names: r.names ?? null,
  })),
];
