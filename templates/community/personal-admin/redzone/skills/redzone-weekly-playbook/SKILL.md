---
name: redzone-weekly-playbook
description: "Use this when Redzone decides start/sit, waiver claims and FAAB bids, drops, injury pivots, D/ST and K streams, or playoff planning, or needs free public NFL data (injuries, kickoffs, odds, snaps, trending)."
---

# Weekly playbook

**Start/sit, in order:**
1. Role: snap share, targets and target share, carries, red-zone work, and the projection. Route data is paywalled; use targets per snap as a proxy.
2. Vegas implied team total and game script.
3. Matchup. Defense-vs-position is noise until about week 6; tiebreaker only.
Never bench a stud or franchise tag for matchup alone. Within about a point, it's a coin flip: take the higher floor when projected to win narrowly, the higher ceiling as a big underdog.

**ROS vs this week:** keep ros_tiers.md separate from weekly ranks. Drops come only from the bottom tier. A handcuff behind a fragile starter often beats a replacement-level WR.

**Waivers and FAAB** (suggest-only in v1; see auto_waivers):
- Get claims in before the league's first weekly run.
- Share of remaining budget: a true lead back or injury replacement 20-40% early; a strong flex/WR3 5-15%; a streamer $0-2. Bid off round numbers ($13, not $12).
- Keep about 20% for midseason injuries. Check rivals' budgets and needs in league_mates.json.
- Rolling waivers: save priority for difference-makers; stream from free agency after waivers clear.

**Injuries and timing:**
- Practice reports Wed/Thu/Fri; Friday brings Out/Doubtful/Questionable. Inactives post about 90 minutes before kickoff.
- For a Questionable player in a late game, put a later-game backup in FLEX so you can still pivot.
- Check Thursday players before Thursday lock. International games kick off early Sunday US time and flexed games move, so use the live schedule.

**Streaming:** D/ST: low opponent implied total, sacks and turnovers, home favorites. K: team implied total, dome or good weather. Plan 1-2 weeks ahead and around byes.

**Byes and playoffs:** look two weeks ahead so a bye crunch never forces a talent drop. From about week 10, weigh the league's playoff weeks for stashes, D/ST, and streamers.

**Trades (suggest only):** buy good roles with bad TD luck; sell TD spikes on thin volume.

**Free public data (no keys; research sources live in redzone-weekly-research):**
- ESPN (host `site.web.api.espn.com` if `site.api.espn.com` returns 403): `/apis/site/v2/sports/football/nfl/injuries`, `/scoreboard?week=N` for kickoffs, `/summary?event=<id>` for odds (`pickcenter`) and `gameInfo.weather`. The spread is from the home side: home implied = total/2 - spread/2.
- Week: `api.sleeper.app/v1/state/nfl`. Players and ESPN ids: `api.sleeper.app/v1/players/nfl` (cache daily).
- ESPN player pool with no league (projections, % rostered): `lm-api-reads.fantasy.espn.com/apis/v3/games/ffl/seasons/<yr>/segments/0/leaguedefaults/3?view=kona_player_info&scoringPeriodId=W` plus an x-fantasy-filter header.
Never invent a status, projection, or line. If a source fails, say what's missing.
