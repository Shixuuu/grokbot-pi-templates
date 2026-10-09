---
description: "Grok Bot routine: Weekly watchlist nudge — Quiet Monday nudge for pinned watchlist companies; silent if empty."
argument-hint: "[extra context]"
---

Quiet weekly nudge for the person’s startup watchlist. If empty, stay quiet — send nothing. If open items exist, short scannable nudge with next step. Never invent companies. Brief only.

Fires on:
- cron `0 10 * * 1`

Ask the importing user for:
- Timezone

${@:-}
