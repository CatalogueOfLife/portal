// Build-time changelog, baked by scripts/fetch-data.mjs into
// _generated/changelog.json (the TS replacement for _plugins/changelog.rb).
import entries from './_generated/changelog.json';

export interface ChangeSource {
  key: number;
  alias?: string;
  title?: string;
}
export interface Publisher {
  id: number;
  title?: string;
}
export interface ChangeEntry {
  rel: {
    key: number;
    srcCnt: number | string;
    extended: boolean;
    dataset: { alias?: string; created?: string; version?: string };
    publisher: Publisher[];
    metrics: { taxaByRankCount: { species?: number; genus?: number; family?: number } };
  };
  prev: { key: number; dataset: { alias?: string; version?: string } } | null;
  diffFamily: string;
  diffGenus: string;
  diffSpecies: string;
  hasChange: boolean;
  hasPubChange: boolean;
  added: ChangeSource[];
  removed: ChangeSource[];
  padded: Publisher[];
  premoved: Publisher[];
}

export const changelogEntries = entries as unknown as ChangeEntry[];
