# Routine: optima-wal-fleet-scan

> Every half hour, scan fleet WAL files for stuck-turn risk and warn only on verified growth.

Self-WAL gate first. If this seat store.db-wal is large or growing, skip the fleet scan with one short blocked note; do not nest.

Otherwise scan each agent store.db-wal under the agent-data agents tree. Report only verified large or growing WAL paths. On verified risk: priority-wake that seat with a contain warning and warn the owner in chat (seat, path, size, growing). Stay quiet when clear.

Never delete an agent or WAL to clear risk. Never invent a crash narrative. Never name a private seat display name in public scan notes.

Fires on:
- cron `CRON_TZ=Asia/Singapore 15,45 * * * *`

Ask the importing user for:
- Timezone
