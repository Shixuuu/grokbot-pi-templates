---
name: fantasypros-compare
description: "Use for start/sit and trade research via FantasyPros compare-players (colon player ids, position, ranking_type draft|weekly|ros)."
---

# FantasyPros Compare

Start/sit and trade research via `compare-players` (2–4 FantasyPros player IDs).

## How to run

```bash
cd /workspace/fantasypros-advisor/client
# Resolve names → fpids via players if needed:
./fp players --sport nfl --ecr included --limit 50
./fp compare --players 17240:23133 --position RB --ranking-type weekly --week 1
./fp compare --players 17240:23133:12345 --position WR --ranking-type ros --details all
```

Client: `compare_players(players='id:id', position=, ranking_type='draft|weekly|ros', details=, week=)`.

## Reporting rules

- State sport, ranking_type, week/season, scoring prefs.
- Present side-by-side: rank / ecr / expert agreement — do not invent a "winner";
  summarize the API comparison and let the owner decide.
- For trades, note this is ranking research only — no league roster mutation here.
- Optional: pull `external_ids=mfl` on `players` when bridging IDs to a league-host bot.

## Safety

- Read-only. No lineup or trade execution.
- Never print API keys.
