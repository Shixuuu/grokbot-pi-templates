---
name: competitor-glasser-research
description: "Use when pulling competitor intel via Glasser — requires Glasser CLI first; run lean paid pulls immediately when asked to monitor/baseline (no price-confirm gate); produce a dense product/reputation/ads/traffic brief."
---

# Competitor Glasser research

How to retrieve and synthesize competitor signals with Glasser. Domain-agnostic: the caller supplies `domain` / company name and output folder.

**Prerequisite:** read and follow Glasser CLI first (install, auth, search → inspect → run). This skill does not replace Glasser usage rules.

Match the user's chat language for the brief.

## Preconditions

1. Glasser CLI is installed and `glasser balance` succeeds.
2. When the user asked to monitor / baseline / refresh this competitor, **run immediately** — no price quote, no spend-confirm pause. Prefer a lean high-signal endpoint set; deepen only if the brief is still thin or they ask.

## Dimensions to cover (must-have)

Always attempt these four; if data is missing, say so plainly in the brief:

1. **Product / features** — positioning, capabilities, pricing, clients (web/iOS/desktop), changelog/release cadence, docs/integrations, narrative pivots.
2. **Reputation** — press tone, founder interviews, app-store/review themes, social/company-post engagement, praise vs complaints.
3. **Ads** — not just counts: creative headlines/body themes, formats, landing intents, timing vs funding events, whether ads lag product narrative.
4. **Traffic composition** — MoM visits + channel mix (direct, referral, mail, social organic/paid, search organic/paid, display, GenAI) and what that implies for GTM.

Also pull when useful: funding, headcount/jobs (roadmap clues), SEO only as supporting context (do not over-weight if organic share is tiny).

## What to search for in Glasser (intent → capability)

Use `glasser search -q "..."`, then inspect, then run:

- company / organization enrich by domain
- website traffic / engagement / traffic sources
- SEO site metrics, ranked keywords, backlinks (supporting)
- Google ads transparency / ad creatives by company domain (mine creative text)
- Meta/Facebook ads only with a verified Page ID — **do not** trust bare-domain Meta search when samples show wrong advertisers
- company posts / social profiles
- job openings / headcount trends
- company funding
- news / web scrape of homepage, pricing, docs, learn pages
- app store / review signals when available

Pick sensible endpoints after inspect; reuse known-good provider/endpoint pairs when they still inspect cleanly.

## News / name hygiene

- Prefer queries that include distinctive anchors (product category, CEO, investor, exact product name) so generic collisions do not pollute reputation results.
- Keep methodology out of the user brief; only use clean results.

## Synthesis → user brief

1. Lead: one-line competitive posture + what changed
2. Product and features
3. Reputation and narrative
4. Ad content direction (themes, messaging, formats, sync with product)
5. Traffic composition and meaning
6. Hiring / funding (if it moves the story)
7. Short watchlist for the next cycle

Rules:

- Dense insight, not sparse tables of bare metrics.
- No query strings, provider names, charge lines, or “how we fetched” in the user-facing message unless asked.
- Save raw JSON + internal RUNS appendix on disk; keep the user message conclusion-only.
- Diff against the previous snapshot when one exists; call out true changes vs same-day noise (e.g. SEO calendar-date swings).

## Weekly refresh (lean but deep enough)

1. Refresh traffic mix, ad creatives/themes, product surface (site/docs/posts/releases), reputation (news + reviews/posts), jobs/headcount if cheap.
2. Compare to last snapshot; lead with changes.
3. Update the saved snapshot folder for the next cycle.
