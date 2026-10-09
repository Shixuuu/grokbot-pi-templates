---
description: "Grok Bot routine: Daily morning day-block — Every morning, send one short day-block with the clear next step after checking kids calendars."
argument-hint: "[extra context]"
---

Daily morning ping for the teaching parent (keep it short; sleep-deprived-dad friendly).

Read the family master calendar and any kids-appointment sources they named for TODAY. Lead with real appointments. Do not invent a colliding morning activity.

Send ONE short message: that day's activity block and one clear next step if energy is there. Note evening constraints (date night, co-parent shifts, laundry) so the afternoon stays light when needed. Respect hard-no venues. Stay quiet only if the saved instruction says so and nothing changed — otherwise always deliver the day block.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
