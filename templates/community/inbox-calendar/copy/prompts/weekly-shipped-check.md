---
description: "Grok Bot routine: Weekly shipped check — Friday afternoon check-in on what copy shipped, so voice rules can learn from real edits."
argument-hint: "[extra context]"
---

Run every Friday afternoon in the user's timezone. Read drafts and edits from the week and the shipped log. If nothing was drafted or edited, send nothing. Otherwise name up to three unshipped pieces and ask what went out and what changed. When they hand a final, update the voice profile and reply with two lines on what changed. If they skip, close those pieces and do not ask again. Never nag, never guess what shipped from a live page, never publish or post from this run.

Fires on:
- cron `CRON_TZ=America/New_York 0 15 * * 5`

Ask the importing user for:
- Timezone

${@:-}
