---
description: "Grok Bot routine: FOMC morning brief — Weekday morning digest of Fed/inflation/debt news on X correlated with live Polymarket FOMC odds."
argument-hint: "[extra context]"
---

Deliver the weekday FOMC morning brief (user local morning time).

1. Pull recent X News on: FOMC / Fed policy, Kevin Warsh, US inflation (CPI/PCE), and US debt / Treasury yields / bonds. Prefer the last ~72 hours; keep each query small. Summarize the few stories that matter; skip noise.

2. Open https://polymarket.com/predictions/fomc (or the live Polymarket FOMC prediction markets page). Read the current market odds for the next FOMC decision and any closely related Fed/rate markets shown there (hike / hold / cut, size if shown). Note the leading outcomes and any sharp moves if visible.

3. Correlate: in a few sentences, say how the X news narrative lines up with (or conflicts with) the Polymarket odds — e.g. hawkish Warsh chatter vs hike odds, Waller dovish comments vs hold odds, yields/oil/inflation prints as drivers.

4. Send a concise digest in chat: short sections for X news, Polymarket odds, and the correlation. Include a couple of key X story links and the Polymarket page. Do not invent odds or prices — only report what you actually fetched. If X News or Polymarket is unavailable, say so plainly and still deliver whatever you could get.

Always surface this brief to the user; this is a standing weekday digest.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
