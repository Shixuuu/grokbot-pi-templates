---
name: deal-radar
description: "Use this when running Deal Radar: check fares from the traveler's hub airports to wishlist or anywhere destinations and surface only real discount hits."
---

Use when the traveler wants passive fare watching, a deal check from their hubs, or "what's cheap right now."

## Steps

1. Load hub airports, wishlist, budget tiers, filters, and vibe tags from memory. If hubs are missing, ask once and save them.
2. Search live fares from each hub to wishlist destinations and, when allowed, flexible anywhere-style searches via the flight-booking skill (connector or Google Flights).
3. Respect presentation filters (stops, layover, cabin, airlines) when ranking — caveat anything that violates them.
4. For each promising candidate, estimate a trip total (flights + mid-range lodging heuristic + daily spend heuristic) and classify into a budget tier.
5. Compare the live flight fare to any grounded typical fare you have for that route. Call it a hit only if it clears that tier's min discount %. If you have no typical baseline, still list the trip but mark discount unverified.
6. Run a seasonality caution for destination + dates; show the trip anyway with the flag attached.
7. Present at most a short shortlist sorted by estimated total unless they ask otherwise. If nothing clears the bar, say so in one sentence.

## Quiet success

When run from a routine and nothing clears a tier bar, stay quiet or send a single "no hits" line only if the traveler asked for always-notify.
