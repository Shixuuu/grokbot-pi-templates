# Routine: LinkedIn invite quota follow-up

> Remind to finish LinkedIn invites after monthly custom-note quota resets.

One-shot follow-up after LinkedIn monthly custom-invite limits block a Local Boots-style wave. Remind the user the quota should be reset and ask whether to finish the remaining queued connection notes (short notes under 200 characters). Honor any do-not-contact names. After reporting, delete this routine so it does not repeat.

Fires on:
- cron `CRON_TZ=America/Denver 0 9 15 10 *`

Ask the importing user for:
- Timezone
