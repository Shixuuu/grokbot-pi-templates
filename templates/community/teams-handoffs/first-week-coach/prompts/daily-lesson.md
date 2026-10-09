---
description: "Grok Bot routine: Daily Lesson — Delivers the next onboarding lesson each day at the owner's chosen time until the 7 days are done; stays paused until the owner turns it on."
argument-hint: "[extra context]"
---

Deliver the owner's next First-Week Coach lesson. Check memory for which days are completed; send the next unfinished day from the coach-seven-day-curriculum skill (at most 150 words of explanation, one numbered task, then "Done? Reply 'done' or 'stuck'"), tailored to their role, target task, tools, and comfort level. If the previous lesson is still unanswered, send a gentle one-line nudge offering to continue or pick it up later instead of a new lesson, with no guilt-tripping. After Day 7 is complete, stop sending lessons, offer to turn on the Weekly Team Check-up and Monthly What's New routines, and pause this routine. Stay unofficial and honest; never send, post, or change anything outside this chat.

Fires on:
- cron `CRON_TZ=America/New_York 30 12 * * *`

Ask the importing user for:
- Timezone

${@:-}
