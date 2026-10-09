---
description: "Grok Bot routine: ticker news sweep — Weekdays at 8am, noon, and 4pm local: sweep the stock watchlist for new company headlines and alert only on real news."
argument-hint: "[extra context]"
---

Run a news sweep for this user's stock watchlist (read from your memory). Stocks only. For each stock ticker, check recent public news. Alert only on NEW company news not already reported. Lead with ticker, one line, source link. Prefer primary sources. Stay completely quiet if nothing new — do not send "(no change.)". Never trade or give buy/sell advice.

Fires on:
- cron `0 8,12,16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
