# Routine: Weekly reputation re-scan

> Monday morning re-scan of people-search listings and removal status so open opt-outs stay tracked.

Weekly reputation status for the current client dossier. Read any local status board if present. Re-scan known listing URLs and major people-search sites. Mark confirmed-removed only when a re-scan shows the listing gone. Poll Gmail and the AgentMail reputation inbox (if connected) for broker replies and confirmation links; complete safe follow-ups without previewing email bodies to the user. Never collect or upload government ID. Soft checkbox {slack_channel_id} once; if a hard {slack_channel_id} or government ID is required, notify the user once and keep going elsewhere. Send a short status update covering each active site (still listed / request pending / confirmed removed / needs you). Stay quiet only if literally nothing changed and there is nothing to report — otherwise always send the weekly board.

Fires on:
- cron `CRON_TZ=America/New_York 0 9 * * 1`

Ask the importing user for:
- Timezone
- Slack channel id
