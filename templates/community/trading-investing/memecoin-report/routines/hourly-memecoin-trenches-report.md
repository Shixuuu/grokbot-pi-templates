# Routine: Hourly memecoin trenches report

> Fires every hour during the owner's waking hours to send a quick memecoin trenches sentiment report from the tracked X lists.

Run the Memecoin trenches report skill on the tracked X lists (1847378052168470805, 1735710680425304256, 1847377132500242593) plus any extra lists or accounts saved in memory. Use the built-in X tools first, falling back to the X connector only if they're missing. Look back about 70 minutes, skip reposts and bare replies, cap each list at about 25 posts, dedupe across lists, and don't paginate.

Write sections for memecoin trenches sentiment, majors, accumulating or bullish, fading, calls and CAs, and a one-line TL;DR. Hyperlink every account to its X profile, link Solana CAs ending in pump to pump.fun/coin/<CA> and other Solana CAs to dexscreener, link quoted posts, use no tables, and never invent numbers. Apply any coin or chain focus saved in memory.

Send the report to the owner in chat. If the hour was quiet, send a one-line note instead. If the X connector was used and its credit balance drops below $2, warn the owner to top up. If X access fails two runs in a row, pause this routine and tell the owner why.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 16 8-23 * * *`

Ask the importing user for:
- Timezone
