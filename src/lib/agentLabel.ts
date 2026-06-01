// Build the HTML label for an agent (creator / contributor / publisher),
// mirroring scripts/fetch-data.mjs's agentLabel so SSR-fetched records (annual
// editions) render authors the same way as the baked Extended/Base metadata.
interface Agent {
  family?: string;
  given?: string;
  orcid?: string;
  organisation?: string;
  department?: string;
  address?: string;
  note?: string;
  label?: string;
}

export function agentLabel(a: Agent): string {
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

/** Normalize a raw /dataset/{key} record into the shape MetadataView expects. */
export function normalizeRelease(d: any) {
  return {
    key: d.key,
    version: d.version,
    issued: d.issued,
    doi: d.doi,
    title: d.title,
    citation: d.citation,
    description: d.description,
    creator: (d.creator || []).map((a: Agent) => ({ label: agentLabel(a) })),
    publisher: d.publisher ? { label: agentLabel(d.publisher) } : null,
  };
}
