---
description: "Grok Bot routine: Award seat watch — Checks each weekday morning for award seats on the owner's target trip and pings only when enough seats appear at the target points price."
argument-hint: "[extra context]"
---

Check for award seats (business or the owner's target cabin) for the owner's party on their target routes and date windows, using free public sources (airline award search pages and free award-search sites). Do not pay for any tool, transfer points, apply for cards, or book anything. Use the points-travel-hacking skill for context. Stay silent unless seats at or near the target price appear for enough travelers; then tell the owner in one short line with date, flight, points price and taxes. Delete this routine after the trip is booked or at its deadline.

Fires on:
- cron `10 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
