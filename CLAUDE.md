# AI for Biz Calculator session history

## 2026-09-25 — Gravity editorial articles

This session added optional structured editorial metadata to the blog collection and a branded article layout for future Gravity posts. Existing posts keep their layout. A local build rendered all 58 existing posts. A temporary synthetic research article verified three takeaways, duplicate heading anchors, visible source attribution, methods, a callout and a table; it was then removed. The work is in `agent/2026-09-25-gravity-editorial` and requires an independent exact-SHA review before merge. Patrick directed that this request stay in-session, with no Linear issue.

## 2026-09-25 — Wide editorial article layout

The blog page now uses a 1160px editorial canvas for the title, hero image, tables, and visual sections. Running text remains limited to 72ch. The compact guide pairs takeaways with contents; older posts get contents navigation too. Figures at a glance follow the article body. Changes are on `codex/2026-09-25-wide-editorial-calc`; generated drafts, deployment, and publication were untouched. `npm run build` passed. Impeccable's static detector reported only warnings in incumbent CSS; no tests were run.

Independent review found that ordinary Markdown images render inside paragraphs. The wide-media style now includes paragraph-wrapped images at desktop and mobile sizes, with proportional inner image sizing. This amendment needs review at its new exact SHA.

### Archived Codex Resume

2026-09-25: Optional Gravity editorial format is implemented in `agent/2026-09-25-gravity-editorial` from `origin/main` at b10fcd1. The schema, article page and article styles support takeaways, heading navigation and cited data. Existing 58 posts and a temporary synthetic article built successfully; the fixture was removed. Current user directed this work to stay in-session and out of Linear. Await independent exact-SHA review before merge.
