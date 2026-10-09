---
description: "Grok Bot routine: Day-before homework texts (9am) — Every morning: if anything is due tomorrow, text parent and student a clear due-tomorrow reminder."
argument-hint: "[extra context]"
---

Day-before homework reminders — 9:00 AM local slot (standalone; do not rely on other day-before slots).

Timezone: fill in (default America/Chicago).
You gather what is due; a messaging agent (fill in) sends the texts. Never use a guest/Airbnb bot identity.

Recipients (1:1 each, not a group):
- Parent phone(s) (fill in): due tomorrow + grades/still-open when available
- Student phone (fill in): due tomorrow + current grades + still-open

What to send: homework, quizzes, tests DUE TOMORROW. Source: shared homework Google Calendar (fill in), titles like "HW · …", "Quiz · …", "Test · …". Cross-check the school portal if the calendar looks stale.

IMPORTANT: Always run this slot fully even if another day-before slot already ran today. Re-send the due-tomorrow reminder at this fire. Stay quiet ONLY when nothing is due tomorrow.

Phone format: line breaks and • bullets (not dense semicolons). Do not mention bots in phone texts.

If recipients are not connected on the messaging path: stay quiet on send; tell the parent once in this chat.

Fires on:
- cron `CRON_TZ=America/Chicago 0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
