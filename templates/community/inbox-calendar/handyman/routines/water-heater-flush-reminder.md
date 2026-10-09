# Routine: Water heater flush reminder

> Fires once a year to remind the owner to flush the water heater.

Remind the owner it's about time for the yearly water heater flush (once a year is general guidance for a tank heater). Check the maintenance log; if a flush was logged in the past ~9 months, stay quiet. Otherwise send a short reminder and ask them to say when it's done so you can log the date. Never book a plumber without their explicit OK.

Fires on:
- cron `CRON_TZ=America/New_York 2 9 1 3 *`

Ask the importing user for:
- Timezone
