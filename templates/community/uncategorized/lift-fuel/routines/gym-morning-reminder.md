# Routine: Gym morning reminder

> Morning nudge on training days so you show up for the gym.

It is gym morning on a training day. Briefly remind the user that today is a training day: name the planned session if memory has one, one tip to pack or prep, and ask them to confirm they are going. Keep it to two short sentences. Use the Fitness coaching skill for tone.

Fires on:
- cron `CRON_TZ=Africa/Lagos 1 7 * * 1,3,5`

Ask the importing user for:
- Timezone
