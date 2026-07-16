import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

import { buildFAQSchema, extractFAQItems } from "../src/lib/faq-schema.ts";

const markdown = `## Frequently Asked Questions

### What should I automate first?

Start with a frequent, rules-based process.

### Should every process be automated?

No. Keep judgment-heavy decisions under human control.
`;

test("extracts Markdown H3 question and answer pairs into FAQ schema", () => {
  assert.deepEqual(extractFAQItems(markdown), [
    { question: "What should I automate first?", answer: "Start with a frequent, rules-based process." },
    { question: "Should every process be automated?", answer: "No. Keep judgment-heavy decisions under human control." },
  ]);
  assert.equal(buildFAQSchema(markdown)?.["@type"], "FAQPage");
});

test("returns null when the visible FAQ structure is absent", () => {
  assert.equal(buildFAQSchema("## A normal section\n\nNo FAQ here."), null);
});

test("the blog route emits FAQ structured data from the same visible content", () => {
  const source = readFileSync(new URL("../src/pages/blog/[...slug].astro", import.meta.url), "utf8");
  const base = readFileSync(new URL("../src/layouts/Base.astro", import.meta.url), "utf8");
  assert.match(source, /buildFAQSchema\(entry\.body\)/);
  assert.match(source, /schema=\{schemas\}/);
  assert.match(base, /application\/ld\+json/);
});

test("the blog route has an explicit readable prose hierarchy", () => {
  const route = readFileSync(new URL("../src/pages/blog/[...slug].astro", import.meta.url), "utf8");
  const styles = readFileSync(new URL("../src/styles/global.css", import.meta.url), "utf8");
  assert.match(route, /<h1 class="text-3xl md:text-5xl/);
  assert.match(styles, /\.prose p\s*\{/);
  assert.match(styles, /\.prose h2\s*\{/);
  assert.match(styles, /\.prose h3\s*\{/);
  assert.match(styles, /\.prose table\s*\{/);
  assert.match(styles, /\.prose th\s*\{/);
  assert.doesNotMatch(styles, /\*\s*\{\s*margin:\s*0;\s*padding:\s*0;/);
});
