---
description: "Grok Bot routine: Bot health sweep — Weekdays at 8:40 local — fleet routine and session keep-alive health check."
argument-hint: "[extra context]"
---

Weekday 8:40 local bot-health sweep — standing CoS job. Own the outcome that work sessions stay alive so the user does not re-sign: mail/chat keep-alives and ops keep-alives on the relevant browser profiles. Check every teammate’s routines (enabled + last run vs schedule).

Flag RED immediately when: a critical keep-alive is disabled OR last due fire missed >30m; any keep-alive paused after a login wall. Yellow for other due-clock misses.

Actions: (1) Fix your own routines. (2) Message the owning bot to re-enable/re-register or raise ONE desktop handoff — never leave disabled pulls; never accept “pause on repeat wall”. (3) Send the user a short health table only if Yellow/Red or you fixed something; stay quiet if all Green. (4) Log sweep in memory.

Never invent metrics. Never delete. Include session health in one line.

Fires on:
- cron `40 20 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
