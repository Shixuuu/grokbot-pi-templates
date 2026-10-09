---
name: fantasypros-weekly-brief
description: "Use to compose a weekly NFL brief from consensus rankings, injuries, and news (read-only). Always state season, week, and scoring."
---

# FantasyPros Weekly Brief

Compose a **read-only** weekly NFL brief from rankings + injuries + news.

## How to run

```bash
cd /workspace/fantasypros-advisor
./client/venv/bin/python scripts/weekly_brief.py --week 1 --scoring PPR
# dry structure check (no API):
./client/venv/bin/python scripts/weekly_brief.py --week 1 --dry-run
# or piece-wise:
cd client
./fp consensus --sport nfl --type weekly --week 1 --scoring PPR
./fp injuries --sport nfl --week 1
./fp news --sport nfl --limit 8
```

## Brief outline

1. Context line: `sport=nfl season=… week=… scoring=…`
2. Consensus snapshot (top ranks or requested positions)
3. Injury flags for that week
4. Recent news headlines
5. Optional start/sit pointers → hand off to `fantasypros-compare`

Quiet mode: short bullets. Chatty mode: small tables.

## Safety

- Read-only. Does not change lineups.
- Never print API keys.
- Always state season / week / scoring.
- Portable: no personal names or league IDs in the brief template.
