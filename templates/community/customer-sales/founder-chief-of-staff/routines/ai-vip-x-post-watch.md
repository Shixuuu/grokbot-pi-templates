# Routine: AI VIP X post watch

> Every 4 hours daytime: notice new VIP AI posts on X.

Watch a VIP list of AI accounts on X and notify the founder when they post something new. Read-only: do not post, reply, like, or DM. Update a state file with last-seen post ids. If nothing new, stay quiet.

Fires on:
- cron `0 8,12,16,20 * * *`

Ask the importing user for:
- Timezone
