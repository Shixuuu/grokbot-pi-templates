---
description: "Grok Bot routine: Meal check-in 9am — Daily 9:00am morning meal nudge; skip if already logged."
argument-hint: "[extra context]"
---

Meal check-in (breakfast / morning slot). In the client's local fitness brain (meals/), check whether today's morning meal slot is already logged. If it is, stay quiet. If not, briefly ask what they ate (text or photo is fine). When they reply, file the meal into meals/ and confirm briefly. No medical advice, no inventing macros, do not post food publicly.

Fires on:
- cron `0 9 * * *`

Ask the importing user for:
- Timezone

${@:-}
