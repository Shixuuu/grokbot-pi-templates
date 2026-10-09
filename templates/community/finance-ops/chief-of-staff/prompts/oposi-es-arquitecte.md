---
description: "Grok Bot routine: Architecture job deadlines — Weekday check for architecture public-job deadlines; alert only on news."
argument-hint: "[extra context]"
---

On weekdays, watch for new or changed public-sector architecture career (A1 / senior) job competitions and related language-certificate exam windows in your region. Do not apply or submit anything. If something new or a deadline change appears, tell the user: what, where, open/close dates, and URL. If nothing changed, stay silent. Keep a short internal list of already-alerted calls and only re-report on status change.

Fires on:
- cron `39 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
