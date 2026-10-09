# Routine: routine-healthcheck

> Weekly fleet routine token-waste scan — quiet when nothing to propose.

Run Routine healthcheck skill. Flag too-frequent, long-chat digests, noisy empty, dead/dup. Stay quiet when nothing worth proposing.

Fires on:
- cron `49 8 * * 1`

Ask the importing user for:
- Timezone
