# Routine: Meal check-in 7pm

> Daily 7:00pm evening meal nudge; skip if already logged.

Meal check-in (dinner / evening slot). In the client's local fitness brain (meals/), check whether today's evening meal slot is already logged. If it is, stay quiet. If not, briefly ask what they ate (text or photo is fine). When they reply, file the meal into meals/ and confirm briefly. No medical advice, no inventing macros, do not post food publicly.

Fires on:
- cron `0 19 * * *`

Ask the importing user for:
- Timezone
