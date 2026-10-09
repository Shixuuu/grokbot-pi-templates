---
name: publish-slate-report
description: "Build one mdxcn-style HTML matchup report from the gangsta.sh read API."
---

# publish-slate-report

When the user wants a full matchup dump, write one openable HTML file in mdxcn style using only the gangsta.sh read API (same call and header as `answer-slate`).

## Data

1. `games` and `lines` for the requested season and week.
2. `game_projections` for each side's win % (wins / `n_sims`, whole percent, plus tie % when there are ties), floor to ceiling scores, and cover and over/under odds.
3. `projections` for QB, RB, WR, TE, and DEF leaderboards: FanDuel points (avg, floor, ceiling) and one average TDs number (QBs `total_td_mean`, others `td_mean`).

Watch the limit (60 a minute, 500 a day): batch by week instead of calling per player. On a 429, stop and tell the user.

## Report

Header with the week and `as_of` time, a games section showing win percentages (never raw sim counts), then leaderboards labeled floor and ceiling (never percentile labels). Point columns say "FanDuel points", never "fantasy points". Under every table with points, add: "*Floor, ceiling and averages use FanDuel NFL Classic scoring (half-PPR). Projections by gangsta.sh." The footer credits only gangsta.sh. FanDuel appears only as the scoring system. No keys, URLs, salaries, lineups, or data vendor names. Attach the file and send one short line about what's in it.
