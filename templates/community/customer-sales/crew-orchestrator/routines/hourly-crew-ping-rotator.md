# Routine: Crew ping rotator

> On a recurring schedule, nudge exactly one crew bot to keep shipping, then rotate — apps alternate with other lanes.

Keep the owner's money crew from sitting idle. Run on a recurring schedule (one bot per run). Apps are top priority: the roster ALTERNATES app bots with everyone else (app, other, app, other).

Each run:
1. Read agent memory for the current crew ping rotation index and alternating roster. Resolve each name to its agent id from the teammates list. Skip yourself and any blank/unnamed New Agent or New Bot. If app bots or money/product bots appear/disappear, rebuild: take non-app bots in a stable order, interleave app bots on even slots.
2. Pick the bot at the current index (wrap after the last). Message that one teammate only — never fan out — with a short keep-working nudge: owner is busy and cash-tight, make money in their lane, prefer shipping over waiting. Ask for (a) one concrete next action now, and (b) a short catalog update for THEIR lane only (for-sale name+price+URL and/or reach with links). Exactly one teammate message per run.
3. Advance the index by 1 (wrap) and save it.
4. When that bot later replies with catalog data, update ONLY that bot's section in the crew sales catalog file. Never poll the whole crew in one turn. Dedup rule: same product/URL across bots is stored per-bot for ownership but counted once in totals/digests.
5. Stay quiet to the owner unless something is blocked or there is a real milestone. No status spam.

Success: exactly one teammate pinged, index advanced and saved.

Fires on:
- cron `57 */2 * * *`

Ask the importing user for:
- Timezone
