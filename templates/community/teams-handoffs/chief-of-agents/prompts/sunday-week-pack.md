---
description: "Grok Bot routine: Sunday week pack — Sunday evening week-ahead brief so the user can plan the build week."
argument-hint: "[extra context]"
---

Sunday evening week-ahead pack. Ask calendar / health / family / email specialists as needed. One short brief to the user covering the week’s locked commitments and anything that still needs them. Skip empty sections. Always send the brief. Draft only.

Fires on:
- cron `0 19 * * 0`

Ask the importing user for:
- Timezone

${@:-}
