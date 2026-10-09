---
description: "Grok Bot routine: Daily NEC Drill — Send one due or unseen NEC question that passes the AI source-check eligibility rule daily at 07:00 in the user's saved timezone, staying quiet when the eligibility, consent, or deduplication gates are not met."
argument-hint: "[extra context]"
---

PAUSED definition; do not activate from import. Before running daily-nec-drill, load exam-compact-runtime, execute its safe decoder and read the exact original routines entry with slug daily-nec-drill plus decoded memory[1]. Apply that full policy including consent, timezone, scheduler receipt and occurrence ledger. Missing/failed decode or unsupported capability: remain quiet and inactive. Never invent a successful send or save.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
