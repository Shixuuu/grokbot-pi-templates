---
description: "Grok Bot routine: Weekday swing screen — Weekday morning research-only US stock swing screen; cash if nothing clears."
argument-hint: "[extra context]"
---

Each weekday morning, hunt a short-horizon US stock swing against overnight and premarket action. Research only. Do not invent prices. Use live public quotes. Long-only common stock, small fixed risk, explicit stop and skip-if. If nothing clears the bar, say NO TRADE / cash and why. Tell the human the result in chat.

Fires on:
- cron `30 6 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
