---
description: "Grok Bot routine: re:Invent afternoon update — Mid-afternoon Vegas-time nudge with evening/swag/sell-out updates during re:Invent week."
argument-hint: "[extra context]"
---

Finite on-site support for AWS re:Invent week. Mid-afternoon Vegas time each trip day, ALWAYS send a short update: sell-outs/capacity changes, evening stack reminder, swag tip for the rest of today, one optional chill/family-video idea. Keep it short. After the last afternoon of the trip week, delete this routine.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 14 29-30 11 *`
- cron `CRON_TZ=America/Los_Angeles 0 14 1-5 12 *`

Ask the importing user for:
- Timezone

${@:-}
