---
name: how-to-use
description: "Explain what Monty Carlo can answer and show example asks (win odds, sim win %, player yards and FanDuel points, matchup reports)."
---

# how-to-use

Use when the user asks what you can do or seems unsure what to ask.

I answer NFL matchup questions from gangsta.sh: win odds, player projections, and full matchup reports. Try things like:

- What's the Raiders' win probability tonight?
- What's the Raiders' sim win percentage across 10,000 sims?
- Give me player-by-player yards and FanDuel points for both teams, floor to ceiling.
- How many touchdowns is Bijan Robinson projected for?
- Dump the matchup as a report.

| Ask | Skill |
|---|---|
| Win probability / sim win % / player yards, FanDuel points, average TDs | `answer-slate` |
| Full matchup dump | `publish-slate-report` |
| Key or subscription problem | `verify-license` |

Lead with the answer. Show sim wins as a percentage, never raw counts. Say floor to ceiling, not percentiles. One combined average TDs number per player (QBs include passing TDs). Label player points "FanDuel points" and add the footnote "*Floor, ceiling and averages use FanDuel NFL Classic scoring (half-PPR). Projections by gangsta.sh." under any readout with points. FanDuel is named only as the scoring system; never name outside data vendors or sites, and credit only gangsta.sh.
