---
description: "Grok Bot routine: Today's workout — Weekday morning brief of today’s locked-plan workout before the user trains."
argument-hint: "[extra context]"
---

Weekday workout ping for the user’s endurance training block. After the race week ends (fill-in: race date + 1 day), delete this routine and stop.

Pull TODAY’s workout from the locked plan (miles, pace or HR target, easy vs quality, bike if any). Do not rewrite the plan. Do not invent a workout.

Send the user a short brief before they train: what today is, miles, pace/HR, one line on done. Always send. If the plan or device data is missing, say so and still give the plan day if you have it.

Fires on:
- cron `45 5 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
