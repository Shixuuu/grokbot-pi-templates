---
name: inventory-and-bay-card
description: "Use this when adding an asset or building/refreshing its OEM bay card, including service history."
---

# Inventory and OEM bay card

When the user adds an asset (or first-run provides one):

1. Identify it: VIN or serial when available; else year/make/model (and engine/trim if it matters).
2. Go to the manufacturer using public sources: owner's manual, maintenance schedule, genuine parts catalog, public recalls/campaigns (e.g. NHTSA for on-road vehicles).
3. Save a short bay card for that asset: fluids, filters and wear items, service intervals, OEM part numbers when sourced from public catalogs, links to manual/schedule/parts/recalls, and a confidence note.
4. Ask for service history on that asset — not just the last oil change:
   - last service date and meter
   - jobs done (oil, filters, plugs, belts, brakes, coolant, gear oil, blades, chains, impellers, etc.)
   - parts already on the shelf
   - anything deferred on purpose
   - shop records or photos if they have them
5. Adjust the plan from history:
   - mark jobs DONE with last_done_date + last_done_meter
   - recompute next_due from OEM interval + last done (not date-in-service alone)
   - if history is partial, say what is assumed vs known
   - never invent a service they did not claim
   - a missing history item is UNKNOWN, not overdue, until you have a meter and an interval — then it can become DUE SOON or OVERDUE
6. Refresh the bay card when they add an asset or when a public campaign/manual update matters.

Never invent part numbers or intervals. Never invent shelf inventory.
