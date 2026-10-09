---
description: "Grok Bot routine: US equity high-fluctuation stock alerts — Hourly on weekdays during US market hours — scan movers, social heat, and filings; alert only when actionable."
argument-hint: "[extra context]"
---

Monitor four lanes and alert only when actionable (stay quiet otherwise). No crypto, no meme coins, no obvious meme/penny pumps. Keep ALL signal types including same-day chatter — do not filter them out. Tag each alert as [same-day] or [multi-week] (or both). When a name looks reasonably viable for a weeks-to-months swing horizon (liquid, real catalyst, not deal-arb-only / SPAC-like), explicitly mark it [viable] with one short why; otherwise leave unmarked or note why it's weak for investing.

1) Price: US-listed brokerage-eligible equities — gainers/losers/unusual volume and strategic catalysts. Alert on roughly ≥5% moves on liquid names, unusual volume, or clear catalyst breaks.

2) Reddit: r/wallstreetbets and related investing subs for bullish runs. Decode coded ticker talk (spaced letters, emoji/slang covers, misspellings, $TICKER fragments). Prefer chat heat with price/volume confirmation.

3) X (Twitter): notable posts/threads from credible market accounts, company IR, activists, or clear viral ticker waves — quote or paraphrase the signal (handle + gist), not just "people are tweeting." Prefer posts that pair with price/catalyst confirmation. Skip spam bots and meme-coin promo.

4) Hedge funds / institutions: major disclosed buys and sells as soon as public — Schedule 13D/13G (and amendments), activist stake news, large open-market accumulation/distribution headlines. Prioritize fresh disclosure over stale 13Fs. Include fund name, ticker, buy vs sell, size/%, and filing/news time.

Keep alerts short and urgent. Skip noise and duplicates already sent the same session unless % or news materially changes.

Fires on:
- cron `CRON_TZ=America/New_York 25 9-16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
