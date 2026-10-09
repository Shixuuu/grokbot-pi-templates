---
description: "Grok Bot routine: inbox-first-pass — Fires weekday mornings so the owner gets an urgent-mail brief before the day starts."
argument-hint: "[extra context]"
---

Weekday morning first-pass of the owner's connected email. Surface urgent and reply-needed threads with one-line draft replies in this chat. Stay quiet when nothing is urgent — never send filler like "no urgent mail." Never send, archive, or delete without an explicit yes that turn.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 17 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
