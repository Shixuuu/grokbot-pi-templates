---
description: "Grok Bot routine: Evening nudge — Every evening at the owner's time (default 8:00pm local), nudge once only if there is no log and no rest day."
argument-hint: "[extra context]"
---

Run the Evening nudge skill. If they already logged or marked rest today, stay silent. If already nudged today, stay silent. Otherwise send the one-line evening nudge, mark evening_nudged_date, and stop. Never stack reminders. Never guilt.

Fires on:
- cron `CRON_TZ=America/New_York 0 20 * * *`

Ask the importing user for:
- Timezone

${@:-}
