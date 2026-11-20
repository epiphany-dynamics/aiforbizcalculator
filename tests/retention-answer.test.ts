import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { buildFAQSchema } from '../src/lib/faq-schema.ts';
const article = readFileSync(new URL('../src/content/blog/customer-retention-cost-formula.md', import.meta.url), 'utf8');
test('retention article answers the observed cost-per-retained-customer query in visible FAQ and schema', () => {
 const question = 'How should cost per retained customer be calculated?';
 assert.ok(article.includes('### ' + question));
 const schema = buildFAQSchema(article) as { mainEntity: { name: string; acceptedAnswer: { text: string } }[] } | null;
 assert.ok(schema);
 const entry = schema.mainEntity.find(item => item.name === question);
 assert.ok(entry);
 assert.match(entry.acceptedAnswer.text, /same period/);
 assert.match(entry.acceptedAnswer.text, /zero or negative/);
 assert.match(entry.acceptedAnswer.text, /not proof/);
 assert.match(article, /description: "Calculate cost per retained customer/);
});
