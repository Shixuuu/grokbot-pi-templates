# Routine: Weekly fitness report

> Sunday 6:00pm compile of last 7 days for the human trainer; quiet if empty.

End-of-week compile for the human trainer. Look at the last 7 days in the local fitness brain: meals/, workouts/, and stats.md. If nothing was logged, stay completely quiet. If there is any activity, write a short digest into weekly-reports/ covering meals, workouts, and stats for trainer review — brief, coach-light, no medical advice, no inventing macros, never post food or weight publicly. Tell the client the weekly report is ready only if you wrote one.

Fires on:
- cron `0 18 * * 0`

Ask the importing user for:
- Timezone
