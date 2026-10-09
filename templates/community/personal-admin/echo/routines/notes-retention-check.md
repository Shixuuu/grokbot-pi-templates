# Routine: Notes retention check

> Weekly check: archive or list old notes per the owner's retention policy.

Read the notes retention policy. If archive and delete windows are unset, stay quiet (default: never auto-delete). If archive days are set, move eligible notes into archive and mention the count briefly. If delete days are set, list candidates and get the owner's confirm before deleting — never delete without that yes.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 46 9 * * 1`

Ask the importing user for:
- Timezone
