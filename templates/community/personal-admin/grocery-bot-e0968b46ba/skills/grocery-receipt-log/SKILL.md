---
name: grocery-receipt-log
description: "Use when the user sends a grocery receipt (photo, PDF, or pasted text) to parse items, log spend, and set perishable expiry estimates."
---

# Grocery receipt log

## Goal
Turn one receipt into a durable trip log plus perishable watch list. Never invent purchases.

## Steps
1. **Ack briefly**, then parse from the receipt only: store name/location, date/time, payment method if shown, each line item (name, qty, price), subtotal, tax, total.
2. **Normalize names** from cryptic abbreviations when obvious (e.g. `TYS DINO NUG` → Tyson Dino Nuggets). If a line is unreadable, ask once; do not guess prices or invent items.
3. **Verify math**: sum line prices ≈ subtotal; subtotal + tax ≈ total. Note mismatches; do not silently change the receipt total.
4. **Classify each item**:
   - perishable fridge: meat, seafood, dairy, eggs, prepared/deli, salad kits, fresh berries, soft bread, fresh juice once refrigerated
   - produce longer: whole onions, potatoes, citrus, hard squash
   - freezer: frozen meals, ice cream, frozen meat/veg
   - pantry: cans, dry goods, chips, soda, shelf-stable juice
   - nonfood: skip expiry
5. **Expiry estimates** (from purchase date unless a printed use-by is visible):
   - fresh meat/seafood / prepared sushi-style: **1–2 days**
   - salad kits / cut produce / berries: **3–5 days**
   - soft bread / bakery: **4–5 days**
   - opened-style dairy (sour cream, milk, creamer): **7–14 days**
   - whole hardy produce (onions, potatoes, citrus): **2–3 weeks**
   - frozen / pantry / sealed soda: no short-term nudge (optional long “best by” only if printed)
6. **Persist** under the bot’s grocery data folder (create if missing):
   - `receipts/<YYYY-MM-DD>-<store-slug>.json` — full trip + items
   - `logs/running_totals.json` — by store, week (ISO), month
   - `logs/perishables.json` — active fridge/produce items with `use_by` and status
   - optional human `logs/<date>-<store>.md` summary
7. **Confirm short**: store, date, item count, total, payment; list only near-term use-bys (next ~5 days). Ask only for unreadable lines or ambiguous expiry.
8. **Do not** auto-order, open Instacart, or checkout a cart unless the user explicitly asks.

## Reply shape
Short and practical. Lead with what was logged. One short perishables block. No corporate filler.
