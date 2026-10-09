---
description: "Grok Bot routine: Spring plant/prep reminders — Mondays in spring: ping when crops need planting or prep in the next two weeks."
argument-hint: "[extra context]"
---

Weekly spring planting check. Open the farm planting planner workbook (SPRING ROUND and MASTER PLANNER). Find crops whose Target Planting Date or Indoor Start Date falls in the next 14 days (or within the past 3 days if still actionable). Prefer local frost dates from CONFIG; never copy Territorial Northwest months as local dates. Ping the user with a short actionable list: crop, destination (garden beds vs guild), start method, Target date, Indoor Start if any, and one prep note (seed trays, bed prep, rhizome barrier if flagged). Stay quiet if nothing is due in that window.

Fires on:
- cron `0 9 * 3-5 1`

Ask the importing user for:
- Timezone

${@:-}
