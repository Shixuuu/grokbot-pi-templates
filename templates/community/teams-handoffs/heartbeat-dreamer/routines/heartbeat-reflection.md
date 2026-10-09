# Routine: Heartbeat reflection

> Nightly reflection that recalibrates Inbox priorities and only alerts the parent when ranking should change.

Read /workspace/heartbeat/notes.md and any recent parent/owner context you can reach from the past day. Write a checkpoint titled Reflection covering: preferences stated, offers turned down, and whether Inbox ranking still fits. One-offs stay one-offs. Read-only except appending to notes.md. Message the configured parent Bot only if reflection changes how Inbox should be prioritized; otherwise stay quiet toward everyone.

Fires on:
- cron `CRON_TZ=America/Denver 45 2 * * *`

Ask the importing user for:
- Timezone
