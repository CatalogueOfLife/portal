// Build-time release metadata, baked by scripts/fetch-data.mjs into
// _generated/release.json (the TS replacement for _plugins/get_release_metadata.rb).
import data from './_generated/release.json';

export interface Agent {
  label: string;
}
export interface Metrics {
  nameCount?: number;
  usagesCount?: number;
  taxaByRankCount?: { species?: number; genus?: number; family?: number };
}
export interface CurrentRelease {
  key: number;
  alias?: string;
  version: string;
  issued: string;
  doi: string;
  title?: string;
  citation?: string;
  description?: string;
  license?: unknown;
  creator: Agent[];
  contributor: Agent[];
  publisher?: { label: string } | null;
}
export interface SourceRef {
  key: number;
  alias?: string;
  title?: string;
  version?: string;
}
export interface ReleaseMetadata {
  key: number;
  api: string;
  origin: string;
  releaseKey: number;
  current: CurrentRelease;
  metrics: Metrics;
  sources: SourceRef[];
  publisherSourceCount: number;
  /** Total ChecklistBank checklists (origin=external) — see releases page (#273). */
  checklistCount: number | null;
  previous: { key: number; version: string } | null;
  base: { current: CurrentRelease; metrics: Metrics; sourceCount: number } | null;
}

export const metadata = data as unknown as ReleaseMetadata;
export const currentRelease = metadata.current;
/** The current release dataset key (was site.react.datasetKey). */
export const datasetKey = metadata.releaseKey;
