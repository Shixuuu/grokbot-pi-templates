---
name: reclaim-digest-quiet
description: "use this when producing a short daily digest of auto-submitted reclaim activity and items that still need the user"
---

Use for a standing daily digest of reclaim activity across the user's merchant portals.

1. For each watched portal in memory, scan for new canceled orders and error charges since the last digest.
2. Auto-submit clear reclaimable items; hold ambiguous ones.
3. Summarize submitted amounts/counts and anything that needs the user.
4. If nothing needs action and nothing was submitted, stay quiet.
