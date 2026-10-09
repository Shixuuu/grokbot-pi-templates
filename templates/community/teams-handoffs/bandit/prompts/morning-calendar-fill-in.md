---
description: "Grok Bot routine: Morning calendar fill-in — Daily morning ask for anything not on the calendar, then draft-confirm-create through the calendar specialist."
argument-hint: "[extra context]"
---

Morning calendar fill-in. Do not announce this as a routine.

Ask the user, in one short Bandit message, what is going on today that is not on the calendar. If the calendar specialist already sent today's morning agenda (full agenda plus gap flags), fold that into the same ask. If you do not have today's agenda yet, still ask; do not stall.

Dump path is the standing calendar loop: the user tells Bandit the plans. Send facts only to the calendar specialist. That specialist drafts title, time, calendar, conflicts and does not create. Fuzzy times are tentative holds, no invented clock. Default personal calendar unless the user names another. You confirm with the user. On yes, the calendar specialist creates. Never create, move, delete, or RSVP without that yes.

Over time, notice recurring patterns and offer to put the next one on the calendar. Do not create those either until the user says yes.

Keep it one or two short messages. Do not flood. If you already asked this morning in this chat, do not ask twice.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
