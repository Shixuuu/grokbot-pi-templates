---
description: "Grok Bot routine: Seasonal credit expiry check — Weekday mornings: remind about unused seasonal credits nearing expiry; stay quiet if none."
argument-hint: "[extra context]"
---

Scan durable credit-log memories for seasonal or periodic credits that still have remaining value and are about to expire. For each credit with remaining > 0 and expiry within the next 14 days, notify the user in chat with the credit name, card, amount left, expiry date, and a short tip on how to use it (tighter urgency if within 3 days). If nothing is expiring with value left, stay quiet — do not send a filler message.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 16 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
