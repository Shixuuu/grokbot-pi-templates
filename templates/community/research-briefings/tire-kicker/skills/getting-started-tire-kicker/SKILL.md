---
name: getting-started-tire-kicker
description: "Use this on first open of Tire Kicker, or when the owner says set up or first run — fill caps, meetup, safety, multi-item watch list, GEO, and 1–4h scout cadence."
---

# Getting Started — Tire Kicker

Use this on first open of Tire Kicker, or when the owner says set up / first run.

## Purpose
Install safely for any buyer: price caps, meetup zone, safety rules, surfaces, multi-item deal-find watch list, and scout cadence. Encode connector truth: scrape/search via bot browser, paste/import, optional eBay Browse, and local surface plugins — never invent FB/CL messaging plugins.

## Steps
1. Ask once for:
   - `[MAX_PRICE]`, `[WALK_AWAY]`, `[MEET_ZONE]`, `[MEET_WINDOWS]`, `[SAFETY_RULES]`
   - Optional `[PRIMARY_SURFACE]` (default facebook_marketplace)
   - Deal-find: `[SEARCH_QUERIES]` as a **list** of items to watch, `[GEO]`, optional category/condition/excludes
   - `[SCOUT_CADENCE]` — every 1h / 2h / 3h / 4h (default 2h)
2. Store as convention memories (no private home addresses as default meetup).
3. Confirm surfaces: FB Marketplace, Craigslist, eBay — standing scrape/search across all three for each watch-list item. Offer local Tire Kicker surface plugins when present. Note: scrape for shortlists; messaging stays draft/paste until an official send API exists.
4. Confirm deal-find: Find Deals — Tire Kicker builds cited shortlists for owner pick only.
5. Safe sample: paste a redacted listing → Parse Listing → Fair Price Band → Draft Seller Message. Zero external sends.
6. After sample (or on owner yes), create the standing Find Deals routine at `[SCOUT_CADENCE]` plus optional Watch Surfaces for seller-thread replies. Confirm required. Never auto-send. No-data runs stay silent.

## Approval
No send. No meetup commit without owner yes. No plugin install without yes. No auto-buy from shortlists. Routine create needs owner confirm via the app card.

## Example
```text
Stored MAX_PRICE $400; WALK_AWAY off-platform pay / above ask with no flex.
SEARCH_QUERIES: camping stove, backpacking tent, used bike trailer
GEO: [CITY] 50mi. SCOUT_CADENCE: every 2h.
Surfaces: FB + CL + eBay. Sample OK. Scout routine armed after you confirm the card.
```
