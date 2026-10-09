---
name: tcg-drop-scout
description: "Use when researching Pokemon TCG drops, restocks, live local stock or X hype, or running a scheduled drop digest. SQLite prefs, fact labels, PKC/Costco/X/live-stock playbooks, Flip Hold handoff. Recommend-only; read-only on X."
---

# TCG Drop Scout

Research Pokemon TCG drops, restocks, live local stock and market hype. Rank candidates with **TCG Flip Hold Screener**. Prefer **delta digests**. Recommend-only; read-only on X. Never buy, checkout, engage on X, contact sellers, or enroll alerts unless the user explicitly asks.

## Durable storage
- Path: `/workspace/bots/tcg-pokemon-drop-hunter/state.db`
- Tables: `settings`, `kv_items`, `meta`, `x_accounts`, `retail_stores`, `retail_items`
- Prefs from `settings` (+ memory write-through cache). Never hardcode ZIP/radius/warehouses/handles.
- `state.db` must never ship in a public export. Back up before schema/bulk writes.
- New install: `python3 /workspace/bots/tcg-pokemon-drop-hunter/bootstrap.py --seed-x-roster`

## Prefs (ask if missing)
Goals; flip minimum; hold years; comps; location ZIP → `settings.location_zip`; radius → `settings.radius_miles`; fees/budget optional.

## Fact labels
CONFIRMED | MULTI-SOURCE | UNVERIFIED (single tracker) | RUMOR – unverified | CONFLICT | STALE.
Need ≥2 independent sources above RUMOR (except one tier-A). Every X line: label, MT time, `@handle [tier] — time — link`. Predictions stay RUMOR. Conflicts print both sides.

## Playbooks
**A — Pokemon Center:** on Incapsula note blocked; no invent stock; watch-only if MSRP/access unverified; browser only on demand.
**B — Costco floor:** never claim floor without user call/visit; call-before-driving from `retail_stores` phones; keep sku vs floor confidence separate.
**C — X / 429:** `get_usage_credits`; daily 8 searches order `pkc_invite` → `roster_a` → `roster_b` → `bigbox_draws` → `distro_alloc` → `club_items` → `debunk` → `roster_cd`; ≥2–3s between searches; on 429 finish A/B before dropping lower keys; footer lists keys ran/skipped; never invent posts.
**D — Live stock (API only in scheduled runs):**
- Target: `python3 /workspace/bots/tcg-pokemon-drop-hunter/scripts/stock_check.py --from-db --no-nearby-api --zip <settings.location_zip> --radius <settings.radius_miles> --json` → CONFIRMED (direct retailer check). Never store 2885.
- Costco: `python3 /workspace/bots/tcg-pokemon-drop-hunter/scripts/costco_check.py --json` → unofficial; call to confirm; never CONFIRMED; degraded/down → unknown not OOS; CONFLICTS block only.
- Walmart / Best Buy / Micro Center local stock = on-demand browser retailer skills only.

## Sequence
Load SQLite → X daily set (Playbook C) → label claims → Playbook D Target+Costco → delta → Flip Hold Screener (RUMOR/CONFLICT/STALE/watch-only never buy-worthy) → always-send digest with source-health footer → save kv_items/meta/since_ids.

## Hard rules
Recommend only forever (no buy/checkout action lines). Alerts ask-only. No browser in scheduled runs. Read-only on X. Handoff to Flip Hold Screener.

Slug `x-drop-scout`. Companion `tcg-flip-hold-screener`.
