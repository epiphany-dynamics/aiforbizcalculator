# AI for Biz Calculator session history

## 2026-09-25 — Gravity editorial articles

This session added optional structured editorial metadata to the blog collection and a branded article layout for future Gravity posts. Existing posts keep their layout. A local build rendered all 58 existing posts. A temporary synthetic research article verified three takeaways, duplicate heading anchors, visible source attribution, methods, a callout and a table; it was then removed. The work is in `agent/2026-09-25-gravity-editorial` and requires an independent exact-SHA review before merge. Patrick directed that this request stay in-session, with no Linear issue.

## 2026-09-25 — Wide editorial article layout

The blog page now uses a 1160px editorial canvas for the title, hero image, tables, and visual sections. Running text remains limited to 72ch. The compact guide pairs takeaways with contents; older posts get contents navigation too. Figures at a glance follow the article body. Changes are on `codex/2026-09-25-wide-editorial-calc`; generated drafts, deployment, and publication were untouched. `npm run build` passed. Impeccable's static detector reported only warnings in incumbent CSS; no tests were run.

Independent review found that ordinary Markdown images render inside paragraphs. The wide-media style now includes paragraph-wrapped images at desktop and mobile sizes, with proportional inner image sizing. This amendment needs review at its new exact SHA.

### Archived Codex Resume

2026-09-25: Optional Gravity editorial format is implemented in `agent/2026-09-25-gravity-editorial` from `origin/main` at b10fcd1. The schema, article page and article styles support takeaways, heading navigation and cited data. Existing 58 posts and a temporary synthetic article built successfully; the fixture was removed. Current user directed this work to stay in-session and out of Linear. Await independent exact-SHA review before merge.

### Archived Codex Resume from September 25 wide layout

2026-09-25: The article template and CSS are widened in `codex/2026-09-25-wide-editorial-calc` from `origin/main` at 3554081. The 1160px canvas applies to all posts while paragraphs retain a 72ch measure; the Astro build passed. Source changes are not deployed or published. Existing Gravity draft files in the runtime checkout were untouched. Independent exact-SHA review is next. Patrick directed this work to stay in-session and out of Linear.

## 2026-09-29 — Gravity article presentation

Blog posts dated August 1, 2026 or later now use wide prose within a 1536px article canvas and a sticky right reading guide drawn from rendered H2 anchors. The guide is inside the article-body grid, so it ends before figures, methodology, network links, and footer. Earlier posts retain their prior presentation; existing takeaways, schema, metadata, and calculator navigation remain. `npm run build` passed with 71 pages. Local browser inspection at 1280px and 390px confirmed the guide's position and no horizontal overflow. No drafts were published. The branch awaits independent exact-SHA review and release.
