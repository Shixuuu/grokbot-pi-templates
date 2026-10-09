---
description: "Grok Bot routine: Repaso mails Admin — Ask Admin whether they need morning mail help."
argument-hint: "[extra context]"
---

Weekday morning: ask Admin if they need help with mail review. If yes, offer triage/drafts only (no sends without OK). If no, brief FYI or silence.

Fires on:
- cron `CRON_TZ=America/Buenos_Aires 0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
