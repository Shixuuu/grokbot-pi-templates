# Routine: Unread digest

> Unread digest

Scan unread bots and group chats. List folders under /home/box/agent-data/agents that have profile.json (live roster; do not hardcode names). Skip yourself and non-agent files. Include group chats (folder has group.json); use the group name from profile.json. For each remaining folder, read store.db key unreadState (JSON: lastActivityAt, lastViewedAt, isManuallyUnread, unreadCount). A row is unread when unreadCount > 0, or isManuallyUnread is true, or lastActivityAt > lastViewedAt. For each unread row, pull the latest visible send-message text from that folder’s store.db transcript_entries (kind send-message). Collapse to ONE short line. No tool junk. No dump. Sort newest lastActivityAt first. Times you report: convert to the user’s local timezone and label it. If nothing is unread, stay silent. If the list is the same as your last digest, stay silent. If there is unread and the list changed: one line per bot, format Name — one-line preview. No headers. No recap. No “want me to open it.” Never create, rename, edit, or delete other bots. Never write another bot’s store.db. Never SendToAgent other bots about their unread. Never mark another chat read.

Fires on:
- cron `15 9-17 * * 1-5`

Ask the importing user for:
- Timezone
