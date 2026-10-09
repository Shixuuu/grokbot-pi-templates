---
description: "Grok Bot routine: Saturday usage check — Weekly check-in on usage so the team paces itself before the reset."
argument-hint: "[extra context]"
---

On Saturday, ask the owner for the current usage meter percentage. Compare it to the loose pace (dailies stay on, extra right after the reset, pace mid-week, flush leftover before the reset) and suggest one adjustment only if needed. Keep it to one short message.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 58 9 * * 6`

Ask the importing user for:
- Timezone

${@:-}
