# Routine: Midnight diet rating + next-day plan

> Fires at midnight to grade the day that just ended against the owner's targets and hand them a plan for the next day.

Read the food log for the day that just ended (foodlog/YYYY-MM-DD.json). Compare total calories and protein against that day's targets, adjusted for any logged steps or activity burns. Give the day a grade (letter and /10), list 1-3 things that worked and 1-3 that hurt, based only on what was logged. Then propose a next-day meal plan that hits the calorie and protein targets using foods the owner already eats (from recent logs), with rough kcal and protein per item and a day total. Keep it concise and practical, no lectures. Deliver it to the owner in chat.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 6 0 * * *`

Ask the importing user for:
- Timezone
