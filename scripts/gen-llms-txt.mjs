#!/usr/bin/env node
/**
 * Regenerates public/llms.txt from the live blog collection so it never goes stale.
 * Wired into `prebuild` — runs automatically before every `astro build`.
 */
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const blogDir = join(root, 'src/content/blog');
const outPath = join(root, 'public/llms.txt');
const SITE = 'https://ai4bizcalculator.online';

/**
 * @param {string} raw
 */
function parseFrontmatter(raw) {
  if (!raw.startsWith('---')) return { data: {} };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { data: {} };
  const fm = raw.slice(3, end).trim();
  /** @type {Record<string, string | boolean>} */
  const data = {};
  for (const line of fm.split('\n')) {
    const m = line.match(/^([A-Za-z][A-Za-z0-9_]*)\s*:\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    let val = m[2].trim();
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }
    if (val === 'true') data[key] = true;
    else if (val === 'false') data[key] = false;
    else data[key] = val;
  }
  return { data };
}

const truncate = (s, n) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}...` : s);

const posts = [];
if (existsSync(blogDir)) {
  for (const file of readdirSync(blogDir).filter((f) => f.endsWith('.md'))) {
    const raw = readFileSync(join(blogDir, file), 'utf8');
    const { data } = parseFrontmatter(raw);
    if (data.draft === true || data.published === false) continue;
    const slug = file.replace(/\.md$/, '');
    if (slug === 'test-post' || slug === 'test-article') continue;
    const title = String(data.title || slug).trim();
    const description = String(data.description || data.excerpt || '')
      .replace(/\s+/g, ' ')
      .trim();
    const dateRaw = data.pubDate || data.date || data.updated;
    const date = dateRaw ? new Date(String(dateRaw)) : new Date(0);
    posts.push({
      slug,
      title,
      description,
      date: Number.isNaN(date.getTime()) ? new Date(0) : date,
    });
  }
}
posts.sort((a, b) => b.date - a.date);

const header = `# AI for Biz Calculator

> Free AI automation ROI calculator for small and mid-sized service businesses. Built by Epiphany Dynamics. Answer a short set of questions about your operations and get personalized automation recommendations plus ROI estimates you can actually edit.

## Ownership

- Owned by: Epiphany Dynamics (Wikidata: Q139569923, https://epiphanydynamics.ai)
- Creator: Patrick Gibbs (Wikidata: Q139572015)

## Core Pages

- [Home](${SITE}/): Product overview and entry to the calculator
- [Calculator](${SITE}/calculator/): Interactive AI automation ROI calculator
- [Blog](${SITE}/blog/): ${posts.length} articles on AI ROI, automation payback, and process selection
- [About](${SITE}/about/): Who built the calculator and why
- [Privacy](${SITE}/privacy/): Privacy policy

## How to use the calculator

1. Answer questions about industry, team size, appointment volume, and current tools.
2. Review the estimated hours recovered, cost range, and payback window.
3. Edit the inputs. A trustworthy ROI tool never locks you into a single inflated number.
4. Use the result as a planning range before buying any AI product or agency engagement.
`;

const blogSection =
  posts.length === 0
    ? '\n## Blog\n\n_No published posts yet._\n'
    : `\n## Blog (${posts.length})\n\n${posts
        .map((p) => {
          const desc = p.description ? `: ${truncate(p.description, 160)}` : '';
          return `- [${p.title}](${SITE}/blog/${p.slug}/)${desc}`;
        })
        .join('\n')}\n`;

const footer = `
## Audience

Owners and operators of appointment-based and service businesses who want a concrete ROI range before spending on AI automation, receptionists, chatbots, or workflow tools.

## Contact

- Website: ${SITE}
- Publisher: https://epiphanydynamics.ai
- Owner Wikidata: https://www.wikidata.org/wiki/Q139569923
- Author Wikidata: https://www.wikidata.org/wiki/Q139572015
`;

writeFileSync(outPath, `${header}${blogSection}${footer}`);
console.log(`[gen-llms-txt] Wrote ${outPath} — ${posts.length} published blog posts.`);
