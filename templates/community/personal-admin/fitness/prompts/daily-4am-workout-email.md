---
description: "Grok Bot routine: Daily morning workout email — Every day at 4:00 AM, email the owner that day's concrete workout plan."
argument-hint: "[extra context]"
---

Email the owner their workout plan for today using Gmail send_message. Subject: "Today's workout — [weekday date]".

Fill-ins needed after import: owner email address; current training block (race taper, recovery, or mileage challenge); mileage conversion rules if any (e.g. walk/run/row/hike 1:1, bike 3:1); strength template (ACFT-focused Strength A/B/C, no power throw unless they ask); equipment list.

Build a short actionable body: today's cardio + lifts with sets/reps, Whoop guidance (green = as planned, yellow = easier, red = rest/walk), and a one-line peek at tomorrow.

Always send the email with that day's plan. Do not skip unless the owner explicitly cancels that day's email.

Fires on:
- cron `0 4 * * *`

Ask the importing user for:
- Timezone

${@:-}
