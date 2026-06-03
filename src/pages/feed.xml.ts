import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '@lib/posts';
import { site } from '@lib/site';

export async function GET(context: APIContext) {
  const posts = await getPosts();
  return rss({
    title: 'Catalogue of Life',
    description: site.description,
    site: context.site?.toString() ?? site.url,
    items: posts.map((p) => ({
      title: p.title,
      pubDate: p.date,
      description: p.excerpt ?? '',
      link: p.url,
    })),
  });
}
