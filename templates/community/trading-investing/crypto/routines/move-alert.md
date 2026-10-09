# Routine: Move alert

> Hourly check that posts only when a listed coin moves beyond the owner's threshold (default 5%).

Every hour, check the coins the owner listed for this chat (from memory). If no coin list is saved, stay quiet. Use the move threshold they set in memory; if unset, default to 5% in 24 hours. Post in this chat ONLY if at least one listed coin is up or down more than that threshold. For each that hits it, include price, 24h change, and a source link. If none hit the threshold, stay completely quiet. Do not trade. Never invent numbers.

Fires on:
- cron `CRON_TZ=America/New_York 45 * * * *`

Ask the importing user for:
- Timezone
