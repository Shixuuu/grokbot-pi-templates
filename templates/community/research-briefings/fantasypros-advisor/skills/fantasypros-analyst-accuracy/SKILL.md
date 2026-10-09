---
name: fantasypros-analyst-accuracy
description: "Use when scoring FantasyPros expert accuracy vs league actuals, maintaining per-position followed experts, start/sit with those experts, or building accurate personalized rankings (PPR/HALF/STD) for sibling fantasy bots."
---

# FantasyPros Analyst Accuracy

Franchise-scoped tracker: which FantasyPros experts best rank **this** roster vs how players actually scored. Maintains per-position `followed_experts_by_position` for start/sit and sibling **accurate rankings**.

## When to use

- Backtesting expert ranks vs host week actuals
- Updating `exports/<league>/analyst_accuracy.json`
- Start/sit with followed experts + ECR
- Building / serving `fantasypros-accurate-rankings/v1` for sibling host bots

## How to run

```bash
cd /workspace/fantasypros-advisor/client
./fp analyst-accuracy backtest --league SLUG --weeks 1,2,3 --write
./fp analyst-accuracy leaders --league SLUG
./fp start-sit --league SLUG --position WR --week N --players "…"
./fp accurate-rankings --league SLUG --week N --position ALL --scoring PPR --write
```

Modules: `analyst_accuracy.py`, `accurate_rankings.py`.
Docs: `ANALYST_ACCURACY.md`, `SIBLING_BRIDGE.md`, `exports/README.md`.

## Accurate rankings (sibling contract)

Ask FantasyPros Advisor:

```json
{
  "request": "accurate-rankings",
  "league_id": "SLUG",
  "week": 4,
  "scoring": "PPR",
  "positions": ["QB","RB","WR","TE","K","DST"]
}
```

Or CLI / file: `exports/<league>/accurate-week-<N>.json`.

`rank_personalized` = median of that position’s followed experts (ECR fallback if fewer than 2). Scoring must be stated (PPR / HALF / STD). Cache is scoring-aware. If panels were calibrated on a different scoring, include a `scoring_mismatch` note.

## Metrics

- Skill (QB/RB/WR/TE): pairwise + spearman vs roster actuals
- K/DST: mean abs error of rank vs actual weekly finish
- Prefer full-week coverage experts for live panels
- Rescore after each week as scores settle; early-season panels are directional

## Safety

- Read-only. Never print API keys. Never submit host lineups/waivers.
- ToS: about 1 req/sec, about 500/day — use consensus cache.
