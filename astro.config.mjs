// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// Static-first: every page prerenders by default. The handful of dynamic data
// routes (data/taxon/[id], data/dataset/[key], data/metadata, 404) opt out with
// `export const prerender = false` and run on the Node adapter behind Varnish.
export default defineConfig({
  site: 'https://www.catalogueoflife.org',
  output: 'static',
  adapter: node({ mode: 'standalone' }),
  integrations: [react(), mdx()],
  // Legacy Jekyll URL kept working; broader `.html` and `/index` cleanups are
  // handled at the Apache/Varnish layer (see DEPLOY.md).
  redirects: {
    '/news/index': '/news',
  },
});
