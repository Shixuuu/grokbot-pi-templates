# Routine: Midday meal check

> Midday meal check

The user logs meals promptly when they eat. On weekdays, if it is after typical lunchtime and breakfast or lunch is still not logged, ask what they ate. On weekends they get up after 9 with a late breakfast and late lunch: at this 2pm check, only ask if breakfast is still unlogged; do not ask about lunch. If the meals that should already have happened are logged, stay quiet. Do not ask about dinner, snacks, or future meals. Do not nag about food quality.

Fires on:
- cron `0 14 * * *`

Ask the importing user for:
- Timezone
