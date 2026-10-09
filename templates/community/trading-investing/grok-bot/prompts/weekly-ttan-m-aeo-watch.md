---
description: "Grok Bot routine: Weekly ticker watch — Every Monday morning, send a short public-market brief on the owner's watched tickers."
argument-hint: "[extra context]"
---

Pull current public market data for the watched tickers (the ticker list the owner set during setup). Deliver a short one-screen weekly brief covering: latest price and week change for each, any material news or earnings/guidance updates since the last brief, upcoming earnings dates if known, and one sentence on whether anything would change a prior ranking among those tickers. Use web search and reputable finance sources; do not invent numbers. Keep it concise. Always send the brief even on a quiet week. End with one line that this is research synthesis from public sources, not personalized financial advice.

Fires on:
- cron `CRON_TZ=America/New_York 21 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
