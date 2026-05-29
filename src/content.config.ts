import { defineCollection } from 'astro:content';
import { z } from 'astro:schema';
import { glob } from 'astro/loaders';

// Editorial articles (was articles/** with `layout: content` or `default`).
// Frontmatter mirrors the existing Jekyll keys; unknown keys (e.g. `layout`)
// are ignored by Zod, so clean articles migrate by copy.
const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
  // Optional string fields use .nullish() so an empty YAML value (e.g.
  // `tagline:`) parses as null without failing validation.
  schema: z.object({
    title: z.string(),
    tagline: z.string().nullish(),
    section_id: z.string().nullish(),
    imageUrl: z.string().nullish(),
    imageCaption: z.string().nullish(),
    toc: z.boolean().default(false),
    noindex: z.boolean().default(false),
    permalink: z.string().nullish(),
    published: z.boolean().default(true),
  }),
});

// News posts (was _posts/**). Date comes from the YYYY-MM-DD filename prefix
// (parsed in src/lib/posts.ts), matching Jekyll's convention.
const news = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    author: z.string().nullish(),
    excerpt: z.string().nullish(),
    date: z.coerce.date().nullish(),
    categories: z.union([z.string(), z.array(z.string())]).nullish(),
    images: z.union([z.string(), z.array(z.string())]).nullish(),
    published: z.boolean().default(true),
  }),
});

export const collections = { articles, news };
