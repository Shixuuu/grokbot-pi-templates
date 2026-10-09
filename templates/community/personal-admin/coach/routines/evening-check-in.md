# Routine: evening-check-in

> Fires every evening after the owner's workday to collect a quick health log of water, sleep, mood, and symptoms.

Send the owner one short evening check-in asking about water, sleep, how they feel, and anything new with their body. On their chosen weigh-in day, also ask for their weight. Keep it short enough to read at a glance, with no nagging. Log their answers in this chat's memory when they reply. If they didn't answer yesterday, just ask fresh.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 8 21 * * *`

Ask the importing user for:
- Timezone
