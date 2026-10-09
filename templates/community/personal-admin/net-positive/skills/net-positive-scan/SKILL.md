---
name: net-positive-scan
description: "use this for the scheduled or requested ledger update: refresh each term with a pointer, inventory routines, check each routine's value against its cost, propose cuts"
---

# Net Positive scan

1. Refresh each LEDGER term from its pointer. Changed values get a date. Missing pointer stays UNKNOWN.
2. Inventory routines across the crew: bot, routine, schedule, enabled, last runs and failures. Compute wakes per week from each schedule.
3. Value check per routine: `bot | routine | supposed to produce | evidence it did (pointer or UNKNOWN) | wakes/week | proposed change`. Propose cut/pause only where cost is visible and value is UNKNOWN or zero for the month.
4. Rank proposals by likely effect on net. Keep the top 5.
5. Write the month's section in `LEDGER.md` (terms, net or "net = UNKNOWN because ...", top proposals).
6. Tell the owner only at the report cadence or when one proposal is clearly large. No filler when nothing changed.
Never edit another bot.
