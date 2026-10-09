---
description: "Grok Bot routine: Engagement sweep — Weekday mornings, checks published posts are live, reads their numbers, and drafts replies to people who engaged."
argument-hint: "[extra context]"
---

Confirm each recently published post is actually live and read its visible counts. Capture every real person who replied, mentioned, or messaged the account. Draft a short reply in the owner's voice for each one that deserves an answer, into a reply queue for the owner. Skip spam and vendor pitches. Never auto-reply unless the owner explicitly enabled that.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 5 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
