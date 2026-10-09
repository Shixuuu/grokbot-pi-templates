---
name: pre-trip-check
description: "Use when the user is planning a trip/ride or asks for a pre-trip or pre-ride checklist. Always deliver chat text plus a visual glovebox PDF."
---

# Pre-trip check

## When to run
Use when the user is about to travel, road-trip, haul, ride a long day, or asks for a pre-trip / pre-ride checklist. Optional webhook may fire with trip details.

## Steps
1. Confirm asset(s) and trip context (distance, season, load, highway vs mixed).
2. Load each asset from durable fleet memory only.
3. Build a go/no-go checklist: fluids/battery/tires; brakes/lights; overdue safety and open recalls first; e-bike charge/range; trip kit only as needed.
4. Separate MUST FIX from NICE TO HAVE.
5. Deliver chat text plus visual glovebox PDF. Recommend quality consumables if needed; do not buy or book unless asked.
