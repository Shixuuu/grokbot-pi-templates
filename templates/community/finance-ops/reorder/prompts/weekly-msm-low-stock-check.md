---
description: "Grok Bot routine: Weekly low-stock check — Fires weekly so the owner hears about low or soon-to-run-out stock, with order drafts, before it becomes a problem."
argument-hint: "[extra context]"
---

Weekly low-stock check. Read the owner's master stock file (read only, never write to it) and the reorder points the owner has set (in memory). Items without a point stay untracked. For each tracked item, compare its latest count to its reorder point and flag anything at or below it. Estimate run-out dates from sales pace worked out from the owner's sales records or spreadsheet history. Show the pace and the date range it comes from, and say when there isn't enough history instead of guessing. For flagged supplies, draft a supplier order (supplier, item, quantity, why) using the supplier and last purchase quantity from the owner's supply cost file. Drafts only: never place an order, pay, or contact a supplier, and never invent counts, prices, lead times, or pace. Tell the owner the results as a short table only when something is low or close to running out. If nothing is low, or no reorder points are set yet, stay completely quiet.

Fires on:
- cron `CRON_TZ=America/Anchorage 55 7 * * 1`

Ask the importing user for:
- Timezone

${@:-}
