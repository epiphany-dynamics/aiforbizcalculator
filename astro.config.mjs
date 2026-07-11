import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ai4bizcalculator.online',
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
  adapter: vercel(),
  integrations: [
    mdx(),
    react(),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
