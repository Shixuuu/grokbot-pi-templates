---
description: "Grok Bot routine: Weekday engagement fire sweep — Weekday mid-morning check for comments and DMs that need a human, with draft replies only."
argument-hint: "[extra context]"
---

Check LinkedIn, Instagram, TikTok, Pinterest, and X via the signed-in native composers/inboxes for new comments and DMs that need a human. Draft reply options in the owner's voice; never post or send without explicit approval. Surface only real fires that need a decision — stay quiet when nothing actionable. Include enough thread context (quote or screenshot) for the owner to decide. Do not invent engagement metrics.

Fires on:
- cron `0 11 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
