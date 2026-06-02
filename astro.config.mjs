// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node';

// Static-first: every page prerenders by default. Only the two per-record data
// routes (data/taxon/[id], data/dataset/[key]) opt out with
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
  vite: {
    define: {
      // SITE_ENV is set per environment at build time (deploy.sh: -e SITE_ENV),
      // but the SSR service.env does not carry it — so bake it as a build-time
      // constant available identically to static and SSR rendering. '' locally.
      __SITE_ENV__: JSON.stringify(process.env.SITE_ENV ?? ''),
    },
  },
});
