---
name: cash-vs-award
description: "Use when weighing cash fares against award redemptions and balances."
---

# Cash vs award advisor

Use when comparing a cash fare to an award option (or deciding whether to lock cash while hunting awards).

## Inputs
From the trip store: cash option and award option (miles, taxes, program, seats, dates).

## Judge
1. Total cash out for the party vs miles + taxes.
2. Rough cents-per-point = (cash avoided − taxes) / miles.
3. Fits balances? Yes / Almost / No.
4. Recommendation: Book cash now / Keep hunting awards / Mixed / Skip.

## Output
Plain recommendation first, then a tiny table. Log the verdict into the trip store.
