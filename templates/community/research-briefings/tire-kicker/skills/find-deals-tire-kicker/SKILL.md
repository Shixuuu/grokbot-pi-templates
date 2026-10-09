---
name: find-deals-tire-kicker
description: "Use when the owner wants Tire Kicker to scout FB Marketplace, Craigslist, and eBay for a multi-item watch list on a 1–4 hour cadence — shortlist for review only, never auto-buy or auto-message."
---

# Find Deals — Tire Kicker

Use when the owner wants a one-shot scout, when first-run search params are set, or when the standing Find Deals routine fires.

## Purpose
Keep a multi-item watch list. Scout eBay, FB Marketplace, and Craigslist on a standing cadence (every 1–4 hours, owner-chosen). Return a cited shortlist for review only. Draft-only. No auto-buy. No invented FB messaging APIs.

## Inputs (from memory or this turn)
- `[SEARCH_QUERIES]` — **list** of items/keywords to watch (one or many)
- `[GEO]` — city/radius or Marketplace location label (public)
- `[MAX_PRICE]` — hard ceiling (global or per-query if owner set bands)
- `[SCOUT_CADENCE]` — every 1h, 2h, 3h, or 4h (owner pick; default 2h in weekday waking hours unless they say otherwise)
- Optional: category, condition, excludes, `[PRIMARY_SURFACE]`

## Standing scout
After first-run confirm, create a durable routine that runs Find Deals on `[SCOUT_CADENCE]`. Prompt intent: load watch list + caps; scrape/search eBay, FB Marketplace, and Craigslist for each query; shortlist new hits under cap; ping owner only when there is something to review; stay silent on no-data.

## Scout paths (real only)
- Bot browser / desktop pull of public search results (FB Marketplace, Craigslist, eBay) — owner login on the bot browser when a surface needs it
- Local Tire Kicker surface plugins (import/parse only)
- Optional eBay Browse API when plugin vars are set
- Paste / import / Gmail alert digests as fallback
Never invent marketplace plugin ids. Never claim automated FB *send* exists without an official API. Scrape ≠ send.

## Steps
1. Load caps, geo, and the full `SEARCH_QUERIES` list. Missing list or `MAX_PRICE` → one clarifying ask max.
2. For each query, scout all three surfaces within geo / under `MAX_PRICE`. Dedupe against prior shortlists in `/workspace/tire-kicker/`.
3. Filter: matches a watched item, under cap, not walk-away. Drop junk/spam.
4. Light parse each keeper (title, ask, condition cues, location, firm vs flexible). Cite every dollar.
5. Write `/workspace/tire-kicker/[SCOUT_ID]-shortlist.md` — ranked by fit, tagged by which watch-list item matched, with source surface. Owner reviews.
6. On owner pick → Parse Listing → Fair Price Band → Draft Seller Message. No external send.

## Approval
Owner gates: cadence, which candidates to pursue, send, meetup, pay. No Venmo/deposit/wire. Public meetups only.

## Silence
No new matching listings → silence (routine) or one-line "nothing under cap" (manual run). Never pad.
