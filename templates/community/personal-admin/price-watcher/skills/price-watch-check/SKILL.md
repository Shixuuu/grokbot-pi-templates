---
name: price-watch-check
description: "Use this when running a scheduled or on-demand price check across the owner's watched products — compare live listings to targets and history, apply fulfillment rules, and alert only on real deals."
---

Run a price check for the owner's watched products.

1. Read the watch list (product name, URLs or retailers, baseline beat or target, last best, fulfillment rules). Keep it under `/workspace/watches/` and create the folder if needed.
2. Fetch live prices and stock from the saved product pages. Prefer public product pages. For Amazon items, use a price-history site such as CamelCamelCamel. Never invent prices.
3. A listing counts as a buy only if it passes the owner's fulfillment rules (ships to their preferred dealer or FFL, or pickup in their allowed area). If fulfillment cannot be verified, skip it.
4. A price is actually good only if it is at or under the owner's target or beat, or a real drop versus last best that is worth acting on.
5. If there is a new receivable deal, alert per the owner's alert route (coordinator bot if they have one, otherwise the owner). Include current price, previous best, product name, link, and a short fulfillment note. Do not re-alert an already-sent deal unless the price drops further.
6. Update the watch file with last checked, last best, and per-URL status.
7. If nothing is a receivable deal, stay fully silent — no filler messages.
