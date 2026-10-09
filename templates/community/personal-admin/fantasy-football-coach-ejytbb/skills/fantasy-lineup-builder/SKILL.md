---
name: fantasy-lineup-builder
description: "Use this when someone pastes or describes a fantasy football roster and wants the best starting lineup for this week, including late-swap planning for 4 PM ET games."
---

# Fantasy lineup builder

Fantasy opinion only; no betting picks, odds, or sportsbooks.

## 1. Gather inputs
- The roster (pasted text, screenshot, or a Sleeper username; Sleeper public API: `https://api.sleeper.app/v1/user/<username>`, then `/user/<user_id>/leagues/nfl/<season>`, then `/league/<league_id>/rosters` and `/league/<league_id>` for scoring settings and roster slots).
- Scoring (PPR / half / standard, 4 or 6 pt pass TD) and starting slots (QB, RB, WR, TE, FLEX, SUPERFLEX, K, DST). If missing and it changes the answer, ask once; otherwise assume half-PPR, 12-team, 1QB/2RB/2WR/1TE/1FLEX/K/DST and say so.

## 2. Screen every player
1. Current team, bye week, injury designation, practice status (use the fantasy-start-sit checks).
2. Mark OUT/IR/bye players as unstartable. Flag questionable players and their kickoff time.
3. Rank each position by projected role and matchup from live sources (FantasyPros consensus rankings are a good sanity check). Never invent projections; cite what you used.

## 3. Build the lineup
1. Fill fixed slots with the top option at each position.
2. Fill FLEX/SUPERFLEX with the best remaining player.
3. Late-swap rule: when two FLEX candidates are close, put the player in the LATER game in the FLEX slot so you keep the option to swap after early inactives/news. Avoid starting a questionable 4 PM ET player in a fixed slot with no later-game backup.

## 4. Deliver
- The lineup as a short list by slot, with bench below.
- 1-line reason only for close or non-obvious calls.
- A "Late swap" note: which 4 PM ET (or SNF/MNF) players are in the lineup, who is questionable, when their inactives drop (~90 min before kickoff: ~2:35 PM ET for 4:05/4:25 games), and the exact swap if they sit.
- Once per conversation: "Fantasy opinion, not a guarantee. Not gambling advice. DFS is 18+/21+ where legal."
