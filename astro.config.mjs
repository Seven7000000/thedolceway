// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://seven7000000.github.io',
  base: '/thedolceway',
  vite: {
    plugins: [tailwindcss()]
  }
});