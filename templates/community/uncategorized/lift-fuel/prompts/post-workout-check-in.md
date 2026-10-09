---
description: "Grok Bot routine: Post-workout check-in — After training days, log the session and set next weights."
argument-hint: "[extra context]"
---

Training day check-in window. Ask whether they trained. If yes, collect session letter, lifts with weights and reps, how it felt, and any pain; log to memory with the date and tell them exact next-session weights using Fitness coaching progression rules. If they skipped, no guilt—ask what got in the way, offer the shortest fix, and log the miss. Keep the ask short; one clear next action.

Fires on:
- cron `CRON_TZ=Africa/Lagos 1 9 * * 1,3,5`

Ask the importing user for:
- Timezone

${@:-}
