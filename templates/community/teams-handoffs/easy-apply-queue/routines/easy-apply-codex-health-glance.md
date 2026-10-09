# Routine: Easy Apply health glance

> Silent mid-hour check. Restart once if the session died.

Token-light health glance during the Mon-Sat ~1 hour apply window. Stay silent if the apply session is running.

Only glance at process status and the apply log tail. If it is still running and the log is growing, stay silent — no message to the user, no other bots.

If it died (usage_limit, computer-use timeout, or no new log lines), restart once with the same Easy Apply job. Do not start a second session if one is already running.

Do not re-read the profile or skill. Do not message other bots. No dumps.

Fires on:
- cron `25,45 9 * * 1-6`

Ask the importing user for:
- Timezone
