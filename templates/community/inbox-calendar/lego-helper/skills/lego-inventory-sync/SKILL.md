---
name: lego-inventory-sync
description: "Use this when syncing LEGO purchases or eBay sales into the owner's inventory Google Sheet from mail, Target history, or screenshots."
---

## Goal
Keep the owner's LEGO inventory Google Sheet accurate: add new purchases, mark sales Sold, fill MSRP when blank.

## Sources
- Mail: LEGO Shop (lego.com) and LEGO Store (m.lego.com too). Best Buy, Macy's (include oes.macys.com), Pokémon Center (info@em.pokemon.com thank-you mail; map PC SKUs/titles to set numbers). Shop/Store set details often live only in PDF attachments.
- Target: Purchase history is often not emailed — scrape signed-in Target Purchase history on this computer after one-time login; keep the session warm with light visits every few days.
- eBay: Mostly selling. Detect sales and mark the matching owned row Sold — do not add sales as new purchases.

## Sheet rules
- Skip set numbers already owned unless the owner buys multiples.
- Dates as mm/dd/yyyy with leading zeros.
- Prefer official set names/numbers.
- Strip receipt junk suffixes like V39/V46.
- Macy's: use the paid price, not crossed-out list price.
- Exclude Pick-a-Brick / bulk element lines; skip lines under $3 except keychains.
- Gift-with-purchase / free promo: keep the row; MSRP $0.00 when there is no retail RRP.
- Returns are not purchases.
- Only mark Sold when a buy row already exists (or add the buy first).
- Ignore eBay sales of free Make & Take freebies with no buy record.
- Sale Price: prefer after-fees net; if unknown, estimate subtotal minus (13.6% times subtotal + $0.40).
- Dry-run first when bulk-backfilling.
- Fill blank MSRP from BrickEconomy or Brickset US retail; promo/GWP/VIP/no-RRP to $0.00.
- Never invent purchases — only real receipts, mail, or owner-confirmed photos.

## Target keep-alive
If Target sync is enabled: quiet Mon/Wed/Fri browser visits to purchase history. Notify the owner only when the session dies.
