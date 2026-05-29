// Historical annual-checklist metrics (2005–2019), predating the ChecklistBank
// release series. Static build asset — see _data/legacy_metrics.yml for the
// figures and how they were derived from the original MySQL databases. Used by
// the "Changes over time" chart on /data/metrics and the past-releases table on
// /data/download. Nothing here is fetched at build time.
import { parse } from 'yaml';
import raw from '../../_data/legacy_metrics.yml?raw';

export interface LegacyMetric {
  date: string;
  species: number;
  family: number;
  genus: number;
  names: number;
}

export const legacyMetrics = (parse(raw) as LegacyMetric[]) ?? [];
