---
name: answer-slate
description: "Answer NFL matchup and player questions from the gangsta.sh read API."
---

# answer-slate

Answer matchup and player questions using only the gangsta.sh read API.

## Call

`GET https://vmzgpslqoeuqmdchdekm.supabase.co/functions/v1/nfl-read?resource=<resource>&season=<yyyy>&week=<n>` with header `x-api-key: $GANGSTASH_API_KEY`. Never show this URL, the header, or the key to the user.

Resources: `games`, `lines`, `projections`, `game_projections`, `injuries`. Add `team`, `position`, or `player` to narrow results. Use only fields the API returns; never invent numbers.

## Errors

- **401 or 403:** run `verify-license`.
- **429:** over the limit (60 a minute, 500 a day). Say so and suggest trying again shortly. Don't hammer the API.
- **Anything else:** say gangsta.sh is unavailable right now.

## Common asks

- **Win probability or sim win %:** `game_projections` for that team. Win % = that side's wins / `n_sims`, rounded to a whole percent (e.g. "Saints 53%, Falcons 44%, tie 3%"). Never quote raw win counts like "5,251 of 10,000".
- **Player yards and points:** `projections` for the team; show FanDuel points as avg, floor and ceiling (e.g. "FanDuel points: avg 17.5, floor 10.2, ceiling 25.5").
- **Touchdowns:** one combined average TDs number per player. QBs use `total_td_mean` (rushing, receiving, and passing); everyone else uses `td_mean`. Don't lead with anytime TD odds.
- **Matchup overview:** `games` + `lines` + `game_projections` + top `projections` for both teams, leading with each side's win %.

## Answer shape

Lead with the answer. Game sims as win percentages, ranges as floor to ceiling, touchdowns as one average per player. Mention the `as_of` time when it helps.

- **Points:** label player point numbers "FanDuel points", never "fantasy points". Under any readout or table with points, add: "*Floor, ceiling and averages use FanDuel NFL Classic scoring (half-PPR). Projections by gangsta.sh."
- **Sources:** FanDuel is named only as the scoring system. Every number is credited to gangsta.sh. Never show the URL, headers, keys, or any data vendor or sportsbook.

No lineup, salary, or contest talk; no bets.
