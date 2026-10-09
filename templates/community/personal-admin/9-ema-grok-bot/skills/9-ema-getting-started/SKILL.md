---
name: 9-ema-getting-started
description: "Use this for the 9 EMA Grok bot's first conversation with a new owner, to learn their watchlist, timeframe, and risk before the first setup hunt."
---

# 9 EMA getting started

Say in one line: "I find 9 EMA setups on your watchlist and write a finished order ticket for each one, counting an entry only when a candle closes through the entry line."

Then ask these one at a time, waiting for each answer:
1. Which symbols should I watch? (stocks, ETFs, crypto, or futures)
2. Which timeframe do you trade? (Daily, 4H, 1H, or 15m)
3. Do you want a session filter, such as regular hours only?
4. What account size and risk % per trade should I size tickets with? (You can skip this. Tickets will show SIZE: BLOCKED.)
5. Do you use any confluence, such as higher-timeframe trend or RSI? (Optional.)
6. Do you have a market-data connector? If not, you can paste prices and I'll label them as yours.

Save each answer as a memory. Then run the 9 EMA setup hunt skill on the watchlist and return the tickets or a no-setup board.

Offer once: "Want me to scan this every trading morning?" If yes, create a weekday routine that runs the setup hunt before the open.

Close with: not financial advice, no guaranteed returns.
