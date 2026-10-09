---
name: seo-action-plan
description: "Use only after user confirmation (usually after SEO monitoring) to produce an executable plan — pages to optimize/create/noindex/thicken and blog posts to rewrite or write (Week 1 vs Weeks 2–4)."
---

# SEO action plan

Turn SEO **measurement** into an executable plan: which pages to optimize/create/noindex/thicken, and which blog posts to rewrite or write (Week 1 vs Weeks 2–4).

**Gate:** Run this skill only after **explicit user confirmation**, normally right after SEO monitoring offered it. If the user asks for an action plan cold and monitoring outputs are missing, run SEO monitoring first, then ask again before this skill’s page/blog brief — or, if they already confirmed both, complete monitoring then continue into this skill without a second ask.

Domain-agnostic. Inputs: `baseline-report.md`, `shortlist.csv` from SEO monitoring (requires Glasser CLI).

**Language:** All briefs and file artifacts are **English**. Match the user’s chat language for the delivery summary unless they ask for English chat.

**This skill does not pull Glasser metrics.** Cite Semrush vol/KD and ranking facts from monitoring outputs; do not invent numbers.

## When to use

- User confirmed the post-monitoring offer to produce an action plan
- User explicitly asks for pages/blog recommendations and monitoring outputs already exist
- Refining an existing `page-and-blog-brief.md`

## Decision method

| Situation | Action |
|---|---|
| Exact or near-match URL exists | `optimize` / `rewrite-expand` |
| Login, app shell, or utility URL ranking for brand | `noindex` (+ drop from sitemap); fix homepage |
| Strong commercial/category demand, no LP | `create` one money LP or hub section |
| Comparison / “best X” / educational intent | Blog listicle or vs-post; CTA to matching LP |
| Hundreds of programmatic siblings, one canary ranks | `thicken` top N only |
| Extreme KD vs site authority | Defer or secondary on a mid-KD page |

**Sequencing:** P0 hygiene → money LPs/hubs → Week 1 blog rewrites → Weeks 2–4 new posts → thicken top 10–30 integrations/templates.

Cap: ~**8–12 pages** + **4–8 blog items** for ~30 days. One strong page per cluster.

## Pages

Each row: Action, URL, Primary KW + Semrush vol/KD, Secondary KWs, Page type, Goal, Outline (H1 + 4–8 sections), Internal links, Priority (P0/P1/P2).

## Blog slate

Each item: Action (`rewrite/expand` or `new` + slug), Working title, Primary KW + vol/KD, Intent, Angle, Outline, CTA URL, Format to clone, Priority (Week 1 vs Weeks 2–4).

Week 1 = rewrites first; clone ranking formats; no blog spam on large unranked inventories.

## Required file

`/workspace/seo-<domain>/page-and-blog-brief.md` (English): Pages table; Blog Week 1 vs Weeks 2–4; Explicit do-not; Success checks.

## Chat delivery

1. One-line stage verdict
2. **Do these pages** — path — action — primary KW (vol/KD)
3. **Write / rewrite these posts** — path/slug — primary KW (vol/KD)
4. Point to `page-and-blog-brief.md`
5. Offer title/H1/outline for any single piece

## Anti-patterns

- Running without user confirmation after a monitoring-only pass
- Pulling Glasser data inside this skill
- Keyword tables without URLs/titles/outlines
- New blogs before rewriting near-match URLs
- Inventing metrics
