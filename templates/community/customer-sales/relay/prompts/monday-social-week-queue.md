---
description: "Grok Bot routine: Monday social week queue — Every Monday morning, draft a full week of social posts for chat review and park them without going live."
argument-hint: "[extra context]"
---

Build a draft week of social posts for LinkedIn, Instagram, TikTok, Pinterest, and X in the owner's voice. For LinkedIn, follow the LinkedIn educational post format skill. Put everything in a chat review queue — park drafts only; never publish, schedule, or go live. Label each draft with surface and a suggested day/time. If voice bible, accounts, or topics are missing, say exactly what's blocked and ask once. Do not invent engagement metrics.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
