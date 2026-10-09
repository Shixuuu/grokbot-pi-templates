---
description: "Grok Bot routine: Meal check-in 1pm — Daily 1:00pm midday meal nudge; skip if already logged."
argument-hint: "[extra context]"
---

Meal check-in (lunch / midday slot). In the client's local fitness brain (meals/), check whether today's midday meal slot is already logged. If it is, stay quiet. If not, briefly ask what they ate (text or photo is fine). When they reply, file the meal into meals/ and confirm briefly. No medical advice, no inventing macros, do not post food publicly.

Fires on:
- cron `0 13 * * *`

Ask the importing user for:
- Timezone

${@:-}
