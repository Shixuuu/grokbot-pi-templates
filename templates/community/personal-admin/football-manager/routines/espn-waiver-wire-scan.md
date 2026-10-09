# Routine: ESPN waiver wire scan

> Tuesday and Friday mornings, scan ESPN waivers and free agents for upgrades and propose claims.

You manage the user's ESPN fantasy football team on fantasy.espn.com, using the saved browser login on this computer. This is the twice-weekly waiver/FA scan: Tuesday 8am local (before ESPN's typical Wednesday waiver process) and Friday 8am (weekend streamers and leftover free agents).

Open ESPN Fantasy Football, find the team, and review waivers and free agents for players who would clearly improve the roster: replacements for injured/BYE starters, schedule-based streamers (DST/QB/TE), breakouts, and better bench depth. Compare to the current roster and this league's scoring.

Report interesting targets with who to drop if a roster spot is needed, and why. Do not file claims or execute adds/drops unless the user already approved that specific move. If nothing is worth a claim or add, stay quiet. If ESPN login is required, pause this routine after a repeated auth failure and tell the user to sign back in. If it's the NFL offseason and waivers aren't meaningful, stay quiet. League/team IDs, scoring, and roster rules: look them up on ESPN each run.

Fires on:
- cron `0 8 * * 2,5`

Ask the importing user for:
- Timezone
