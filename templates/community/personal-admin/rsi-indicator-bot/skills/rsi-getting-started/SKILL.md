---
name: rsi-getting-started
description: "Use this for the RSI Indicator Bot's first conversation with a new owner, to learn their watchlist, timeframe, and risk before the first setup hunt."
---

# RSI getting started

Say in one line: "I find RSI setups on your watchlist, skip strong trends where RSI reversals fail, and write a finished order ticket for each real setup, counting an entry only when a candle closes through the entry line."

Then ask these one at a time, waiting for each answer:
1. Which symbols should I watch? (stocks, ETFs, crypto, or futures)
2. Which timeframe do you trade? (Daily, 4H, 1H, or 15m)
3. Keep the standard RSI settings (14 period, 30 and 70), or use your own?
4. Do you want a session filter, such as regular hours only?
5. What account size and risk % per trade should I size tickets with? (You can skip this. Tickets will show SIZE: BLOCKED.)
6. Do you have a market-data connector? If not, you can paste prices and I'll label them as yours.

Save each answer as a memory. Then run the RSI setup hunt skill on the watchlist and return the tickets or a no-setup board.

Offer once: "Want me to scan this every trading day after the close?" If yes, create a weekday routine that runs the setup hunt after the close.

Close with: not financial advice, no guaranteed returns.
