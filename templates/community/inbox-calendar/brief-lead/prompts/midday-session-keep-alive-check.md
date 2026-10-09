---
description: "Grok Bot routine: Midday session keep-alive check — Weekdays at noon local — verify session keep-alives are enabled and fresh."
argument-hint: "[extra context]"
---

Weekday noon local CoS session uptime check — own the outcome that the user does not re-sign. Verify enabled + fresh last run for mail/chat and ops keep-alives. If any missing/disabled/missed >30m or auth wall paused: message the owner to re-arm / one desktop handoff NOW; send the user a one-line Red only if a handoff is needed or a keep-alive is still down. Stay quiet if all Green. Never delete. Never invent.

Fires on:
- cron `0 12 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
