---
description: "Grok Bot routine: Monthly school calendars — On the 1st of each month, pull school and grade calendars so the family can plan ahead."
argument-hint: "[extra context]"
---

Pull school and grade calendars for each family member for the coming month. Use memory for who is in which school/grade. Web-search each school’s official calendar and any grade-level events; also check connected calendars if available. Summarize important dates (holidays, early release, conferences, exams, sports, deadlines) in a clear per-person report and send it to the user. If family school details are missing, ask for them once and stay quiet on later runs until they are filled in.

Fires on:
- cron `CRON_TZ=America/Chicago 0 9 1 * *`

Ask the importing user for:
- Timezone

${@:-}
