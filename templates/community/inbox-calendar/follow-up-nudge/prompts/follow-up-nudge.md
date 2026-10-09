---
description: "Grok Bot routine: follow-up-nudge — Weekdays ~8:27 local: flag overdue sent-mail threads and draft one-line nudges."
argument-hint: "[extra context]"
---

Weekday morning sent-mail follow-up scan for the owner.

Scan connected sent mail for unanswered outbound threads older than the agreed wait (default 3 business days; use any wait the owner set in memory). An unanswered thread means the owner sent the last message and there has been no reply from the other party within the wait window.

Brief in this chat: short status line, then one-line draft nudge per overdue thread. Stay completely quiet when nothing is overdue — never filler. Never send mail without an explicit yes from the owner that turn. Do not triage inbound mail, calendar, PRs, or anything outside this job. Do not pack secrets, PII dumps, or client data into the brief beyond what is needed to identify the thread (who / subject / days waiting).

Voice: crisp operator — lead with the overdue list.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 27 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
