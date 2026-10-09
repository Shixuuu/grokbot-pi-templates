---
name: redzone-weekly-research
description: "Use this when running the Tuesday research sweep, or when the owner asks what the experts say about breakouts, busts, injury replacements, or pickups, to gather public expert claims, check them against usage data and the owner's league, and learn which sources to trust."
---

# Weekly expert research sweep

Run Tuesday once every week-N game is final on the scoreboard (N = the week just finished).

## Paths
Research: `/workspace/redzone/research/`. Lessons: `season_notes.md`. Caches: `research/sources/`.

## Sources (free, no login; verified Sept 2026)
If a URL pattern breaks, use the search query; if both fail, skip the source and note the gap — **never silent zero**.
1. FantasyPros waiver column: `fantasypros.com/<yr>/<mm>/fantasy-football-waiver-wire-rankings-pickups-week-<N+1>-<yr>/` (FAAB tiers), plus their injuries column. Search: `FantasyPros waiver wire week <N+1> <yr>`.
2. FantasyPros ROS consensus: `fantasypros.com/nfl/rankings/ros-ppr-overall.php` (`ros-overall.php` for non-PPR). The page's `var ecrData = {...}` JSON has rank_ecr, pos_rank, min, max. **Every Tuesday, persist a snapshot** of that `ecrData` JSON under `/workspace/redzone/research/sources/fantasypros_ros_ecr_<YYYY-MM-DD>.json` (refresh on each pull).
3. ESPN free-agent column (Karabell, Mondays): search `ESPN fantasy football free agent pickups week <N+1> <yr>`. Use WebFetch; curl gets an empty 202.
4. NFL.com waiver column: search `NFL.com fantasy football waiver wire week <N+1> <yr>`.
5. CBS Sports waiver column (Eisenberg): search `CBS Sports fantasy week <N+1> waiver wire <yr>`. **If Eisenberg 404s**, try Heath Cummings (or other CBS WW / risers-fallers URL) before giving up. If all fail, write an explicit **GAP** row in the week md sources table (and optionally a claims note) — never leave CBS as a silent zero.
6. Yahoo waiver column (Boone; drop candidates, route share): search `Yahoo fantasy waiver wire pickups week <N+1> <yr>`.
7. Rotoworld player news: `nbcsports.com/fantasy/football/player-news` (WebFetch; curl gets a JS shell).
8. Sleeper trending: `api.sleeper.app/v1/players/nfl/trending/{add|drop}?lookback_hours=24|72&limit=25`.
9. nflverse data: `github.com/nflverse/nflverse-data/releases/download/` `snap_counts/snap_counts_<yr>.csv`, `stats_player/stats_player_week_<yr>.csv` (targets, target_share, air_yards_share, wopr, carries), `pbp/play_by_play_<yr>.csv.gz` (red-zone looks = targets or carries with yardline_100 <= 20). Route participation isn't public; cite it only from an article. Live statuses: ESPN injuries API (redzone-weekly-playbook).

**X / social (optional):** When logging claims from long X posts, always request `note_tweet` (or otherwise complete full text). X truncates long posts in `text`. **Refuse to log claims from truncated `text` alone.** If full text is missing and `text` is truncated, re-fetch or GAP that item — do not invent from a cut-off list.

Excluded (paywalled; headlines only): The Athletic, PFF premium, 4for4, Establish the Run. Never use content behind a login.

## Sweep
1. Gather claims into `research/<yr>-w<NN>.md` and append to `research/claims.csv`: `week,source,player,type,claim,metric,usage,verdict,league_status,outcome`. type: breakout, bust, injury-beneficiary, buy, sell, drop, or stash. Keep claims short, with the source's own number (FAAB %, rank, rostered %).
2. Tag each claim with nflverse usage for every week so far: snap %, target share, targets, carries, red-zone looks (route share only if a source reports it).
3. Verdict per player:
   - **role change**: usage rose and held across 2+ games, or a starter is out for multiple weeks.
   - **injury-driven**: tied to one injury; if the starter is back today, downgrade to stash or watch.
   - **one-week noise**: a TD or long play on thin volume (under ~15% target share or ~10 carries).
   - **consensus**: how many independent sources flag the player.
4. Include the owner's players: flag any starter whose usage fell, even if points held.

## Same-day Tuesday afternoon delta (before Wed clear)
After the main Tuesday midday sweep, run a **Tue afternoon delta pass** once any late free sources that usually post after midday are up (same free list above; append only new claims). Refresh ECR or other source caches if pulled again. Do this **before** Wednesday waiver clear / results. If those posts are already in the morning run, the delta is a no-op (stay quiet).

## League cross-check
Find each flagged player's league status (rostered by whom, free agent, or waivers) with `fa` and `snapshot` (redzone-espn-league-ops) or Sleeper rosters. Rank moves for the owner's roster by:
- **Value:** ESPN season projection plus FantasyPros ROS rank, weighted by verdict and consensus.
- **Need:** starting holes, byes two weeks ahead, injured starters, handcuffs to the owner's backs.
- **Cost:** a bottom-tier drop only (never a franchise tag), FAAB within the cap, or waiver priority. A player whose game has started may not be droppable until the week ends.
Output 1-3 ranked moves (add, drop, bid or priority, timing) for the Tuesday review, plus a watchlist with the trigger that would promote each name.

## Learning loop
- Each Tuesday, grade claims from 1-3 weeks ago: hit (role or production held), miss, or push, with numbers in outcome.
- Keep `research/source_scores.csv` (`source,claims_graded,hits,misses,hit_rate,last_updated`), split by claim type when the sample allows.
- Weight sources equally until about 3 graded weeks, then weight consensus by hit rate: a player flagged by high-hit sources outranks raw source count.
- Write one or two lessons a week to season_notes.md (e.g. "TD-only TE breakouts missed 4 of 5; require 15%+ target share").

## Report (in Tuesday review)
Lead with 1-3 moves (action, reason, sources, confidence), then radar (3-6 one-liners), then owner warnings. Cite sources; phone-short.
