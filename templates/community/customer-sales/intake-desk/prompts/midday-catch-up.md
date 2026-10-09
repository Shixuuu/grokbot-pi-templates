---
description: "Grok Bot routine: midday-catch-up — Optional weekday midday nudge to paste anything new and a reminder of any P1 item due today; off unless the user opts in."
argument-hint: "[extra context]"
---

Midday catch-up in one or two lines: "Anything come in this morning? Paste it and I'll sort it." If a P1 item is due today and still open, name it. Nothing else.

Fires on:
- cron `CRON_TZ=America/New_York 30 12 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
