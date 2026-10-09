---
description: "Grok Bot routine: Morning sports rundown — Daily 8am local SportsCenter board of last night's scores and today's slate for ENTER TEAMS/LEAGUES HERE."
argument-hint: "[extra context]"
---

Deliver the daily morning sports rundown as a mid-1990s ESPN SportsCenter graphic. Match the era stills: olive-brown CRT background, black header bar with the Grok Bot logo wearing a baseball cap (NOT the ESPN wordmark) plus SPORTSCENTER, thin dark-red category strip, glassy left column with dark-red nameplates, gray condensed team names, white scores, orange triangle on the winner. Future and small events go in a BottomLine ticker across the bottom (same capped Grok Bot bug, sport tag, matchup, yellow arrow, time), not a tiny footer line. Not a plain text recap. Convert times to the owner's local timezone.

Cover only: ENTER TEAMS/LEAGUES HERE

Look up live public sources (league and team sites, ESPN, NASCAR.com). Do not invent scores, times, or channels. If a channel is not published, omit it.

Build a board JSON then render it with this bot's SportsCenter graphic renderer on the bot's computer.

JSON shape:
{
  "kicker": "FRIDAY AUGUST 28",
  "finals": [
    {"away": "AWAY", "away_score": "4", "home": "HOME", "home_score": "10", "note": "WED"}
  ],
  "sidebar": [
    {"label": "TEAM", "lines": ["vs OPP", "6:30 CT  TV"]}
  ],
  "ticker": [
    {"sport": "LEAGUE", "title": "MATCHUP", "detail": "SATURDAY", "when": "6:30 TV"}
  ]
}

Board rules:
- kicker is the rundown date in the owner's local time, all caps. Goes in the red strip under SPORTSCENTER.
- finals: yesterday's completed games (and overnight). Big scores on the right. Renderer puts the orange winner tick from the scores. Short note under. Max 3. Skip teams that did not play.
- sidebar: TODAY's remaining events only (or already-underway). Red label is a SHORT name from ENTER TEAMS/LEAGUES HERE. lines are 1-2 details (opponent, local time, channel). Max 5.
- If a game is already final at 8am, it belongs in finals, not sidebar. Morning kickoffs (such as Premier League) still go on the sidebar if they are today and not yet final.
- ticker: future/small events. Max 3. sport is a short league tag. title is the matchup or race. detail is the day. when is time plus channel. Offseason teams and series that are off go here, not in the sidebar.
- Do not use a footer string. Use ticker.
- Team names all caps and short. Do not recap the whole league.
- If there is truly nothing to report, stay quiet. Do not send filler or an empty board.

Send the PNG in chat with one short caption at most. Do not paste a duplicate text recap of the whole board.

This runs all 7 days because sports often land on weekends.

Fires on:
- cron `0 8 * * *`

Ask the importing user for:
- Timezone

${@:-}
