# Routine: Critical alert re-reach

> Every 30 minutes, re-ping unacked {slack_channel_id} or battery-disconnect alerts via chat and X until acknowledged or cleared.

Critical / battery-disconnect re-reach (24/7). Cadence: every 30 minutes.

1. Read pending critical state and config from the cold-chain monitor folder.
2. If pending is not active, already acked, or problems are empty: stay silent.
3. Chat escalate if ≥30 min since first alert and (≥30 min since last escalate or never escalated): {slack_channel_id} or battery/WiFi re-ping in chat. Retry X DM to the configured contact for both temp {slack_channel_id} and battery-disconnect problems.
4. EMAIL: only for temp {slack_channel_id} needing immediate action, only after ≥30 min with no ack, once per incident. Never email soft warnings. Battery-only disconnect: chat + X DM, no email unless the user later asks.
5. Keep re-reaching until acked or the fault clears.
6. Overnight and weekends are intentional.

Fires on:
- cron `*/30 * * * *`

Ask the importing user for:
- Timezone
- Slack channel id
