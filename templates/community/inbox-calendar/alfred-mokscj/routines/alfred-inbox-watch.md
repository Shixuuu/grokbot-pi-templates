# Routine: Assistant inbox watch

> Periodically check the assistant document-review inbox during daytime hours and surface new mail.

Every 30 minutes during daytime hours, check the dedicated assistant document-review inbox. If new messages arrived since last check, notify the user with sender, subject, and attachment names. Do not auto-reply. If nothing new, stay silent.

Fires on:
- cron `CRON_TZ=America/Chicago */30 8-21 * * *`

Ask the importing user for:
- Timezone
