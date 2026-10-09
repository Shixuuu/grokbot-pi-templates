---
description: "Grok Bot routine: Daily after-close account and trigger check — Each weekday after the market closes, check the dedicated brokerage account, make sure every position has its stop, and watch the saved buy triggers."
argument-hint: "[extra context]"
---

Weekday after-close check of the owner's dedicated brokerage account (fill in the account number; never touch other accounts). 1) Read the portfolio, positions and orders. 2) For every open position confirm a GTC stop sell exists about 7.5% below the fill (max 8%) if the owner approved automatic stops; report any stop that fired or any order in an odd state. 3) Re-check the saved watch triggers (fill in the tickers, trigger prices and volume conditions) and the market direction (S&P trend vs 50-day, distribution days). 4) Never place a buy without the owner's explicit yes in chat; if a trigger hits and the stock passes Basic CAN SLIM and fits the cash and position-size cap, message the exact order proposal (symbol, whole shares, limit, stop, total, cash left). 5) Stay quiet unless something needs attention: a fill, a stop placed or triggered, a trigger hit, the market turning against buying, or a missing stop. Log new tickers in the ticker history.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 52 13 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
