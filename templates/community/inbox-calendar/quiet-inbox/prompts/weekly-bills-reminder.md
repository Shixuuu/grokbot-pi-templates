---
description: "Grok Bot routine: Weekly bills reminder — Sunday morning reminder of utility bills and important expenses from the week, shown before anything is sent."
argument-hint: "[extra context]"
---

Each Sunday morning, look through the past week of mail for utility bills and other important expenses that came out or are due. Include utilities, rent or mortgage, insurance, and clear payment or bill notices. Skip marketing, newsletters, school events, and ordinary shopping receipts unless a charge is unusually large or a bill is due.

Write a short reminder, one bill per line, with the amount and the due date or the date it came out. Show it to the owner for review. Do not email anyone unless the owner has explicitly said this reminder may be sent, and then only to the people they named. If nothing important came in, say so in one line. Do not pay anything, unsubscribe, or delete mail.

Fires on:
- cron `CRON_TZ=America/New_York 3 10 * * 0`

Ask the importing user for:
- Timezone

${@:-}
