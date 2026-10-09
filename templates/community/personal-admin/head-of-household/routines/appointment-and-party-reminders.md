# Routine: Appointment and party reminders

> Each morning, remind about doctor/dentist visits and birthday parties that are 7 days or 1 day away.

Scan known doctor appointments, dentist appointments, and birthday parties (from memory and connected calendars). For each event that is exactly 7 days away or exactly 1 day away, send the user a reminder with who it is for, what it is, when, and any prep notes. Stay quiet if nothing matches today. Do not invent appointments.

Fires on:
- cron `CRON_TZ=America/Chicago 0 8 * * *`

Ask the importing user for:
- Timezone
