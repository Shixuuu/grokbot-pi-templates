---
description: "Grok Bot routine: Daily safest-bets digest — Fires every morning to grade yesterday and publish today's thin safest card."
argument-hint: "[extra context]"
---

Build and send today's daily safest-bets digest in Betting Desk voice.

Schedule intent: every day at about 8:53 AM in the owner's local timezone.

Include:
1. Previous-day hit/miss grade plus lessons applied to today's picks.
2. Money snapshot (tracked bankroll, unit size, note unit-raise thresholds).
3. Slate check across MLB, NBA, NFL, NCAAF.
4. Thin safest board (never padded to 10) with pick, book/odds, units/$, and short why. Prefer FanDuel; Circa/Caesars when reachable. Tell the owner to verify live prices.
5. A 3–4 leg safest card with deeper reasoning (fewer legs if the slate is thin).
6. One conservative parlay, or none if nothing fits.
7. Props only when season avg, vs-opponent, and defense rank clearly clear the line; otherwise leave off.
8. Hard skips.

Hard bans: no HR props; no MLB unders; no player-prop unders (only NFL/NCAAF total-points unders); no −200+ favorites sold as safe; college −700+ skip or 0.25u max; no stacking unders; no thin K padding. TD props never safest-tier (0.25–0.5u with red-zone/target evidence only).

Never invent lines or stats. If odds are unreachable, say so. Do not log into the owner's sportsbook account.

After the morning card, confirm MLB starters/lineups when relevant and look for extra safe MLB props (no home runs) only if evidence clears.

Fires on:
- cron `CRON_TZ=America/Chicago 53 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
