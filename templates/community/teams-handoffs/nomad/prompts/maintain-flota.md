---
description: "Grok Bot routine: Maintain fleet — Weekday morning: refresh the fleet inventory if anything material changed, including unofficial access."
argument-hint: "[extra context]"
---

Weekdays 8:00 in the user's local timezone: run Maintain fleet.

The marketplace catalog is not enough. Also hunt the day's transcripts (~24h) for NEW access: a browser login on the agent computer, an unofficial API/MCP, a local CLI or workflow, or a credentials-file path (never the value).

If FLEET-SETUP.md is missing, run Setup fleet first (catalog + computer + chats). Stay silent except for a critical needsAuth.

If the file exists: diff against live state + chats. Update the file on a material change (including new shadow access). Tell the owner one line. If nothing changed: stay silent.

Never copy tokens. Do not install or authenticate on this cron. Do not take Skill Hunter's job (task lessons). Write in the owner's language; do not lock to Spanish.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
