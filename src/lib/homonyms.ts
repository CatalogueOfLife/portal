// Pure helpers for the /data/homonyms report (no DOM): URL state, API URLs and
// the small bits of display logic. The page itself is static; its client
// script (src/components/Homonyms.astro) renders from location.search.
//
// Data: ChecklistBank's duplicates API, GET /dataset/{key}/duplicate, which
// groups usages by lower(scientific_name) — i.e. identical names regardless of
// authorship, code and status — and filters by rank and a literal name prefix q.

/** Selectable ranks, highest first. */
export const RANKS = [
  'order',
  'superfamily',
  'family',
  'subfamily',
  'tribe',
  'genus',
  'subgenus',
  'species',
  'subspecies',
] as const;
export type HomonymRank = (typeof RANKS)[number];

export const DEFAULT_RANK: HomonymRank = 'genus';
export const PAGE_SIZE = 100;
/** The API answers 400 beyond this offset (no deep paging). */
export const MAX_OFFSET = 100000;
export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Ranks with many homonym groups: an unfiltered query scans the whole release
// (~10s uncached), so they default to the letter A instead of "all".
const LETTER_DEFAULT = new Set<HomonymRank>(['genus', 'subgenus', 'species', 'subspecies']);
// Ranks whose names are italicised (genus and below).
const ITALIC = new Set<HomonymRank>(['genus', 'subgenus', 'species', 'subspecies']);
// Classification ranks shown as the path, top-down, and every rank's position
// so the path stops above the selected rank.
const PATH_RANKS = ['kingdom', 'phylum', 'class', 'order', 'family'];
const RANK_ORDER = ['kingdom', 'phylum', 'class', 'order', ...RANKS.slice(1)];

export interface HomonymParams {
  rank: HomonymRank;
  /** Normalised name prefix; '' means all names. */
  q: string;
  /** True when q came from the URL rather than the rank default. */
  explicitQ: boolean;
  offset: number;
  /** ?v=br — the Base release instead of the Extended one. */
  base: boolean;
}

/** Make free text a safe, name-shaped prefix: letters, marks, space, '-', '.'
 *  and the hybrid sign, first letter upper-cased (names are matched
 *  case-sensitively). */
export function normalizePrefix(raw: string): string {
  const s = raw
    .normalize('NFC')
    .replace(/[^\p{L}\p{M} .×-]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, 50);
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : '';
}

export function parseParams(search: string): HomonymParams {
  const sp = new URLSearchParams(search);
  const r = (sp.get('rank') ?? '').toLowerCase();
  const rank = (RANKS as readonly string[]).includes(r) ? (r as HomonymRank) : DEFAULT_RANK;
  // An empty q= asks for all names; text with nothing usable in it must not, so
  // it falls back to the rank default.
  const raw = sp.get('q');
  const typed = raw ? normalizePrefix(raw) : '';
  const explicitQ = raw === '' || typed !== '';
  const q = explicitQ ? typed : LETTER_DEFAULT.has(rank) ? 'A' : '';
  const off = Math.floor(Number(sp.get('offset')));
  return {
    rank,
    q,
    explicitQ,
    offset: Number.isFinite(off) && off > 0 ? Math.min(off, MAX_OFFSET) : 0,
    base: sp.get('v') === 'br',
  };
}

/** A link to the report. q undefined/null leaves it to the rank default;
 *  '' explicitly asks for all names. */
export function reportHref(p: { rank: HomonymRank; q?: string | null; offset?: number; base: boolean }): string {
  const sp = new URLSearchParams();
  sp.set('rank', p.rank);
  if (p.q != null) sp.set('q', p.q);
  if (p.offset) sp.set('offset', String(p.offset));
  if (p.base) sp.set('v', 'br');
  return `/data/homonyms?${sp}`;
}

function apiQuery(rank: HomonymRank, q: string): URLSearchParams {
  const sp = new URLSearchParams();
  sp.set('rank', rank.toUpperCase());
  if (q) sp.set('q', q);
  return sp;
}

export function duplicatesUrl(api: string, datasetKey: number, rank: HomonymRank, q: string, offset: number): string {
  const sp = apiQuery(rank, q);
  sp.set('limit', String(PAGE_SIZE));
  if (offset) sp.set('offset', String(offset));
  return `${api}/dataset/${datasetKey}/duplicate?${sp}`;
}

export function countUrl(api: string, datasetKey: number, rank: HomonymRank, q: string): string {
  return `${api}/dataset/${datasetKey}/duplicate/count?${apiQuery(rank, q)}`;
}

export const isItalicRank = (rank: HomonymRank) => ITALIC.has(rank);

/** The leading mark of a name line: 'syn.' for any synonym status, '?' for
 *  provisionally accepted, nothing for accepted (or bare) names. */
export function statusMark(status: string | undefined): string {
  if (status === 'provisionally accepted') return '?';
  if (status === 'synonym' || status === 'ambiguous synonym' || status === 'misapplied') return 'syn.';
  return '';
}

/** Sort key so a group lists accepted, then provisional, then synonyms. */
export function statusOrder(status: string | undefined): number {
  const m = statusMark(status);
  return m === '' ? 0 : m === '?' ? 1 : 2;
}

export interface SimpleName {
  id?: string;
  name: string;
  rank?: string;
}

/** Kingdom › … › Family names above the selected rank, top-down. The API's
 *  classification runs from the parent upwards. */
export function classificationPath(classification: SimpleName[] | undefined, rank: HomonymRank): string[] {
  if (!classification?.length) return [];
  const limit = RANK_ORDER.indexOf(rank);
  const byRank = new Map<string, string>();
  for (const sn of classification) {
    if (sn.rank && !byRank.has(sn.rank)) byRank.set(sn.rank, sn.name);
  }
  return PATH_RANKS.filter((r) => RANK_ORDER.indexOf(r) < limit && byRank.has(r)).map((r) => byRank.get(r) as string);
}
