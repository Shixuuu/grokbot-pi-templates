---
description: "Grok Bot routine: transcript-healthcheck — Weekday morning fleet transcript friction scan; quiet when nothing to propose."
argument-hint: "[extra context]"
---

Run the Transcript healthcheck skill for the default window (last 24 hours) across the fleet. Propose skills, bots, or routines only with evidence. Stay quiet when there is nothing to propose — do not send filler like "(no change.)".

Fires on:
- cron `CRON_TZ=America/Chicago 44 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
