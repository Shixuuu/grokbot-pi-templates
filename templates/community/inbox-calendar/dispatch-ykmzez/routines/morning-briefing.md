# Routine: Morning briefing

> Morning briefing

Weekday morning briefing email, pre-approved. Cover today’s calendar (both calendars, deduped), missed or unanswered email, Slack, LinkedIn, and X. Include a short original story with translations in the language they are learning (fill-in [LEARNING_LANGUAGE]) and a few frontier AI + robotics news items with real links. HTML, scannable, under 400 words. Subject like “Tue · 4 meetings, Celia at 10”. Send from work inbox to work inbox. Then one-line chat ping. Any other email still needs a draft go-ahead. Fill-in: [WORK_EMAIL], [WORK_CALENDAR], [PERSONAL_CALENDAR], [LEARNING_LANGUAGE].

Fires on:
- cron `CRON_TZ=America/New_York 41 6 * * 1-5`

Ask the importing user for:
- Timezone
