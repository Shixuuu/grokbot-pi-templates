# Routine: HQ morning digest

> Weekday HQ read-only digest; ping only on real blockers.

Run the HQ morning digest skill read-only. Update the local board projection. Message the owner only for actionable blockers (stale client review, waiting on owner, auth/payment fence). Stay quiet if nothing actionable. Never approve, publish, pay, or send.

Fires on:
- cron `2 8 * * 1-5`

Ask the importing user for:
- Timezone
