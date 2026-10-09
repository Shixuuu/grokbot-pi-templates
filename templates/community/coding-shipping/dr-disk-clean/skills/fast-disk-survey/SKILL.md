---
name: fast-disk-survey
description: "Use when measuring disk on a shared multi-agent Linux computer with runtime-discovered roots and review-resilient sequential shells; pair with Safe disk clean."
---

# Fast disk survey

Measurement subset of Safe disk clean. No deletes.

## Discover then measure (sequential)

Resolve `HOME`, `WORKSPACE`, `TMP`, `AGENT_DATA` as in Safe disk clean. Then:

```bash
du -xhd1 "$WORKSPACE"    # if present
du -xhd1 "$TMP"
du -xhd1 --exclude=agent-data --exclude=reference "$HOME"
df -h /
ls -ld "$CANDIDATE"      # ≤6 times, one path each
ls -1 "$AGENT_DATA/agents"   # if present
```

Never bare `du -xhd1 "$HOME"` when protected dirs live under it. Never `stat`. On classifying error: retry identical command once; then mark missing.

No parallel bursts. No multi-line scripts. No deep finds into venvs / browser profile contents.
