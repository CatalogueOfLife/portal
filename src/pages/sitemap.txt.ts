import { getCollection } from 'astro:content';
import { site } from '@lib/site';

export const prerender = true;

// Editorial sitemap (was the hand-maintained sitemap.txt): every published
// article plus the top-level landing pages and news.
export async function GET() {
  const articles = await getCollection('articles', (e) => e.data.published !== false);
  const paths = [
    '/',
    '/news',
    '/about',
    '/howto',
    '/tools',
    '/procedures',
    '/data',
    ...articles.map((a) => a.data.permalink ?? `/${a.id}`),
  ];
  const body = [...new Set(paths)].map((p) => `${site.url}${p}`).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain' } });
}
