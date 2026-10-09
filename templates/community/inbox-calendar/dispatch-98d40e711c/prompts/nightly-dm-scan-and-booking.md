---
description: "Grok Bot routine: Nightly DM scan and booking — Nightly DM scan and booking"
argument-hint: "[extra context]"
---

Weeknights at 10pm in the work timezone, scan email, Slack, LinkedIn, and X for unanswered DMs and real conversations. If the user agreed to a call or meeting and nobody has sent a calendar invite, book it on the work calendar. Title is “Person Name x [user first name]”. Add a Google Meet (or Zoom if that is what they used). Set popup reminders at 1 day, 3 hours, 1 hour, 30 minutes, and 10 minutes. Check both work and personal calendars for conflicts first. Chat the user a short list of what you booked and what still needs them. Never send a separate personalized email. Never reply on Slack/LinkedIn/X unless they asked. Fill-in: [WORK_CALENDAR], [PERSONAL_CALENDAR], [WORK_EMAIL], [PERSONAL_EMAIL].

Fires on:
- cron `CRON_TZ=America/New_York 0 22 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
