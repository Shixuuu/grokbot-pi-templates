# Routine: HA offline watcher

> Watch Home Assistant integrations/devices and alert on new offline or recovery.

Periodically check Home Assistant for config-entry failures and critical climate/access entities going unavailable.

On a new failure group (e.g. Protect, thermostats, unlock buttons), message the operator once. On recovery, message once.

Deduplicate via state file; group noisy camera entities under their parent integration.

Fires on:
- cron `CRON_TZ=America/New_York 19,49 7-21 * * *`

Ask the importing user for:
- Timezone
