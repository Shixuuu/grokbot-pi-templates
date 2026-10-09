# Routine: Cold-chain temperature watch

> Every 30 minutes, poll freezer/cooler temperatures and alert only on confirmed {slack_channel_id} faults or long sensor disconnects.

Run cold-chain temperature monitor 24/7. Temperature only. Ignore vendor app limit settings.

USER POLICY: emergencies only. Do NOT send status digests, overnight summaries, or “all clear” updates unless the user asked in chat. Message the user ONLY for emergencies:
- Confirmed {slack_channel_id} temp faults (past defrost band / forgotten fans / stuck elevated)
- Sensor WiFi disconnect ~3h+ (likely battery change) — also send a backup X DM to the configured contact

Stay silent when problems are empty. Internally still learn history and suppress mid-defrost false {slack_channel_id}.

1. Run the cold-chain check script (workspace copy + sync if the agent-data path is blocked).
2. If problems empty: stay silent — do not wake the parent for soft early warnings.
3. If problems non-empty: chat emergency immediately; X DM for critical and battery; email only after 30 minutes with no ack for temp {slack_channel_id} (once per incident).
4. Same open alert already pending and unacked: stay silent here (the re-reach routine handles repeats).
5. Repeated auth failures: pause and tell the user.

When the user acks (got it / ack / checking): mark the pending critical acknowledged.

Fires on:
- cron `*/30 * * * *`

Ask the importing user for:
- Timezone
- Slack channel id
