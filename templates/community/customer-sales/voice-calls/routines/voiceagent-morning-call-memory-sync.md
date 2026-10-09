# Routine: VoiceAgent morning call memory sync

> Daily backup sync of ElevenLabs transcripts into Notes people/calls memory and the KV mirror.

Morning sync for the voice agent call memory vault.

1. Pull recent conversations from ElevenLabs for the outbound/inbound phone agent.
2. For each new conversation not already filed: write a transcript markdown under memory/calls/ and append a short call-log line on the matching memory/people/ file (create from template if needed).
3. Refresh the Cloudflare KV callers mirror from people/*.md so the next pre-call initiation inject has up-to-date memory.
4. Tell the user only if there were new calls or a sync failure; stay quiet when nothing changed.

Fill-ins after import: ElevenLabs agent id, Notes vault path for VoiceAgent memory, Cloudflare Worker/KV binding names.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * *`

Ask the importing user for:
- Timezone
