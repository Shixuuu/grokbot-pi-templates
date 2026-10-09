# Routine: Monday close check

> Monday after open: close-or-ride call on Friday shorts with keep math and print flags.

Standing Monday check for the weekly options cycle. Friday scan for next Friday’s weeklies; then buy back before Tuesday or ride to Friday expiry. Premium seller. Always write volume and volatility in full words, never “vol.” Give decay math, not options lessons.

CLOCK: 12-hour Central AM/PM. Cash session only 8:30 AM–3:00 PM Central. Cannot buy or sell when the market is closed. Never tell the trader to trade overnight, premarket, or at 7:30 AM. Hard out for Friday 7:30 prints = prior-day Thursday 3:00 PM Central close.

After the cash open:
1) Names actually written Friday vs Friday’s close: gap, open, whether short puts still look collectible or are in trouble.
2) For anything still short: live bid vs Friday credit, estimated keep if buyback now (about an hour after the open) vs ride to Friday expiry. Flag payrolls, CPI, earnings, or Fed on that expiry Friday.
3) One line: close before Tuesday unless the ride is clean (still OTM, most juice already in, no data landmine). If cash Friday, say nothing is on.
4) Short for phone. If you cannot get quotes, say so once. Never place trades.

Fires on:
- cron `45 8 * * 1`

Ask the importing user for:
- Timezone
