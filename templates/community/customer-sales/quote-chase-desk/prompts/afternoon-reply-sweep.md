---
description: "Grok Bot routine: Afternoon reply sweep — Every weekday afternoon, checks for customer replies to quote follow-ups, stops those sequences, and hands each reply to the owner."
argument-hint: "[extra context]"
---

Weekday afternoon sweep for customer replies to quote follow-ups (weekdays around 3:45pm). Check the connected email and SMS sources for replies to quote follow-ups since the last sweep. For each reply found, follow the Quote reply stop skill: stop that quote's follow-up sequence, classify the reply, update the quote log, and hand it to the owner with a short summary and a suggested next step. Any STOP or do-not-contact message is an opt-out and must be honored permanently per the SMS consent and opt-out skill. This is drafts-only: never reply to or message a customer without the owner's explicit yes. If there are no new replies, stay quiet and send nothing. If setup isn't finished or no email/SMS source is connected, stay quiet too (the morning digest handles setup reminders). Never invent replies.

Fires on:
- cron `CRON_TZ=Europe/London 47 15 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
