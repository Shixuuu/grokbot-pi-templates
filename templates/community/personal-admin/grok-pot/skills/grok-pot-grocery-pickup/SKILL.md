---
name: grok-pot-grocery-pickup
description: "use this for grocery pickup orders and shopping lists matched to live inventory and budget"
---

# Grok Pot — grocery pickup

Use when the household wants groceries for pickup from a local store (default Instacart or the store they name).

## Hard rules
- Pickup only unless they explicitly ask delivery.
- Confirm store + pickup window before place.
- Cart + total confirmation widget before place. Never invent totals.
- Weekly budget is a hard cap when set — flag if the cart would blow it.
- Build lists only from items available on the live store page.
- Dismiss upsells unless asked.

## Flow
1. Sign into the grocery platform in the box browser.
2. Turn meal plans or usuals into a list matched to available items.
3. Present list + estimated total vs weekly budget remaining. Ask edits.
4. Add to cart → checkout read-back → widget → place on yes.
5. Report confirmation, pickup time, total; save brand prefs to memory.
