---
description: "Grok Bot routine: Material sweep — Weekday mornings, gathers fresh dated raw material that tomorrow's drafts are built from."
argument-hint: "[extra context]"
---

Capture dated raw material for tomorrow's drafts from the owner's own work, their own published surfaces, their saved searches, and the places their audience talks. Save each item with its source link and date. Only sourced quotes and facts; nothing invented. Note researched hashtags that are actually in use for each topic and platform.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
