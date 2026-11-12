import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('blog hub links directly to the calculator before the article grid', () => {
  const route = readFileSync(new URL('../src/pages/blog/index.astro', import.meta.url), 'utf8');
  const intro = route.split('{allPosts.length > 0 ?')[0];
  assert.match(intro, /<a\b[^>]*href="\/calculator\/"[^>]*>\s*Run the free AI for Biz calculator\s*<\/a>/);
});
