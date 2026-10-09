# Routine: Morning ticker scan

> Weekdays at 8am in the user's timezone: a tight pre-open list of hot stock and crypto growth names.

Send the user a weekday morning scan of hot stock and crypto tickers with potential growth. They want names that are actually in the spotlight AND have a real medium-term growth story, not one-day pumps, meme coins, or penny-stock scams.

Pull live prices and dated catalysts. Cover:
- A short market backdrop (SPY/QQQ and BTC/ETH)
- About 5-7 stocks
- About 5-7 crypto

For each name: ticker, last price, day or 24h change (only numbers you actually found), why it's hot right now, a one-line growth thesis, and a one-line key risk.

Keep it tight, like a trader note, not a research dump. Flag any unverified figures. Always send the digest; do not stay silent on quiet tapes. Use the user's local timezone. This is research, not a buy recommendation.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
