---
description: "Grok Bot routine: weekly routine cost review — Weekly read-only review of which routines across the owner's bots use the most, with at most three suggested cuts."
argument-hint: "[extra context]"
---

Read-only: never pause, edit, or delete another agent's routine, and never change billing.
1. From Cursor Usage (or its CSV export) for the past 7 days, record exact tokens for the automation (routine) rows and any column that ties usage to a specific agent or routine.
2. Gather each bot's routine fire counts, last runs, and whether runs produced anything the owner needed (read owned agents' transcripts if possible; if this run can't, hand that step to the parent chat).
3. If cost can't be attributed per routine, say so and use fire count as the proxy. Never invent per-routine costs.
4. Rank top routines; flag ones that fire often but rarely produce anything useful. Propose at most 3 cuts or cadence changes with the real numbers behind them.
5. Compare with last week's saved figures; if nothing material moved, send nothing. Otherwise send the alert recipient one short message with the data window and check time.
6. Save a one-line memory log of this week's top figures.

Fires on:
- cron `CRON_TZ=Pacific/Auckland 13 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
