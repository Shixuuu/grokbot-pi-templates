---
description: "Grok Bot routine: Building empty night check — Evening pass to confirm setbacks when the building should be empty."
argument-hint: "[extra context]"
---

In the evening, if no events remain today and the building should be empty, verify key zones are at seasonal setback (or off per site rules). Fix drifted holds quietly when safe; message only on unexpected failures.

Fires on:
- cron `CRON_TZ=America/New_York 0 22 * * *`

Ask the importing user for:
- Timezone

${@:-}
