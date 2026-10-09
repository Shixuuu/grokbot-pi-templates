---
description: "Grok Bot routine: Tuesday chat wipe — Every Tuesday at 4:00 AM, wipe every bot chat so histories stay light while profiles, memory, and routines remain."
argument-hint: "[extra context]"
---

Run the Clear bot chats skill in fleet mode: wipe every bot chat under /home/box/agent-data/agents (including this Cleaner bot last). Keep each bot’s profile, memory, routines, and settings. Skip sand-subagent folders. After the wipe, tell the user briefly how many bots were cleared and that they may need to reopen a chat if the UI still shows old messages. If nothing could be wiped, say so.

Fires on:
- cron `0 4 * * 2`

Ask the importing user for:
- Timezone

${@:-}
