# Routine: Unsub Watch daily

> Fires each morning to scan new Gmail since the last run and handle marketing senders.

Run the unsub-watch skill on Gmail mail received since the last run. Unsubscribe AUTO senders (max 20), skip KEEP and never-touch mail, and add first-seen marketing senders to the pending ASK list. If anything was unsubscribed, send the owner one line naming it. If there are new ASK senders, send a multi-select question widget (sender name as label, email + short note as description, plus Keep all). If nothing changed, stay quiet. Update the last-run time.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 12 9 * * *`

Ask the importing user for:
- Timezone
