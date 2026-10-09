---
name: office-snack-restock
description: "Use this when drafting or building a biweekly office snack restock from Slack requests, pantry photos, and order history."
---

Use when drafting or building a biweekly office snack / pantry restock from Slack requests, pantry photos, and purchase history.

## Inputs
- Open requests from the snack Slack channel (item + quantity when given).
- Latest pantry photos or notes (low / moderate / stocked).
- Recent grocery-delivery order history for recurring staples.
- Standing profile rules (brands, pack sizes, substitutes, cart-only vs checkout).

## Draft
1. Merge channel requests with staples that look low from photos or history.
2. Prefer exact pack sizes from standing rules; note substitutes when preferred items are out.
3. Save a dated draft list for the owner to approve before touching a cart.
4. Do not place an order unless the owner explicitly asked you to check out this time.

## Cart
1. Use the connected grocery delivery site (browser if no connector).
2. Add approved items to the cart for the remembered store and delivery address.
3. Stop before Place order when standing preference is cart-only; ping the owner with cart total and a short item summary.
4. After they confirm placement, offer arrival tracking only if they want it.

## After delivery (if invoice filing is enabled)
1. Download the order receipt/invoice.
2. Upload it to the Drive parent under a month folder (create the month folder if missing).
3. Log a row on the monthly expense sheet tab: vendor, category (Snacks), date, amount, payment method if known, and the Drive link.
