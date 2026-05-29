import { metadata } from '@data/releaseMetadata';

// Homepage kingdom tiles (was _config.yml milestones). Counts are fetched at
// build time (replacing the old client-side TerrificJS count module).
const speciesQuery = 'limit=0&rank=species&status=accepted&status=provisionally%20accepted';

export interface Milestone {
  image: string;
  title: string;
  bgcolor: string;
  fgcolor: string;
  link: string;
  query: string;
}

export const milestones: Milestone[] = [
  { image: 'Podarcis.jpg', title: 'Animalia', bgcolor: '0480b5', fgcolor: 'ccedfa', link: '/data/browse', query: `TAXON_ID=N&${speciesQuery}` },
  { image: 'Pultenaea.jpg', title: 'Plantae', bgcolor: 'd0bd34', fgcolor: 'fcfbe7', link: '/data/browse', query: `TAXON_ID=P&${speciesQuery}` },
  { image: 'Teloschistes.jpg', title: 'Fungi', bgcolor: 'e83143', fgcolor: 'feebed', link: '/data/browse', query: `TAXON_ID=F&${speciesQuery}` },
  { image: 'Protozoa.jpg', title: 'Other kingdoms', bgcolor: '2db261', fgcolor: 'ecf7ef', link: '/data/browse', query: `TAXON_ID=V&TAXON_ID=R&TAXON_ID=B&TAXON_ID=C&TAXON_ID=Z&${speciesQuery}` },
];

// Basic auth for private candidate releases (preview/dev); empty on prod.
const rawAuth = import.meta.env.PUBLIC_COL_AUTH || '';
const authHeaders: Record<string, string> = rawAuth
  ? { Authorization: 'Basic ' + Buffer.from(rawAuth).toString('base64') }
  : {};

export async function milestoneCount(m: Milestone): Promise<number | null> {
  try {
    const res = await fetch(`${metadata.api}/dataset/${metadata.releaseKey}/nameusage/search?${m.query}`, {
      headers: authHeaders,
    });
    if (!res.ok) return null;
    const d = (await res.json()) as { total?: number };
    return d.total ?? null;
  } catch {
    return null;
  }
}
