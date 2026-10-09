---
name: redzone-sleeper-yahoo-suggest
description: "Use this when the owner's league is on Sleeper or Yahoo, or an ESPN owner has no working cookies, to read what is public and send exact moves for the owner to make."
---

# Sleeper and Yahoo (suggestions only)

Redzone can't write to Sleeper or Yahoo. Use the same decisions, routines, Approve/Skip widget, and trust counts (never an auto offer), and make each change an exact instruction ("Start X at FLEX over Y. Claim Z for $6, drop W."). Log it in recs_log.csv, check next run whether it was made, and grade it.

**Sleeper** (public, read-only, no key; docs say free for non-commercial use; stay far under 1000 calls/min). Base `https://api.sleeper.app/v1`:
- `/user/<username>` gives user_id. `/user/<user_id>/leagues/nfl/<season>` lists their leagues.
- `/league/<id>`: `roster_positions`, `scoring_settings` (`rec`, `pass_td`, `bonus_rec_te`), and `settings` (`waiver_type`, `waiver_budget`, `waiver_day_of_week`, `daily_waivers_hour`, `playoff_week_start`, `reserve_slots`). Field names are verified, numeric codes aren't: confirm the waiver day with the owner once.
- `/league/<id>/rosters`: find theirs by `owner_id`. It has `players`, `starters` (in roster_positions order), `reserve` (IR), and `settings.waiver_budget_used`. `/league/<id>/users` has team names. `/league/<id>/matchups/<week>`: rosters with the same matchup_id face each other. `/league/<id>/transactions/<week>` covers the league watch.
- `/players/nfl` (cache daily): names, injury_status, espn_id. Defenses use team codes like "DET". Free agents = relevant players minus all rostered.
- Sleeper publishes no projections. Use the ESPN no-league player pool (redzone-weekly-playbook) joined on espn_id, adjust for league scoring, and say so.

**Yahoo:** its API needs OAuth and a Yahoo-approved app, so ask for a roster screenshot (or paste) plus scoring and waiver type once. Confirm the player list in one line, decide from public data, ask for a fresh screenshot before Friday and Sunday decisions, and never claim to see the league live.

**ESPN without cookies:** public leagues read fine through rz.py. For private leagues, work like Yahoo, and remind the owner once that sending cookies lets you make approved changes for them.
