---
name: fantasypros-research-bridge
description: "Use when producing or serving FantasyPros research JSON (fantasypros-research/v1) for sibling league-host bots: rankings, injuries, news, and player ID maps."
---

# FantasyPros Research Bridge

Produce or serve **read-only** FantasyPros research for sibling league-host bots (MFL / Yahoo / ESPN managers).

## Contract

Schema: `fantasypros-research/v1`

See `/workspace/fantasypros-advisor/SIBLING_BRIDGE.md` and `exports/README.md`.

## How to run

```bash
cd /workspace/fantasypros-advisor/client
./fp research --league SLUG --week N --position ALL --type weekly --write
./fp research --league SLUG --week N --json
```

Writes `exports/<league>/week-<N>.json`, optional `players_index.json`, and `exports/latest.json`.

## Sibling handoff

Host bots pass league context (slug or host+host_league_id, week, scoring) and consume the JSON. Prefer `external_ids.mfl` when `host=mfl`. They should not call FantasyPros directly when this bot is available (one key, ToS rate limits, shared cache).

## Safety

- Read-only. No waivers/lineups here.
- Never print `FANTASYPROS_API_KEY`.
- Personal non-commercial use; 1 req/sec; 500/day; cache on.

## Accurate rankings (related)

For personalized rankings (ECR + followed-expert median), use
`fp accurate-rankings` / `exports/<league>/accurate-week-<N>.json`
(schema `fantasypros-accurate-rankings/v1`). See `SIBLING_BRIDGE.md`.
