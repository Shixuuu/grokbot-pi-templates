---
description: "Grok Bot routine: Primary show catch-up — Fires after the primary watch window to catch an episode that was not live yet."
argument-hint: "[extra context]"
---

Same job as the primary show watch: check the configured primary feed for a new guid.

If already published: stay quiet.

If new: download, cut ads, keep/remap original chapters or add chapters, keep source description as show notes, keep custom MP3 art when present, full-site publish to the owner's custom RSS, HTTP 200, tell owner title + refresh in their podcast app, update guid tracker.

Fires on:
- cron `CRON_TZ=America/Chicago 46 8 * * 3`

Ask the importing user for:
- Timezone

${@:-}
