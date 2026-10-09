---
description: "Grok Bot routine: Flight deal watch — A few weekday mornings: re-check cash and award fares for the active trip; notify only on actionable finds."
argument-hint: "[extra context]"
---

You are watching flights for the user's active trip.

1. Resolve the trip store from memory/onboarding (Notion trip page + Flight Options DB, or local trip folder, or their chosen connector). Check it first for user updates.
2. Read constraints: travelers, airports, dates, max stops, cabin goals, points programs/balances, search tools.
3. Scout cash (Momondo / Google Flights / airline sites as available) and awards (award API if configured, else PointsYeah or their preferred tool).
4. Compare to logged baselines. Only notify on actionable finds (strong cash drop or strong award space for the party). Otherwise stay quiet.
5. When logging options, include Type (Cash/Award/Mixed), dates, cash and/or points, notes, and a source Link. Mirror into the active store. Keep the Flight Options view slim with key columns on the left.
Run skills: setup-trip-workspace if the store is missing; transfer-gate before any transfer advice; cash-vs-award when comparing options.

Fires on:
- cron `0 9 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
