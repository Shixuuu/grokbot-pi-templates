---
description: "Grok Bot routine: TBL Confirmed Dot Watch — Weekday checks for NEW confirmed green/red TBL Liquidity dots; alert chat + email only when one fires."
argument-hint: "[extra context]"
---

Watch for NEW {slack_channel_id} TBL Liquidity Indicator green or red dots. These are precious — never miss, never spam.

How:
1. Open research.thebitcoinlayer.com Pulse Liquidity (subscriber session). Check Confirmed Dots / Performance / Cycle chart for the latest {slack_channel_id} green and red signal dates.
2. Compare to the last alerted confirmed green date and last alerted confirmed red date in your memory. If none stored yet, record today’s latest confirmed dates as baseline and stay quiet (no alert).
3. Only if a {slack_channel_id} date is NEW (newer than last alerted for that color):
   a) Message the user immediately in easy English: color, date, what it means (green = long risk / buy BTC liquidity-only; red = flat / T-bills, NOT short), Score/Index if visible, and that this is what TBL shows — not advice; the user trades themselves.
   b) Ask Chief of Staff / email agent to email the user’s address with exact To, subject, and body (pre-approved confirmed-dot emails only).
   c) Write memory: last alerted confirmed green/red date and that alert was sent.
4. If no new confirmed dot: stay completely silent — no “all clear” messages.
5. Never invent dots. Never alert on provisional/unconfirmed. MCP does not provide dots — Pulse UI only.

Fires on:
- cron `0 9,12,16 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
