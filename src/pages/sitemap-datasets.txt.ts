import { metadata } from '@data/releaseMetadata';
import { site } from '@lib/site';

export const prerender = true;

// Dataset sitemap (was sitemap-datasets.txt): the data landing pages plus one
// URL per source dataset in the current release.
export function GET() {
  const paths = [
    '/data/metadata',
    '/data/sources',
    '/data/download',
    '/data/changelog',
    ...metadata.sources.map((s) => `/data/dataset/${s.key}`),
  ];
  const body = paths.map((p) => `${site.url}${p}`).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
