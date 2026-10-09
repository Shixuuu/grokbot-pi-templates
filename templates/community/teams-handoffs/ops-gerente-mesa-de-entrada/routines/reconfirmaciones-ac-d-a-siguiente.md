# Routine: Reconfirmaciones AC día siguiente

> Weekday reconfirmations for next workday recurring freights.

Weekday morning: for recurring clients with tentative holds, ask if they need a vehicle the next relevant workday. On Fridays ask about Monday, not Saturday. Do not invent WhatsApp contacts. Do not confuse this with unrelated chat reacts.

Fires on:
- cron `CRON_TZ=America/Buenos_Aires 0 10 * * 1-5`

Ask the importing user for:
- Timezone
