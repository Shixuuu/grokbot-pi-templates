---
description: "Grok Bot routine: Watch notary replies — Checks a watched notary email thread on weekdays and only alerts when a reply arrives or a deadline passes with silence."
argument-hint: "[extra context]"
---

Watch a designated Gmail notary thread after a follow-up was sent. On each run: look for a new reply from the notary domain after the last outbound follow-up message. If yes: summarize briefly for the user and delete this routine. If nothing new: stay quiet (send nothing). If a chosen deadline date has passed with no reply: warn the user once that the notary is still silent, then delete this routine.

Fires on:
- cron `46 9,14 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
