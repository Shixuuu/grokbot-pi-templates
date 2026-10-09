---
description: "Grok Bot routine: Groups Wednesday weekend — Every Wednesday morning: Sheet-only check of groups arriving that weekend."
argument-hint: "[extra context]"
---

Wednesday weekend-arrival check. Sheet-only. For groups arriving Thu–Sun this week, flag unconfirmed reservations and missing deposit/itinerary work. Draft Spanish names-only staff WhatsApp. Stay quiet if no weekend arrivals. Never send.

Fires on:
- cron `0 9 * * 3`

Ask the importing user for:
- Timezone

${@:-}
