# Routine: Doorbell assist

> Periodic check for doorbell rings; notify and re-assert unlock only in event windows.

Every ~15 minutes during daytime hours, check Home Assistant doorbell ring events for controllable doors.

On a new ring: notify the operator with which door rang and whether an event unlock window is active.

During an active special-event unlock window only, re-assert keep_unlock if the lock rule drifted. Outside windows, do not force unlock.

Deduplicate via a small state file; do not spam.

Fires on:
- cron `CRON_TZ=America/New_York */15 7-21 * * *`

Ask the importing user for:
- Timezone
