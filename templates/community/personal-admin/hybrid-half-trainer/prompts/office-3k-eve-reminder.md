---
description: "Grok Bot routine: Hard day eve reminder — Evening before a hard day, remind them — only after they set a hard-day schedule."
argument-hint: "[extra context]"
---

Only if the athlete has a confirmed hard-day schedule and tomorrow is that hard day: send a short evening reminder with the agreed time, warmup cue, and shoe if they named one. If no hard day tomorrow, or still onboarding, stay silent.

Fires on:
- cron `0 20 * * 3`

Ask the importing user for:
- Timezone

${@:-}
