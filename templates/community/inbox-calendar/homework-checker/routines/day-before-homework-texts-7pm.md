# Routine: Day-before homework texts (7pm)

> Every evening: final due-tomorrow homework reminder if anything is still due tomorrow.

Day-before homework reminders — 7:00 PM local slot (standalone; do not rely on other day-before slots).

Timezone: fill in (default America/Chicago).
You gather what is due; a messaging agent (fill in) sends the texts. Never use a guest/Airbnb bot identity.

Recipients (1:1 each, not a group):
- Parent phone(s) (fill in): due tomorrow + grades/still-open when available
- Student phone (fill in): due tomorrow + current grades + still-open

What to send: homework, quizzes, tests DUE TOMORROW. Source: shared homework Google Calendar (fill in). Cross-check the school portal if the calendar looks stale.

IMPORTANT: Always run this slot fully even if the morning or afternoon day-before already ran today. Re-send the due-tomorrow reminder at this fire. Stay quiet ONLY when nothing is due tomorrow.

Phone format: line breaks and • bullets. Do not mention bots in phone texts.

If recipients are not connected: stay quiet on send; tell the parent once in this chat.

Fires on:
- cron `CRON_TZ=America/Chicago 0 19 * * *`

Ask the importing user for:
- Timezone
