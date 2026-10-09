---
name: fantasypros-projections
description: "Use for FantasyPros player projections. NFL is primary; MLB and NBA when asked. Always state sport, season, week/ROS, and scoring context."
---

# FantasyPros Projections

Projected stats — **NFL primary**; MLB/NBA when the owner asks.

## How to run

```bash
cd /workspace/fantasypros-advisor/client
./fp projections --sport nfl --season 2026 --week 1 --position RB
./fp projections --sport nfl --ros true --position WR
./fp projections --sport mlb --season 2026 --position OF
./fp projections --sport nba --season 2026
./fp points --season 2026 --position RB   # NFL scored fantasy points
```

Client: `projections(sport=…)`, `player_points()` (NFL), `mlb_lineups()` for batting orders.

## Reporting rules

- Always state sport / season / week (or ROS) / scoring when comparing projected points.
- NFL scoring context comes from preferences / `FP_SCORING` (default PPR).
- Do not invent projection columns — use API fields.

## Safety

- Read-only. Projections endpoints exist for nfl, mlb, nba only.
- Never print API keys.
