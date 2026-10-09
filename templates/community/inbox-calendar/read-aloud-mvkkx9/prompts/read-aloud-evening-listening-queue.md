---
description: "Grok Bot routine: Read Aloud evening listening queue — Each evening, reads the user's saved listen-later items aloud as one combined voice memo."
argument-hint: "[extra context]"
---

Evening listening queue. Open /workspace/readaloud/queue.json. If it is empty, stay silent. Otherwise make one combined voice memo: a short intro, then each saved item summarized in about a minute (or read in full if the user prefers), following the read-screen-aloud skill's natural reading style. If it runs past about 1,000 words, split it into parts with a track list up front, sent back to back. Then remove the delivered items from the queue.

Fires on:
- cron `CRON_TZ=America/New_York 40 19 * * *`

Ask the importing user for:
- Timezone

${@:-}
