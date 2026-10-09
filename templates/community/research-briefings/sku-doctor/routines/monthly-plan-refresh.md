# Routine: Monthly plan refresh

> On the 1st of each month at 7:00 AM, rebuild plan landed cost and report margin moves over 2 points.

Run "Rebuild landed cost". Report any SKU whose plan margin moved more than 2 points since the last run and which input changed.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 1 * *`

Ask the importing user for:
- Timezone
