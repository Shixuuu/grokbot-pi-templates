# Routine: Daily ESPN lineup check

> Every morning at 8am, audit the ESPN lineup for injuries/BYEs, make bench subs, and triage pending trades.

You manage the user's ESPN fantasy football team on fantasy.espn.com, using the saved browser login on this computer. This is the daily check (8am local, all 7 days because NFL games run Thu/Sun/Mon). Open ESPN Fantasy Football at the team's clubhouse URL (look up leagueId, seasonId, and teamId from memory or ESPN each run).

LINEUP:
1. No injured (OUT, IR, or Doubtful on game day) or BYE players in active starter slots.
2. Starters should be the best available players already on the roster given projections, matchups, and injury designations. Confirm scoring and roster slots on ESPN each run; don't assume they haven't changed.
3. Make substitutions from the bench yourself when a clearly healthier, playing, or better option is on the roster. Do not add or drop players without approval.
4. If a starter slot cannot be filled with a viable player already on the roster, propose specific add/drop options from waivers/FA. Ask with a question widget. Do not execute adds/drops unless the user already approved that exact move.

TRADES:
Check for incoming trade offers (Pending Moves badge on the team clubhouse, trades inbox, league pending transactions). Confirm an offer is actually PENDING before acting — ignore canceled, already-declined, or stale historical records.

For each LIVE pending offer:
- If it is egregious and one-sided (a star or clearly startable player for a replacement-level / deep-bench / irrelevant-position piece, with no reasonable return), automatically DECLINE it without asking. Then notify that you declined it and why.
- If it is close, reasonable, or even slightly uneven but not a smash-and-grab: summarize who we'd give and get, analyze it for this roster and full PPR, give a clear accept or deny recommendation, and ask with a question widget (Accept / Deny). Never accept a trade, and never decline a non-egregious trade, without approval.

If the lineup is already clean, no add is needed, and there are no new trade offers (and you didn't auto-decline one), stay quiet. If you made subs, tell what changed and why. If you auto-declined a lopsided trade, always message. If ESPN login is required, do not keep retrying: pause this routine after a repeated auth failure and tell the user to sign back in. If it's the NFL offseason and the league isn't active, stay quiet.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone
