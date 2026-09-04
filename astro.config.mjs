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

function readFrontmatter(filePath) {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const match = raw.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  return match[1];
}

function readFrontmatterDate(filePath) {
  const frontmatter = readFrontmatter(filePath);
  if (!frontmatter) return null;
  const updatedMatch = frontmatter.match(/^updated:\s*["']?([\d-]{10})["']?/m);
  const pubDateMatch = frontmatter.match(/^pubDate:\s*["']?([\d-]{10})["']?/m);
  const dateStr = (updatedMatch ?? pubDateMatch)?.[1];
  return dateStr ? new Date(dateStr) : null;
}

function isNoindexFrontmatter(filePath) {
  const frontmatter = readFrontmatter(filePath);
  if (!frontmatter) return false;
  return /^noindex:\s*true\b/m.test(frontmatter);
}

const blogLastmod = new Map();
const noindexPaths = new Set();
if (fs.existsSync(blogDir)) {
  for (const file of fs.readdirSync(blogDir)) {
    if (!file.endsWith('.md')) continue;
    const slug = file.replace(/\.md$/, '');
    const filePath = path.join(blogDir, file);
    const pathname = `/blog/${slug}/`;
    if (isNoindexFrontmatter(filePath)) {
      noindexPaths.add(pathname);
      continue;
    }
    const date = readFrontmatterDate(filePath);
    if (date) blogLastmod.set(pathname, date);
  }
}

const latestBlogLastmod = [...blogLastmod.values()].reduce(
  (latest, date) => (!latest || date > latest ? date : latest),
  null,
);
for (const pathname of ['/', '/calculator/', '/blog/', '/about/', '/privacy/']) {
  if (latestBlogLastmod) blogLastmod.set(pathname, latestBlogLastmod);
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
      filter(page) {
        const pathname = new URL(page).pathname;
        return !noindexPaths.has(pathname);
      },
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
