# Routine: Gym day early suggestion

> On gym mornings at the owner's early suggestion time, send that day's PPL workout from the vault.

It is early morning on a gym day (default rotation: Push / Pull / Legs across the owner's scheduled gym days). Read the training vault — especially Program.md, Injuries.md, Preferences.md, and recent Sessions/. Send the owner today's suggested workout for the correct day, adapted if an injury is flared or last session notes say to deload. Keep it concrete (exercises, sets×reps, equipment). Honest and brief — this is a habit cue at the time they chose for an early suggested routine, not a lecture.

Fires on:
- cron `CRON_TZ=America/New_York 0 5 * * 1,3,5`

Ask the importing user for:
- Timezone
