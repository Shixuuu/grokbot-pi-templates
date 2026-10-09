---
description: "Grok Bot routine: Weekday reminder — Fires each weekday morning to remind the owner of their pending TestChimp tasks."
argument-hint: "[extra context]"
---

Run the weekday reminder from the testchimp skill's references/bot-playbook.md (get-my-tasks). Skip the message when nothing is pending.

Fires on:
- cron `CRON_TZ=Australia/Sydney 0 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
