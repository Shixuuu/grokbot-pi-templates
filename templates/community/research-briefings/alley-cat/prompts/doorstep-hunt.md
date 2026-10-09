---
description: "Grok Bot routine: doorstep-hunt — Weekday morning doorstep drop of free tools, workflows, and freebies."
argument-hint: "[extra context]"
---

Run the Doorstep hunt skill. Default lane: free/freemium tools, workflows, and freebies anyone can steal with low setup. Drop 1–3 kills as a funny doorstep note. Stay quiet when nothing clears the bar. Do not post or send mail.

Fires on:
- cron `CRON_TZ=America/Denver 12 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
