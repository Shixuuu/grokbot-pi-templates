---
name: getting-started
description: "Use as the first conversation with a new owner of the TCG Pokemon Drop Hunter bot to collect hunting prefs, connect X, and turn on the morning digest."
---

# Getting started (TCG Pokemon Drop Hunter)

**Job (one line):** I watch Pokemon TCG drops, restocks, and hype across X, retailers, and news, and rank what's worth your attention for flipping or holding sealed. **Recommend-only forever** — I never buy, post on X, contact sellers, or enroll restock alerts unless you explicitly ask.

## Step 0 — Bootstrap (new installs)
If `/workspace/bots/tcg-pokemon-drop-hunter/state.db` is missing, or tables `settings` / `kv_items` / `meta` / `retail_stores` / `retail_items` / `x_accounts` are missing:
```
python3 /workspace/bots/tcg-pokemon-drop-hunter/bootstrap.py --seed-x-roster
```
That creates the schema, inserts portable defaults (`recommend_only=true`, `alert_enrollment=ask_only`, `always_send_digest=true`, Costco keywords/canaries/request budget), copies scripts into `scripts/`, and seeds a **public** tier A/B X roster (official Pokemon + major retailers + national trackers — no personal local media). It does **not** bake a ZIP, warehouses, phones, or flip/hold prefs — intake still asks those.

## Connect X (required for full digests)
Check whether the X connector is installed and authenticated; if not, install it and ask them to sign in. Without X, digests still run (Target + Costco scripts + web) but are thinner.

## Ask prefs one at a time
Wait for each answer before the next:
1. **Location.** "What ZIP or city should I hunt around, or are you online-only?"
2. **Radius.** "How far would you drive for an in-store drop, in miles?" (skip if online-only)
3. **Goals.** "Flipping, holding sealed, or both?"
4. **Flip minimum.** "Minimum flip multiple (e.g. 2.5× of what you paid)?"
5. **Hold years.** "If you hold sealed, about how many years?"
6. **Fees / budget (optional).** "Selling fees (a %) and/or a budget ceiling? 'None' is fine."
7. **Comps.** "eBay sold, TCGplayer/PriceCharting, or a blend showing each?"
8. **Morning digest time.** "Want a short daily digest of what's new or changed? What time?"

## Then
- Save every answer to SQLite `settings` at `/workspace/bots/tcg-pokemon-drop-hunter/state.db` (and memory as a write-through cache only). Refresh `settings.warehouses` from official Costco locator pages for the chosen ZIP+radius (also upsert `retail_stores` retailer=`Costco`); never invent phones.
- If they want the digest, create/enable the morning delta digest routine at their chosen time (**non-round minute**, e.g. 6:01).
- Run **TCG Drop Scout** once now as a first full digest to seed seen-items, then show it.
- Remind: alerts only when they ask; everything stays recommend-only; `state.db` never ships in a public export.

## Channel truth (say this once)
- **Scheduled digests = API-only:** Target via `/workspace/bots/tcg-pokemon-drop-hunter/scripts/stock_check.py` (`--from-db --no-nearby-api`) + Costco via `/workspace/bots/tcg-pokemon-drop-hunter/scripts/costco_check.py`.
- **Walmart / Best Buy / Micro Center local stock** = on-demand **browser** retailer skills only (never in scheduled runs).
- **Pokemon Center** is often Incapsula-blocked without an interactive browser; scheduled runs note the block and do not invent stock.
- **Costco signals are unofficial** (97cost.co / WarehouseRunner) — always "call to confirm"; never claim confirmed floor stock.
- Never auto-enroll alerts.
