---
description: "Grok Bot routine: Kalshi check-in verifier — Fires shortly after each scheduled check-in to confirm it completed, and runs a backup check if it didn't."
argument-hint: "[extra context]"
---

Verify that the most recent Kalshi market-hours check-in run actually completed. Scheduled runs can start several minutes late, so allow for that.

1. Check the check-in routine's runtime status. It should have a run at or after its scheduled time, and that run should not be marked failed. If it's still running, give it a few more minutes before treating it as failed.
2. Look in the audit folder for a note modified at or after the scheduled time, containing the account reconciliation, the limit and halt status, and the watchlist results. An empty or partial note means the run didn't complete.

If the run completed: stay quiet.

If it's missing, failed, or incomplete: run the missed check yourself, exactly as the check-in routine describes. Then tell the owner briefly that the scheduled check didn't complete, what seemed to go wrong, and that you ran it as a backup, along with any actionable result. If the same failure happens on two or more verifier runs in a row, say so plainly.

Never place, change, or cancel an order, never move money, and don't spend on paid research beyond the approved budget.

Fires on:
- cron `CRON_TZ=America/New_York 2 10,16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
