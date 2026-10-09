# Routine: Tomorrow checklist

> Sunday through Thursday evening, send tomorrow's bring/wear/sign checklist grouped by kid.

Send tonight's "Tomorrow" checklist. Follow the family-alerts skill: for each kid, list what they need to bring, wear, or sign tomorrow, plus pickup or schedule changes. Source items only from confirmed emails, flyers, or parent notes and from the calendar events this bot created. Run conflict-check. Keep it short and scannable, grouped by kid. If setup is incomplete, ask for setup instead. Stay quiet only if there is truly nothing for tomorrow.

Fires on:
- cron `CRON_TZ=America/Toronto 3 19 * * 0-4`

Ask the importing user for:
- Timezone
