import { getCollection, type CollectionEntry } from 'astro:content';

export interface Post {
  entry: CollectionEntry<'news'>;
  id: string;
  year: string;
  month: string;
  day: string;
  slug: string;
  date: Date;
  url: string;
  title: string;
  author?: string | null;
  excerpt?: string | null;
  categories: string[];
  images: string[];
}

function parseId(id: string) {
  const m = id.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (!m) return null;
  return { year: m[1], month: m[2], day: m[3], slug: m[4] };
}

// Jekyll treats a space-separated `categories:` string as multiple categories.
export function normalizeCategories(c: unknown): string[] {
  if (!c) return [];
  if (Array.isArray(c)) return c as string[];
  return String(c).split(/\s+/).filter(Boolean);
}

export const categorySlug = (c: string) => c.toLowerCase().replace(/\s+/g, '-');

const normalizeImages = (i: unknown): string[] => (!i ? [] : Array.isArray(i) ? (i as string[]) : [String(i)]);

export async function getPosts(): Promise<Post[]> {
  const entries = await getCollection('news', (e) => e.data.published !== false);
  const posts = entries.map((entry) => {
    const p = parseId(entry.id);
    const date = entry.data.date ?? (p ? new Date(`${p.year}-${p.month}-${p.day}T12:00:00Z`) : new Date());
    const { year, month, day, slug } = p ?? {
      year: String(date.getUTCFullYear()),
      month: String(date.getUTCMonth() + 1).padStart(2, '0'),
      day: String(date.getUTCDate()).padStart(2, '0'),
      slug: entry.id,
    };
    return {
      entry,
      id: entry.id,
      year,
      month,
      day,
      slug,
      date,
      url: `/${year}/${month}/${day}/${slug}`,
      title: entry.data.title,
      author: entry.data.author,
      excerpt: entry.data.excerpt,
      categories: normalizeCategories(entry.data.categories),
      images: normalizeImages(entry.data.images),
    } satisfies Post;
  });
  posts.sort((a, b) => b.date.getTime() - a.date.getTime());
  return posts;
}
