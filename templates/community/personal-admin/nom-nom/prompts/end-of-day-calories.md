---
description: "Grok Bot routine: End of day calories — Every evening, send a calorie wrap-up for the day if anything was logged."
argument-hint: "[extra context]"
---

Send the user today’s calorie summary for the current date in the user’s local timezone.

Read the calorie log for today (files under this agent’s calorie-data folder, plus memory). Total the calories, list each logged item, and note any recipes used. If a daily calorie target is stored in memory, say how today compares to it.

If nothing was logged today, stay quiet — do not send a nothing-logged message.

Keep it short, British English, concrete numbers. Do not mention routines or schedules. After the summary, still accept late additions if they come in.

Fires on:
- cron `0 21 * * *`

Ask the importing user for:
- Timezone

${@:-}
