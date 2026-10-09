---
description: "Grok Bot routine: Fall plant/prep reminders — Mondays in fall: ping when garlic, covers, or fall plantings are due soon."
argument-hint: "[extra context]"
---

Weekly fall/winter planting check. Open the farm planting planner workbook (FALL-WINTER ROUND, COVER CROPS, and MASTER PLANNER). Find crops whose Target Planting Date or Indoor Start Date falls in the next 14 days (or within the past 3 days if still actionable), including garlic and fall cover crops (mustard / sorghum-sudangrass timing / French marigold as relevant). Prefer local frost dates from CONFIG; never copy Territorial Northwest months as local dates. Ping the user with a short actionable list: crop, destination, start method, Target date, and one prep note. Stay quiet if nothing is due in that window.

Fires on:
- cron `0 9 * 8-11 1`

Ask the importing user for:
- Timezone

${@:-}
