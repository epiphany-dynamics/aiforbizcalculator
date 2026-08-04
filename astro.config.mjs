import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Map blog slug -> most recent real content date (updated, falling back to pubDate),
// read straight from frontmatter. No date in frontmatter = no lastmod for that URL.
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogDir = path.join(__dirname, 'src/content/blog');

function readFrontmatterDate(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const frontmatter = match[1];
  const updatedMatch = frontmatter.match(/^updated:\s*["']?([\d-]{10})["']?/m);
  const pubDateMatch = frontmatter.match(/^pubDate:\s*["']?([\d-]{10})["']?/m);
  const dateStr = (updatedMatch ?? pubDateMatch)?.[1];
  return dateStr ? new Date(dateStr) : null;
}

const blogLastmod = new Map();
if (fs.existsSync(blogDir)) {
  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const date = readFrontmatterDate(path.join(blogDir, file));
    if (date) blogLastmod.set(`/blog/${slug}/`, date);
  }
}

export default defineConfig({
  site: 'https://ai4bizcalculator.online',
  redirects: {
    '/sitemap.xml': '/sitemap-index.xml',
  },
  adapter: vercel(),
  integrations: [
    mdx(),
    react(),
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        const lastmod = blogLastmod.get(url.pathname);
        if (lastmod) {
          return { ...item, lastmod: lastmod.toISOString() };
        }
        // No real content date for this URL (static pages, or a blog post
        // missing frontmatter dates): omit lastmod rather than stamp build time.
        const { lastmod: _drop, ...rest } = item;
        return rest;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
