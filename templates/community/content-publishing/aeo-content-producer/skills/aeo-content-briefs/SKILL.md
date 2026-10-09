---
name: aeo-content-briefs
description: "Use when turning AEO visibility data into 3–5 refresh briefs and 3–5 net-new briefs, then stopping for human review."
---

# AEO content briefs

Run after AEO analysis, or when the user asks for refresh / net-new briefs from AI-visibility data.

Use the connected visibility platform’s library, page, coverage, and action-queue tools. Look up schemas each run.

## Refresh briefs (3–5)
- Source: owned pages losing visibility or citations, especially freshness.
- Read the live page, not just the URL.
- Recommend updates only: what to add, rewrite, retitle, or cite. Do not propose a full rewrite unless the page is the wrong intent.
- After the user approves a brief, generate or update the content outline on that artifact in the connected platform. That outline is what drafting uses. Do not keep a separate chat outline as the spec.
- Prefer a refresh over net-new when the existing page already targets the same intent.

## Net-new briefs (3–5)
- Source: high-value tracked prompts with weak or zero visibility, after a coverage check.
- Skip if a similar owned page already exists.
- One distinct search intent per brief. Keep comparison pages separate when the competitive set differs.
- Target prompts the org actually tracks, not invented SEO keywords.
- After approval, the platform outline (not a recap in chat) is the writing spec.

## Brief shape
Each brief includes: working title, URL or "new", target prompts, why now (data), audience, outline of changes or sections, sources/competitors to beat, and what not to do (cannibalization).

## Gate
Send the analysis + both brief packs to the user. Stop. Do not write articles or publish until they approve specific briefs.
