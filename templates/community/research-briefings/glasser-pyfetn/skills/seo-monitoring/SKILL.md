---
name: seo-monitoring
description: "Use when measuring or tracking product-site SEO — Glasser baselines, Semrush-scored opportunity keywords, and daily/weekday retests. After results, offer SEO action plan and wait for user confirmation before running it."
---

# SEO monitoring

Measure and track product-site SEO with **Glasser**. Domain-agnostic; caller supplies the product URL (and optional seeds / rivals).

**This skill does not write page or blog recommendations.** After monitoring finishes, **offer** SEO action plan and wait for explicit user confirmation before running it.

## Startup flow (default for a new site)

1. Ask for (or take) the product website URL.
2. Run Glasser CLI setup/auth if needed, then **immediately** run this skill's standard baseline + opportunity shortlist — **do not** pause to quote Prices or ask for spend approval first.
3. Deliver a short monitoring summary (stage verdict, key metrics, top opportunities) and report Charge.
4. **Offer** to produce an SEO action plan — do **not** start SEO action plan until the user confirms.
5. After confirmation, run SEO action plan on this skill’s outputs.

## Required first

1. Glasser CLI — install, auth, `search` → `inspect` → `run`, Charge, Run URL.
2. Canonical upstream: https://glasser.ai/SKILL.md (re-fetch after CLI upgrades).

Do not invent volumes, rankings, traffic, KD, or backlink stats. GSC is ground truth when connected; if declined/unavailable, say so and continue with Glasser only.

## Preconditions

1. Apex product domain (`www` → apex noted if present).
2. `glasser balance` exit 0.
3. Soft first-pass spend cap about **$2–3** total unless the user raises it. Still `inspect` every endpoint and keep volume params small. **Never** ask the user to approve Prices before the standard baseline + opportunity pack — run, deliver results, then report Charge. Ask only before exceeding that pack or soft cap, or for optional expensive Ahrefs dumps.

## Phase A — Product context (lightweight, free)

Fetch homepage (+ about/pricing if useful) only enough to: one-liner positioning, audience, sitemap shape, brand-collision risks, list of existing URL types. Save under `/workspace/seo-<domain>/`.

## Phase B — Baseline (Glasser)

Search then inspect, then a small first pack, for example:

| Priority | Need | Example providers to search |
|---|---|---|
| Cheap overview | Domain + backlink summary | Serpstat, Semrush overview |
| Core | Site metrics (org traffic/keywords/paid) | Ahrefs metrics |
| Core | Ranked keywords + ETV | DataForSEO Labs ranked_keywords (small limit) |
| Core | Backlink RD / rank / spam proxies | DataForSEO backlinks summary |
| Optional | Organic keywords, pages-by-traffic, competitors | Ahrefs — only if organic presence exists |

Reconcile multi-provider disagreements; prefer directional agreement over the largest backlink count.

Write `/workspace/seo-<domain>/baseline-report.md` with product one-liner, metrics + sources + Run URLs, top rankings, competitors, gaps, suggested monitor metrics, Charge total.

## Phase C — Opportunity keywords (Glasser)

1. Expand seeds via idea miners (e.g. DataForSEO keyword ideas, Serpstat related).
2. Shortlist ~25–40 commercial / info-commercial terms; drop rival pure-brand and unrelated brand-collision noise.
3. Score every shortlisted term with Semrush Keyword Metrics via Glasser when available. Prefer Semrush vol/KD as table of record.
4. Map each term to a URL type and existing path if known.

Output: `opportunities/shortlist.csv` and `opportunity-report.md`. Cap ~25–40 Semrush metric calls on a first pass.

## Phase D — Hand-off (required)

1. Summarize monitoring results to the user.
2. Explicitly offer: produce an **SEO action plan** (pages + blog slate) next.
3. **Stop.** Do not run SEO action plan until the user confirms.

## Phase E — Ongoing / weekday monitor

When creating or running a routine: brand SERP; top earning URLs / head opportunity terms; cheap Glasser deltas only; soft cap ~$0.20/day unless asked; snapshots under daily/; digest in the user’s chat language; if material changes appear, offer to re-run SEO action plan — wait for confirmation.

## Anti-patterns

- Skipping Glasser CLI setup/auth
- Asking the user to confirm Glasser Prices before the standard first monitoring pass
- Auto-running SEO action plan without user confirmation
- Turning a monitoring pass into a full page/blog brief inside this skill
- Daily expensive Ahrefs dumps
- Inventing metrics
