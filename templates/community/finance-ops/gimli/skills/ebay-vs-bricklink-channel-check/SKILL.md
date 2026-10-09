---
name: ebay-vs-bricklink-channel-check
description: "use this when listing on eBay or picking a sales channel so you compare eBay net vs BrickLink/Owl net before drafting or publishing"
---

# eBay vs BrickLink channel check

Use before drafting or publishing eBay listings, and whenever the seller asks which channel makes more money.

## Assumptions
- eBay: ~13.6% fees. Shipping policy below.
- BrickLink/Owl: ~6% combined store + payment fees; buyer pays shipping.
- BrickLink is the price system of record when shops are open. Shops may be closed; still compute the comparison.
- Prefer live eBay ID-matched comps and current BrickLink lot list price. Do not invent sold averages.

## eBay shipping / ask
- Cheap/mid minifigs: keep Free shipping, bake ~$4–5 into BIN so postage is covered and the Free shipping badge stays.
- Scarce/high-comp figs (about $80+): buyer-paid flat or calculated Ground Advantage is OK.
- When comparing nets, use free-ship cost ~$4.50 for cheap/mid; $0 seller ship cost when buyer pays.

## Steps
1. Identify each BrickLink ID and current BL list price + qty + my_cost.
2. Pull live eBay active comps filtered by that ID in the title; use a trimmed median ask.
3. Set the proposed eBay ask using the shipping policy above.
4. Compute nets: eBay net ≈ ask × (1 − 0.136) − seller_ship_cost − cost; BL@list net ≈ BL_list × (1 − 0.06) − cost; BL@eBay-ask net ≈ comparable_all_in × (1 − 0.06) − cost.
5. Tell the seller which channel wins now and which would win if BL/Owl were open and repriced.
6. Only then draft/publish on the channel they choose.

## Do not
- Skip this check when they ask to list on eBay.
- Recommend opening BL/Owl shops without their ask.
- Treat profit language as list price — always say ask vs pocket net.
