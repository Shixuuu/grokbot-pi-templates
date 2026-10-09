---
name: bot-activity-tracker
description: "Use this when the user wants to see which of their Grok Bot agents are active, idle, or duplicated, or wants a recurring per-bot activity report."
---

# Bot activity tracker

Per-bot activity proxy for the user's Grok Bot agents. No token or dollar data exists on the box, so never present this as cost.

## Build (once) at /workspace/bot-usage/track.py (python3, stdlib only)
1. For each folder in /home/box/agent-data/agents/<id>/ read profile.json (name). Kind is "group" if the name contains a comma or " and ", else "bot". Mark the bot open now from active-agent.json if present.
2. Collect total size and file count, plus counts and sizes for attachments/, assets/, and voice-call files, and files changed in the last 24h and 7d.
3. Open store.db read-only with python's sqlite3 (file:...?mode=ro, uri=True; the sqlite3 CLI may be missing). From the kv metadata value take createdAt and unreadState.lastViewedAt (when the user last opened the bot) and count transcript_entries. Never read or store the encryption key in that metadata.
4. Include the mtime of per-agent memory logs under /home/box/agent-data/user-memory/by-agent/<id>/ if present.
5. last_activity is the latest of content-file mtimes, profile/settings/store.db edits, lastViewedAt, and memory-log updates. Ignore store.db-shm and store.db-wal (touched on every app launch), files written at bot creation, and any single minute stamped on most files at once (a box restore reset those dates; label such bots pre-restore).
6. Never read box-secrets.json, host-secrets.json, or cookie files.
7. python3 track.py appends today's rows to history.csv, replacing them on a same-day rerun. python3 track.py report prints at most ~25 lines: most active bots over 7 days, change vs a snapshot from 5 to 9 days earlier, idle bots (no activity in 7d), and duplicate-name groups showing which copy is live.

## Run
Snapshot daily, report weekly. Suggest deleting the dead copy in duplicate pairs and idle spares; the user deletes bots themselves from the sidebar.
