---
name: clear-bot-chats
description: "Use this when wiping one or more Grok Bot chat histories (transcript entries, conversation blobs, and transcript jsonl) while keeping profile, memory, routines, and settings."
---

# Clear bot chats

Wipe chat history for one agent id, several ids, or every agent under `/home/box/agent-data/agents/`.

## Keep (never delete)
- `profile.json`, `settings.json`, avatar assets
- `memory/`, `automations/` (routines)
- `metadata` / `origin` / prompt snapshot keys in `store.db` kv (except conversation state listed below)

## Wipe per agent id `<aid>`
1. Paths:
   - Agent dir: `/home/box/agent-data/agents/<aid>/`
   - Transcript: `/home/box/agent-data/agent-transcripts/<aid>/<aid>.jsonl`
2. Checkpoint then clear SQLite:
   - `store.db`: `DELETE FROM transcript_entries`; clear `blobs` and `automation_completion_inbox` if present
   - Delete kv keys: `episodePending`, `lastTurnSettlement`, `requestIds`
   - Reset `unreadState` to unreadCount 0 with fresh timestamps
   - `conversation-blobs.db`: `DELETE FROM blobs`, then `VACUUM` when practical
   - `PRAGMA wal_checkpoint(TRUNCATE)` on both DBs
3. Truncate (empty) the transcript jsonl; leave the file and `.journal-mode` in place
4. Do **not** delete `audit.jsonl` unless the user explicitly asks
5. Skip folders whose names start with `sand-subagent-`
6. Skip agents that have no `store.db`

## Fleet mode ("all bots")
- Enumerate `/home/box/agent-data/agents/*/store.db`
- Wipe each agent the same way, including this Cleaner bot itself (do that agent last)
- Also empty matching `/home/box/agent-data/agent-transcripts/<aid>/<aid>.jsonl` files for those agents

## Report
- How many agents wiped, how many transcript entries / blobs removed (totals)
- Anything skipped or that failed
- Remind the user to reopen a chat if the UI still shows old messages
