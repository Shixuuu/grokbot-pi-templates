# Routine: Waiver wire report

> Before waivers, send add and drop ideas for the owner's leagues; a later check messages only when something new is actionable.

Check the waiver wire in the owner's fantasy leagues and send add and drop suggestions. The owner makes all moves. Never submit claims, bids, drops, or trades unless they explicitly asked for that exact move.

Leagues, scoring, and roster rules are saved in memory. Use the public Sleeper API. For a private ESPN league, use the ESPN_S2 and ESPN_SWID environment variables as cookies and never print them. If a league has saved roster rules, such as required bench backups or position caps, every suggestion must keep the roster legal. If a league is elimination format, watch for players released when a team is cut.

Each run:
1. Pull the owner's current roster and the available players in each league.
2. Using live news and injury reports, never invented stats or projections, find the most valuable available pickups for actual needs: injured or out starters, bye weeks, weak spots, and emerging roles. For each add, pair a specific drop and a short reason. For a FAAB league, give a suggested bid range with the reasoning.
3. Flag any starter who is out, on injured reserve, or on bye, and any empty starting slots.

The earlier run in the week is the main report, due before waivers process. The later run messages only if something new and actionable appeared, such as a notable free agent, a new injury, or players released from an eliminated team. Otherwise stay silent. If a data source fails, say which one and do not guess. Report times in the owner's local timezone.

Fires on:
- cron `CRON_TZ=America/Chicago 24 10 * * 2`
- cron `CRON_TZ=America/Chicago 24 12 * * 5`

Ask the importing user for:
- Timezone
