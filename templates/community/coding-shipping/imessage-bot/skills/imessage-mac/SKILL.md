---
name: imessage-mac
description: "Use when reading, searching, summarizing, sending, replying, reacting to, or editing macOS iMessages / SMS on a connected Mac (chat.db read-only needs Full Disk Access; send path is Beeper imessage-cli)."
---

# Read and send iMessages on a connected Mac

## Goal
Query the user's local Messages database read-only and return conversation history (including modern attributedBody blobs where text is empty). Send, reply, react, edit, and type via Beeper’s imessage-cli with --no-use-secondary-instance.

## Prerequisites
1. A connected Mac via ListMachines (pass machineId to every Shell/Read).
2. Full Disk Access for Grok Bot.app in System Settings → Privacy & Security → Full Disk Access. Toggle off/on after app updates, then restart Grok Bot.
3. Never write to chat.db. Open SQLite read-only (mode=ro).
4. For send/react/reply/edit: brew install beeper/tap/imessage-cli. Always pass --no-use-secondary-instance. Accessibility, Contacts, Messages Data, and Automation must be granted (imessage-cli authorize).

## Access check (run first for reads)
```bash
python3 -c "p=__import__('os').path.expanduser('~/Library/Messages/chat.db');
import sys
try:
    open(p,'rb').read(16); print('FDA_OK')
except PermissionError:
    print('FDA_BLOCKED'); sys.exit(2)"
```
If FDA_BLOCKED: stop and ask the user to enable Full Disk Access for Grok Bot. Do not invent message contents.

## Date formula
Apple stores nanoseconds since 2001-01-01:
`datetime(m.date/1000000000 + 978307200, 'unixepoch', 'localtime')`

## Critical: text vs attributedBody
On recent macOS, message.text is often NULL; body lives in attributedBody (NSArchiver typedstream). Always accept rows where text OR attributedBody is present. Filter tapbacks with associated_message_type = 0.

## Find a person
Match chat.display_name, chat.chat_identifier, or handle.id (phone/email).

```sql
SELECT c.ROWID, c.chat_identifier, c.display_name, COUNT(*) AS n
FROM chat c
JOIN chat_message_join cmj ON cmj.chat_id = c.ROWID
WHERE c.display_name LIKE '%Name%'
   OR c.chat_identifier LIKE '%phone_or_email%'
GROUP BY c.ROWID
ORDER BY n DESC;
```

## Recent messages / full decode
Prefer the decode helper when installed:
`python3 ~/.claude/skills/imessage-mac/scripts/decode_attributed_body.py --chat "<chat_identifier>" --limit 50 --order desc`

Open DB safely:
```python
import sqlite3, os
db = os.path.expanduser("~/Library/Messages/chat.db")
conn = sqlite3.connect(f"file:{db}?mode=ro", uri=True)
```

## Send / reply / react / edit (Beeper CLI)
Binary: `/opt/homebrew/bin/imessage-cli` (or `which imessage-cli`).
Every command: `--no-use-secondary-instance`.
Reliable: send, create-chat, reply, send-file, reply-file, react, unreact, edit, undo-send, typing, mark-read, mute, unmute, select-chat, activity-status, chats, messages, search, watch, load-attachment, authorize.
Unreliable or skip: mark-unread, open-settings, notify-anyway (needs Focus prompt), delete-chat (destructive).
Do not send Echo/Confetti/Slam via this CLI (needs SIP-off private API).
Owner must approve exact text before any send.

## Do not
- Write to or migrate chat.db
- Fabricate message text when FDA blocks reads
- Send without explicit content + go-ahead
- Rely on AppleScript Messages for full history
- Filter with WHERE m.text IS NOT NULL alone on modern macOS
- Use the default secondary Messages instance for agent sends
