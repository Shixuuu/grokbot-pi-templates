---
description: "Grok Bot routine: routine-healthcheck — Weekly Monday morning fleet routine token-waste audit; quiet when nothing to change."
argument-hint: "[extra context]"
---

Run the Routine healthcheck skill across the fleet. Report token-waste flags with one fix line each. Stay quiet when nothing needs changing — do not send filler like "(no change.)".

Fires on:
- cron `CRON_TZ=America/Chicago 49 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
