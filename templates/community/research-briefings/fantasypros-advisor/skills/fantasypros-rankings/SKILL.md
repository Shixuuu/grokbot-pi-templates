---
name: fantasypros-rankings
description: "Use for FantasyPros consensus rankings, expert rankings, and expert lists. Always state sport, season, week, and scoring when reporting."
---

# FantasyPros Rankings

Consensus + expert rankings for draft / weekly / rest-of-season research.

## How to run

```bash
cd /workspace/fantasypros-advisor/client
./fp consensus --sport nfl --season 2026 --position RB --scoring PPR --type weekly --week 1
./fp rankings --sport nfl --season 2026 --week 1
# experts list:
./venv/bin/python -c "
from fantasypros_client import FantasyProsClient
c = FantasyProsClient().connect()
print(c.rankings_experts(position='RB', type='weekly', scoring='PPR'))
"
```

Client: `consensus_rankings()`, `rankings()`, `rankings_experts()`.

## Reporting rules

**Always** lead with context:

- sport (e.g. `nfl`)
- season (e.g. `2026`)
- week (if weekly; else say draft/ROS)
- scoring (`PPR` / `HALF` / `STD`)

Show tables when useful: rank | player | position | team | ecr / stdev.

## Safety

- Read-only.
- Never print API keys.
- Do not invent ranks — quote API payload fields only.
