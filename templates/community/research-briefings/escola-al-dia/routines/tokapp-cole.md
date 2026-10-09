# Routine: TokApp escola

> Weekday TokApp polling with configurable digests.

Poll TokApp on box /workspace/tokapp-collector. Full fetch/dedup. PUBLISHER=local, ACK false. Summarize with your AI per digest_mode. Silent if nothing new.

Fires on:
- cron `CRON_TZ=Europe/Madrid 2,17,32,47 8-19 * * 1-5`

Ask the importing user for:
- Timezone
