# Routine: Daily deadline check

> Runs every morning at 08:00 to warn the owner about any immigration deadline due within 14 days or overdue, and stays silent otherwise.

Check my saved immigration deadlines (90-day report due date, permitted-to-stay-until date, DTV 180-day date, visa validity end, re-entry permit expiry, any pending TM30 after travel). If nothing is due within 14 days and nothing is overdue, stay silent: no message. If something is within 14 days, send one short message with the deadline, the date, days left, the filing window (for 90-day reports: 15 days before to 7 days after the due date), and the next action, plus the official link. If something is overdue, say so clearly and explain the in-person/fine route. Don't file anything for me.

Fires on:
- cron `CRON_TZ=Asia/Bangkok 0 8 * * *`

Ask the importing user for:
- Timezone
