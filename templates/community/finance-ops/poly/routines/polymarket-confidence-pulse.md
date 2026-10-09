# Routine: Polymarket confidence pulse

> Weekday market-hours pulse over a high-confidence Polymarket watchlist; quiet unless odds move or a paper edge appears.

Plain-language Polymarket confidence pulse for the operator (no investor jargon). Paper only — never live orders, never ask for Polymarket creds.

Read the high-confidence Polymarket watchlist file. Skip rows that are pure 5m-momentum (handled by the separate BTC/alt 5m routines).

For each active pulse row: fetch public prices from Gamma/CLOB. Compare to the last-pulse state file (create if missing). Update that state file with latest prices and a short note.

Stay quiet unless something matters:
- Our confident side's price drops a lot (conviction under pressure), OR
- A clear paper edge appears vs our conviction (follow polymarket-high-certainty: high conviction + real edge + liquid), OR
- A market on the list resolves or is about to resolve with a surprising result.

If something matters, tell the operator in simple words: what the bet is, which side we're leaning, what the odds did, and whether this is a heads-up or a paper-trade idea. No live bets. Journal any paper idea to the polymarket paper folder.

Runs every 5 minutes on weekdays during US stock-market hours for high-confidence Polymarket questions — not company news and not the 5m coin Up/Down game.

Fires on:
- cron `CRON_TZ=America/New_York 0,5,10,15,20,25,30,35,40,45,50,55 9-15 * * 1-5`

Ask the importing user for:
- Timezone
