# AI for Business Calculator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A free web calculator that walks a service business through a short assessment and estimates the hours and labor cost it could save by automating one workflow.

Live at [ai4bizcalculator.online](https://ai4bizcalculator.online). Built by [Epiphany Dynamics](https://epiphanydynamics.ai).

## Why this exists

Most automation pitches ask an owner to accept the savings on faith. This calculator replaces the pitch with the owner's own numbers: their industry, their volume, their hourly staff cost, and the workflow they want to stop doing by hand.

## Quickstart

Requires Node 22 or newer.

```bash
npm install
npm run dev
```

Open <http://localhost:4321/calculator> and answer the questions. The report is computed in the browser and appears as soon as the last question is answered, so you reach a real result in a couple of minutes.

Other commands:

| Command | Action |
| --- | --- |
| `npm run build` | Production build. Runs `scripts/gen-llms-txt.mjs` first. |
| `npm run preview` | Serve the built site locally. |
| `npm run gen:llms` | Regenerate `public/llms.txt` on its own. |

No environment variables are needed for local development. The email function in `api/capture.ts` reads `RESEND_API_KEY` from the hosting environment.

## How it works

The calculator runs entirely in the browser. There is no scoring service; the report is computed from static data files, then rendered by React components inside an Astro page.

- `src/lib/questions.ts` defines 16 base questions plus conditional questions that only appear for certain industries, such as appointment-based practices or field service businesses.
- `src/lib/industryEconomics.ts` holds a baseline financial model per industry: average transaction value, weekly volume, no-show rate, response-time lead decay, and hourly staff cost.
- `src/lib/calculator.ts` turns answers into hours lost per week and the cost of those hours, then estimates a return per automation.
- `src/lib/automations.ts` is a catalog of more than 35 automations, each tagged with the industries, pain points, and complexity it fits, followed by `src/lib/scoring.ts`, which matches the catalog to the answers and orders the top picks into roadmap phases.
- `src/components/Calculator.tsx` drives the phase flow: questions, a short calculating screen, then `BusinessReport`. The optional email step posts to `api/capture.ts`, a Vercel edge function that sends the report through Resend and notifies the owner.

Content and search: 57 posts live in `src/content/blog`, `astro.config.mjs` reads each post's frontmatter date so the sitemap emits a real `lastmod` instead of the build time, and `scripts/gen-llms-txt.mjs` regenerates `public/llms.txt` on every build.

## Tests

One suite exists, in `tests/faq-schema.test.ts`. It covers the FAQ JSON-LD builder and checks that the blog route wires it into the page.

There is no `npm test` script yet, so run Node directly:

```bash
node --test --experimental-strip-types tests/faq-schema.test.ts
```

That reports 4 passing tests on Node 26.

## Roadmap and known limits

- The FAQ suite has to be invoked by hand because `package.json` has no `test` script.
- Industry economics are static research baselines, not benchmarks from live customer data.
- The calculation runs in the browser only, so a partial assessment is never saved. A visitor who leaves midway starts over.
- Email capture depends on `RESEND_API_KEY`. Without it the report still renders, but nothing is sent.

## License

MIT (see LICENSE).
