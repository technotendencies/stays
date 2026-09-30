import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { stays } from './src/data/stays.ts';

// Demo listings are noindex, so keep them out of the sitemap too.
const unverified = new Set(stays.filter((s) => !s.verified).map((s) => `/stays/${s.slug}/`));

export default defineConfig({
  site: 'https://hiriketiyastays.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) => !unverified.has(new URL(page).pathname),
    }),
  ],
});
