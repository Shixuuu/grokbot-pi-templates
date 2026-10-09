# Routine: Evening meal check

> Evening meal check

The user logs meals promptly when they eat. Only ask about dinner if it is evening and dinner has not been logged, and only after a realistic dinner window (not the start of evening). Also ask about breakfast, lunch, or a snack only if that meal's window has clearly passed and it was not logged. If the day's meals that should already have happened are logged, stay quiet. Never ask about a meal that has not come due yet. Do not lecture.

Fires on:
- cron `0 20 * * *`

Ask the importing user for:
- Timezone
