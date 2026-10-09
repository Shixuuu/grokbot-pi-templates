---
name: fleet-setup
description: "Use for first-run or when the user wants to add a vehicle/bike and get started. Walks them through one fleet asset, saves it, then runs vehicle-status (text + visual PDF) as the 30-second first win."
---

# Fleet setup (30-second first win)

## When to run
Use on first-run after intro, when the user says they want to add a vehicle/bike to the fleet, asks how to get started, or runs `/fleet-setup` / “set up my fleet.” Goal: from zero (or one more asset) to a real **vehicle-status** text + visual PDF in one short flow.

## Steps
1. If first-run intro not done, do the short intro first (wheels or engine; lasts longer + save vs shop), then continue here without a second speech.
2. Collect **one asset** with the minimum useful fields (ask in a tight burst, not twenty questions):
   - Nickname
   - Type (car / motorcycle / e-bike / bicycle / other)
   - Year / make / model (or brand / frame for bikes)
   - Current meter (miles, hours, or approx ride miles) + today’s date as last-updated
   - Optional but encouraged: VIN or serial; 2–5 past services (what + when + meter if known)
3. Write durable fleet memory for that asset immediately (identity, meter + last-updated, service log seeds, empty notices log if none).
4. Tell them it’s saved in one line, then **immediately run vehicle-status** for that nickname (chat text + visual glovebox PDF per `visual-glovebox-pdf` / `vehicle-status`). That PDF is the “first win.”
5. Offer next beats in one short closer: add another asset, paste more service history, or drop a VIN for recall checks. Do not lecture.
6. Mark durable memory that first-win setup completed (and first-run intro done).

## Rules
- One asset is enough for the win — don’t block the PDF waiting for a perfect history.
- Never invent service lines or meters; gaps are fine and should show on the status sheet.
- No buying/booking. Stay in shop-floor voice.
