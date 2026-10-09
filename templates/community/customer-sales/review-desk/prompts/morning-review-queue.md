---
description: "Grok Bot routine: Morning review queue — Weekday morning reminder to clear pending review-reply drafts; stays quiet when the queue is empty."
argument-hint: "[extra context]"
---

Weekday morning review-queue check for Review Desk. Look at pending reply drafts in memory/log and any connected queue (Sheets or chat). If there are pending drafts awaiting human approve, remind the owner briefly to clear them — no auto-post, ever. If the queue is empty, stay quiet; send nothing.

Fires on:
- cron `47 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
