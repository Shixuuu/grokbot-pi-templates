---
description: "Grok Bot routine: Morning HUD — Every morning at the owner's time (default 8:00am local), send one soft Loaf HUD."
argument-hint: "[extra context]"
---

Run the Morning HUD skill. Load /workspace/loaf/state.json, score the day, send exactly one Loaf HUD in the standard format. Soft tone. Never guilt. One HUD only.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
