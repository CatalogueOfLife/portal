#!/usr/bin/env node
// Build-time data fetcher — the TS/Node replacement for the two Ruby Jekyll
// plugins (_plugins/get_release_metadata.rb and _plugins/changelog.rb).
//
// It bakes results into src/data/_generated/*.json which the Astro site imports,
// so both the static build and the SSR server use a deterministic snapshot with
// no runtime API dependency. Runs via the `prebuild`/`predev` npm hooks.
//
// Config via env (prod defaults): CLB_API, COL_KEY, COL_PRIVATE, CLB_USER, CLB_PASS.

import { mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const API = process.env.CLB_API || 'https://api.checklistbank.org';
const PROJECT_KEY = Number(process.env.COL_KEY || 3);
const ORIGIN = process.env.COL_ORIGIN || 'XRELEASE';
const PRIVATE = process.env.COL_PRIVATE || 'false';
const USER = process.env.CLB_USER;
const PASS = process.env.CLB_PASS;

// Mirror _config.yml changelog.exclude and the historical-floor cutoff.
const EXCLUDE = new Set([312092, 303391, 291968]);
const FIRST_RELEASE = 2242; // first 20.12 release

const ROOT = process.cwd();
const RELEASES_DIR = join(ROOT, '_data', 'releases');
const OUT_DIR = join(ROOT, 'src', 'data', '_generated');

const authHeaders = USER ? { Authorization: 'Basic ' + Buffer.from(`${USER}:${PASS}`).toString('base64') } : {};

async function getJson(path) {
  const url = path.startsWith('http') ? path : `${API}${path}`;
  const res = await fetch(url, { headers: authHeaders });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.json();
}

// ---- agent label builder (port of addAgentLabel) --------------------------
function agentLabel(a) {
  let s = '';
  if (a.family) {
    s += a.family;
    if (a.given) s += `, ${a.given}`;
    if (a.orcid) {
      s += ` <a href="https://orcid.org/${a.orcid}"><img alt="ORCID logo" src="/images/logos/orcid_16x16.png" width="16" height="16" /></a>`;
    }
  }
  if (a.organisation || a.address) {
    if (!a.orcid && a.family && a.given && !a.given.endsWith('.')) s += '.';
    s += ' <i>';
  }
  if (a.organisation) {
    if (a.department) s += `${a.department}, `;
    s += a.organisation;
  }
  if (a.address) s += `, ${a.address}`;
  if (a.organisation || a.address) s += '</i>';
  if (a.note) s += ` - <i>${a.note}</i>`;
  return s;
}

function addAgentLabels(d) {
  if (!d) return d;
  for (const a of d.creator || []) a.label = agentLabel(a);
  for (const a of d.contributor || []) a.label = agentLabel(a);
  if (d.publisher) d.publisher.label = agentLabel(d.publisher);
  if (d.contact) d.contact.label = agentLabel(d.contact);
  return d;
}

// ---- release metadata (port of get_release_metadata.rb) -------------------
// fetch the full (heavy) records in memory, then PROJECT to only the fields the
// site renders — the raw API payloads are 100s of MB and must not be bundled.
async function fetchReleaseFull(origin) {
  const priv = PRIVATE === 'any' ? '' : `&private=${PRIVATE}`;
  const rels = await getJson(
    `/dataset?releasedFrom=${PROJECT_KEY}&sortBy=created&origin=${origin}&limit=2${priv}`,
  );
  const releaseKey = rels.result[0].key;
  const md = { key: PROJECT_KEY, api: API, origin, releaseKey };
  md.current = addAgentLabels(await getJson(`/dataset/${releaseKey}`));
  md.metrics = (await getJson(`/dataset/${releaseKey}/import`))[0];
  md['publisher-sources'] = await getJson(`/dataset/${releaseKey}/source?inclPublisherSources=true`);
  md.sources = (await getJson(`/dataset/${releaseKey}/source`)).map(addAgentLabels);
  md.previous = rels.result[1] || null;
  return md;
}

const slimSource = (s) => ({ key: s.key, alias: s.alias, title: s.title, version: s.version, citation: s.citation });
const slimMetrics = (m) =>
  m ? { nameCount: m.nameCount, usagesCount: m.usagesCount, taxaByRankCount: slimRanks(m.taxaByRankCount) } : {};
const slimRanks = (r) => (r ? { species: r.species, genus: r.genus, family: r.family } : {});
const labelsOnly = (list) => (list || []).map((a) => ({ label: a.label }));

function projectMetadata(md) {
  const c = md.current || {};
  return {
    key: md.key,
    api: md.api,
    origin: md.origin,
    releaseKey: md.releaseKey,
    current: {
      key: c.key,
      version: c.version,
      issued: c.issued,
      doi: c.doi,
      title: c.title,
      citation: c.citation,
      description: c.description,
      license: c.license ?? null,
      creator: labelsOnly(c.creator),
      contributor: labelsOnly(c.contributor),
      publisher: c.publisher ? { label: c.publisher.label } : null,
    },
    metrics: slimMetrics(md.metrics),
    sources: (md.sources || []).map(slimSource),
    publisherSourceCount: (md['publisher-sources'] || []).length,
    previous: md.previous ? { key: md.previous.key, version: md.previous.version } : null,
  };
}

async function fetchReleaseMetadata() {
  const out = projectMetadata(await fetchReleaseFull(ORIGIN));
  // Base release (origin RELEASE) — download page shows it alongside the XRelease.
  const base = await fetchReleaseFull('RELEASE');
  out.base = {
    current: { key: base.current.key, version: base.current.version },
    metrics: slimMetrics(base.metrics),
    sourceCount: (base.sources || []).length,
  };
  return out;
}

// ---- changelog (port of changelog.rb) -------------------------------------
function intcomma(value, delimiter = '.') {
  let copy = String(value).trim();
  for (;;) {
    const next = copy.replace(/^(-?\d+)(\d{3})/, `$1${delimiter}$2`);
    if (next === copy) return copy;
    copy = next;
  }
}
function diffString(x1, x2) {
  if (x2 == null) return '';
  return x1 < x2 ? `(+${intcomma(x2 - x1)})` : `(${intcomma(x2 - x1)})`;
}
const byAlias = (a, b) => (a.alias || '').localeCompare(b.alias || '');
const byTitle = (a, b) => (a.title || '').localeCompare(b.title || '');

function interpret(key, r) {
  r.key = key;
  r.attempt = r.dataset.attempt;
  r.extended = r.dataset.origin === 'xrelease';
  r.annual = (r.dataset.version || '').startsWith('Annual');
  r.srcCnt = r.sources ? r.sources.length : 'unknown';
  return r;
}

function prepareChange(rel, prev) {
  const chg = { rel };
  if (!prev) {
    chg.prev = null;
    chg.removed = [];
    chg.added = rel.sources ? [...rel.sources].sort(byAlias) : [];
    chg.hasChange = true;
    chg.premoved = [];
    chg.padded = rel.publisher ? [...rel.publisher].sort(byAlias) : [];
    chg.hasPubChange = true;
    return chg;
  }
  chg.prev = prev;
  try {
    const pm = prev.metrics?.taxaByRankCount;
    const rm = rel.metrics?.taxaByRankCount;
    if (pm && rm) {
      chg.diffFamily = diffString(pm.family, rm.family);
      chg.diffGenus = diffString(pm.genus, rm.genus);
      chg.diffSpecies = diffString(pm.species, rm.species);
    }
  } catch {
    /* tolerate missing metrics */
  }
  const src = {};
  for (const s of prev.sources) src[s.key] = s;
  for (const s of rel.sources) src[s.key] = s;
  const srcKeys = rel.sources.map((s) => s.key);
  const srcKeysPrev = prev.sources.map((s) => s.key);
  const removed = srcKeysPrev.filter((k) => !srcKeys.includes(k));
  const added = srcKeys.filter((k) => !srcKeysPrev.includes(k));
  chg.removed = removed.map((k) => src[k]).sort(byAlias);
  chg.added = added.map((k) => src[k]).sort(byAlias);
  chg.hasChange = removed.length + added.length > 0;

  const pubs = {};
  let pKeys = [];
  let pKeysPrev = [];
  if (prev.publisher) {
    for (const s of prev.publisher) pubs[s.id] = s;
    pKeysPrev = prev.publisher.map((s) => s.id);
  }
  if (rel.publisher) {
    for (const s of rel.publisher) pubs[s.id] = s;
    pKeys = rel.publisher.map((s) => s.id);
  }
  const premoved = pKeysPrev.filter((k) => !pKeys.includes(k));
  const padded = pKeys.filter((k) => !pKeysPrev.includes(k));
  chg.premoved = premoved.map((k) => pubs[k]).sort(byTitle);
  chg.padded = padded.map((k) => pubs[k]).sort(byTitle);
  chg.hasPubChange = premoved.length > 0 || padded.length > 0;
  return chg;
}

async function buildChangelog() {
  mkdirSync(RELEASES_DIR, { recursive: true });
  const rels = {};
  const keys = [];
  // read cached per-release files first
  for (const fn of readdirSync(RELEASES_DIR)) {
    if (!fn.endsWith('.json')) continue;
    const key = parseInt(fn, 10);
    if (EXCLUDE.has(key)) continue;
    keys.push(key);
    rels[key] = JSON.parse(readFileSync(join(RELEASES_DIR, fn), 'utf-8'));
  }
  // fetch any new releases since the cache
  const relKeys = await getJson(`/dataset/keys?releasedFrom=${PROJECT_KEY}&private=false&inclDeleted=true`);
  for (const key of relKeys) {
    if (keys.includes(key) || EXCLUDE.has(key) || key < FIRST_RELEASE) continue;
    keys.push(key);
    console.log(`  fetching new release ${key}`);
    const rel = {};
    const d = await getJson(`/dataset/${key}`);
    delete d.source;
    rel.dataset = d;
    rel.metrics = await getJson(`/dataset/${PROJECT_KEY}/import/${d.attempt}`);
    rel.sources = await getJson(`/dataset/${key}/source`);
    const pub = (await getJson(`/dataset/${key}/sector/publisher`)).result;
    if (pub) {
      for (const p of pub) {
        const m = await getJson(`/dataset/${key}/sector/publisher/${p.id}/metrics`);
        p.datasets = m.datasetCount;
        p.metrics = m;
      }
      rel.publisher = pub.filter((p) => p.datasets !== 0);
    }
    rels[key] = rel;
    writeFileSync(join(RELEASES_DIR, `${key}.json`), JSON.stringify(rel));
  }
  // diff in chronological order, tracking the four lineages
  const log = [];
  let prev = null,
    prevAnnual = null,
    prevX = null,
    prevXAnnual = null;
  for (const key of [...keys].sort((a, b) => a - b)) {
    const r = interpret(key, rels[key]);
    if (r.extended) {
      log.push(prepareChange(r, r.annual ? prevXAnnual : prevX));
      if (r.annual) prevXAnnual = r;
      prevX = r;
    } else {
      log.push(prepareChange(r, r.annual ? prevAnnual : prev));
      if (r.annual) prevAnnual = r;
      prev = r;
    }
  }
  return log.reverse().map(projectChange);
}

// Project a change entry to only the fields the changelog template renders.
const slimChangeSource = (s) => ({ key: s.key, alias: s.alias, title: s.title });
const slimPublisher = (p) => ({ id: p.id, title: p.title });
function projectChange(chg) {
  const r = chg.rel;
  return {
    rel: {
      key: r.key,
      srcCnt: r.srcCnt,
      extended: r.extended,
      dataset: { alias: r.dataset.alias, created: r.dataset.created, version: r.dataset.version },
      publisher: (r.publisher || []).map(slimPublisher),
      metrics: { taxaByRankCount: slimRanks(r.metrics?.taxaByRankCount) },
    },
    prev: chg.prev
      ? { key: chg.prev.key, dataset: { alias: chg.prev.dataset.alias, version: chg.prev.dataset.version } }
      : null,
    diffFamily: chg.diffFamily ?? '',
    diffGenus: chg.diffGenus ?? '',
    diffSpecies: chg.diffSpecies ?? '',
    hasChange: chg.hasChange,
    hasPubChange: chg.hasPubChange,
    added: (chg.added || []).map(slimChangeSource),
    removed: (chg.removed || []).map(slimChangeSource),
    padded: (chg.padded || []).map(slimPublisher),
    premoved: (chg.premoved || []).map(slimPublisher),
  };
}

// ---- main -----------------------------------------------------------------
function writeOut(name, data) {
  mkdirSync(OUT_DIR, { recursive: true });
  writeFileSync(join(OUT_DIR, name), JSON.stringify(data));
  console.log(`  wrote src/data/_generated/${name}`);
}
function keepOrFallback(name, fallback, err) {
  const p = join(OUT_DIR, name);
  if (existsSync(p)) {
    console.warn(`  ⚠ ${name}: fetch failed (${err.message}); keeping existing snapshot`);
  } else {
    console.warn(`  ⚠ ${name}: fetch failed (${err.message}); writing placeholder`);
    writeOut(name, fallback);
  }
}

console.log(`Fetching build data from ${API} (project ${PROJECT_KEY}, origin ${ORIGIN})`);
try {
  writeOut('release.json', await fetchReleaseMetadata());
} catch (err) {
  keepOrFallback('release.json', { key: PROJECT_KEY, api: API, origin: ORIGIN, current: {}, metrics: {}, sources: [], publisherSourceCount: 0, base: null, previous: null }, err);
}
try {
  writeOut('changelog.json', await buildChangelog());
} catch (err) {
  keepOrFallback('changelog.json', [], err);
}
console.log('Done.');
