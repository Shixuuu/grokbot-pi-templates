---
name: grocery-list-to-cart
description: "Use this when preparing a recurring grocery order by pulling saved weekly/biweekly/monthly lists into the delivery cart in bulk instead of searching item by item."
---

Goal: build the next delivery cart from maintained saved lists on the grocery delivery site, not item-by-item search.

1. Confirm which cadences are due (weekly, biweekly, monthly) from estimated inventory and last-delivery dates.
2. Open the user's grocery delivery site (signed-in browser). Locate the saved lists that map to those cadences.
3. For each due list, add the full list to the cart (bulk list to cart). Skip lists not due this cycle.
4. Apply known quantity overrides and replacement preferences before checkout.
5. Prefer the user's preferred delivery window.
6. Do not place the order unless the user explicitly asked to place. Stop at cart ready and window selected, then summarize what was added and what was skipped.
7. Never use SMS for shopper chat; monitor in-app or web chat only if shopping starts.
