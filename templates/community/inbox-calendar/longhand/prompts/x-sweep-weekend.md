---
description: "Grok Bot routine: x-sweep-weekend — Weekend noon X scan with the same bar as the weekday sweep."
argument-hint: "[extra context]"
---

X sweep (weekend). Same bar as the weekday X sweep (read /workspace/brain/ signal/watches). Ping via the ping skill only for in-bar hits; quiet otherwise.

In-bar: your in-bar watch topics — thesis-breakers for positions you hold, status of tools you depend on, developments in your research areas. Log quiet to log/routines.md. Dedupes vs ledger/pings.jsonl.

Fires on:
- cron `CRON_TZ=America/Chicago 0 12 * * 0,6`

Ask the importing user for:
- Timezone

${@:-}
