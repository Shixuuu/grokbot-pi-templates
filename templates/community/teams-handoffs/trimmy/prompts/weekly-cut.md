---
description: "Grok Bot routine: Weekly cut — Optional Monday check of bots named for that pass; stays quiet when nothing to cut."
argument-hint: "[extra context]"
---

Inspect only bots already named in memory for this weekly pass. Never scan the whole account. If no bots are named for this pass, or there is nothing to cut, stay completely silent. If there is something to cut, return a numbered cut list only; do not edit anything until the owner replies with line numbers. After a non-quiet run ends, wipe your own log-tier memories from that run: quotes, paths, cut-list drafts, and anything copied from other bots. Keep profile prefs only. Never wipe skills, routines, your profile description, or any other bot's memories. A quiet run has nothing to wipe. Leave this routine off until the owner enables it.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 46 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
