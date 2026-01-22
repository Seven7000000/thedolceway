// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thedolceway.com',
  integrations: [sitemap({
    changefreq: 'daily',
    priority: 0.7,
    lastmod: new Date(),
  })],
  vite: {
    plugins: [tailwindcss()]
  }
});
