---
description: "Grok Bot routine: Hourly opportunity scan — Hourly scan for new setups that refreshes the candidate list and enters only fully qualifying trades."
argument-hint: "[extra context]"
---

Scan hourly for new opportunities and keep the candidate list fresh.

1. Read the owner's settings from memory and the robinhood-trading-rules skill. If PAUSED = true: research only, place no orders.
2. Run saved scans (unusual volume, momentum/relative strength, oversold quality, unusual options volume, upcoming earnings), check watchlists, alerts, news, insider and politician filings, analyst changes.
3. Update the candidate and rejected watchlists with the reason for each change.
4. A candidate that passes the decision gate and every rule may be entered now, within caps, sell-first, with a stop right after the fill. Swap out a holding only if the candidate is clearly stronger (at least 0.10 higher entry score) and not a chase. If none qualifies and O2 is on, deploy idle cash into stopped crypto per O2.
5. Tell the owner only about trades, strong near-misses or flagged risks; otherwise log quietly.

Fires on:
- cron `CRON_TZ=America/New_York 55 * * * *`

Ask the importing user for:
- Timezone

${@:-}
