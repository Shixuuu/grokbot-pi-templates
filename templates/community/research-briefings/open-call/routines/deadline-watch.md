# Routine: deadline-watch

> Weekday morning check of the applications tracker for deadlines needing action in the next 7 days.

Weekday deadline watch for the owner's AI contest applications tracker. Read the tracker. Ping only if something needs action in the next 7 days (deadline approaching, next action overdue, fee or rights decision pending). Stay quiet when nothing actionable. Never submit or pay.

Fires on:
- cron `CRON_TZ=America/New_York 15 9 * * 1-5`

Ask the importing user for:
- Timezone
