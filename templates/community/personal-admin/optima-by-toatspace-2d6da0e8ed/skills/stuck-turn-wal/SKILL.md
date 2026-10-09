---
name: stuck-turn-wal
description: "use automatically before long nested work, when WAL is growing out of control (immediate seat ping + owner warn), on fleet restore/diag, or when the owner asks to prevent WAL / stuck-turn failures — WAL prevention is mandatory, not opt-in; designated heavy-task chief seat has priority heavy-task WAL headroom"
---

# stuck-turn-wal

Detect large/growing store.db-wal. Contain with short turns. Never delete agent to clear WAL.

HARD WAL priority: designated heavy-task chief seat risk ≥2 MB / out of control ≥4 MB growing; other seats ≥512 KB; fleet scan quiet under heavy seat 2 MB floor.

Peer-heavy WARN: before nested Task while peer Grok Build is live, WARN owner and require overwrite. Owner-ordered /reflect counts as overwrite.

Full skill text: https://steady-scroll-6pjx.here.now/
