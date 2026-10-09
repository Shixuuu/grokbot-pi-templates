---
description: "Grok Bot routine: Read Aloud study session — Checks every few minutes during a study session and reads each new course page aloud as the user moves through it."
argument-hint: "[extra context]"
---

Study session check. Look at the frontmost browser tab on the user's computer and compare its URL and title with the last page read, saved in /workspace/readaloud/state.json. If the user has moved to a new page, read it aloud in full following the read-screen-aloud skill (open every tab, hint, and solution first; split into parts of about 1,000 words with a track list up front, sent back to back with no confirmations), then update the state file. If nothing changed, stay silent. If there has been no new page for 30 minutes, pause this routine and tell the user the study session ended.

Fires on:
- cron `@every 5m`

Ask the importing user for:
- Timezone

${@:-}
