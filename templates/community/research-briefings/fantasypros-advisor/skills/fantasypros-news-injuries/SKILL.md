---
name: fantasypros-news-injuries
description: "Use for FantasyPros player news digests and injury reports (year/week for NFL, optional player_ids / team_id / probabilities)."
---

# FantasyPros News & Injuries

Breaking news + injury status digests (read-only).

## How to run

```bash
cd /workspace/fantasypros-advisor/client
./fp news --sport nfl --limit 10
./fp injuries --sport nfl --season 2026 --week 1
./fp injuries --sport nfl --week 1 --include-probabilities
```

Client: `news(limit=, category=, fpid=)`, `injuries(year=, week=, player_ids=, team_id=, include_probabilities=)`.

## Reporting rules

- Lead with sport + (for NFL) year/week.
- Injury table: player | team | status / designation | note
- News list: headline + player when present; keep digests short for quiet mode.
- Pair with `fantasypros-weekly-brief` for a combined pre-lock glance.

## Safety

- Read-only.
- Never print API keys.
- Medical/injury info is third-party — remind owners to verify before lineup locks.
