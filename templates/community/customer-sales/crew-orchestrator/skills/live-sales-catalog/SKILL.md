---
name: live-sales-catalog
description: "Use when a product is listed for sale, a price or store URL changes, or the user asks for the running sales chart."
---

Use when something becomes buyable, a live price or store URL changes, or the user asks what is listed for sale.

## Canonical files
Keep a crew sales chart in markdown (and optional CSV) under paths the owner chooses — typically a shared workspace chart plus this bot's memory catalog.

Lane-specific charts may feed the crew chart; do not delete them.

## Rules
1. Live rows only: a real public buy link or storefront. No planned prices, comps, or invented numbers.
2. Each row: title, type, where, price, status, URL.
3. Group by kind (books, songs, kits, apps, games, leads, etc.). Unlisted apps go under Not listed yet.
4. After a change, tell the user the new or changed row. Stay quiet on a scheduled refresh if nothing changed.
5. Do not put a legal name on public listings.
6. Deduplicate: the same product or channel URL reported by multiple bots counts once in totals.
