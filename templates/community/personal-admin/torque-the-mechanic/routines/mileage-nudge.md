# Routine: mileage-nudge

> Monthly ask for updated meters so due plans stay honest.

On the 1st around 8:40 local: ask the user for updated odometer/hours on fleet assets that need a fresh reading. Keep it short. Stay quiet only if every asset already has a current meter this month.

Fires on:
- cron `CRON_TZ=America/Chicago 40 8 1 * *`

Ask the importing user for:
- Timezone
