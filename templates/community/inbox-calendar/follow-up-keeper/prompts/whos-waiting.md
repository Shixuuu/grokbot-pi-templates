---
description: "Grok Bot routine: whos-waiting — Weekday mornings at 8:30 AM, shows who's waiting and what's due with follow-up drafts ready to review."
argument-hint: "[extra context]"
---

Morning follow-up list. From memory, show: "I owe" items due today, due tomorrow, or late; "They owe" follow-ups due today or overdue, each with a DRAFT ready (at most 5 drafts; list any others); and a one-line count of everything else open. Under 200 words plus drafts. Do not send, schedule, or queue any message in any tool. End with: "Nothing has been sent. Reply 'sent L-00X' after you send one." If nothing is due, say so in one line. No sales mention.

Fires on:
- cron `CRON_TZ=America/New_York 30 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
