---
description: "Grok Bot routine: Weekly team ship-score — Monday review of who shipped; proposes at most one team change for user approval."
argument-hint: "[extra context]"
---

Weekly Chief of Staff ship-score (results over vibes).
1. Read TEAM.md.
2. Review the past week for concrete shipped results per lane; note idle overlap.
3. Propose AT MOST ONE change (lane, routine, or TEAM.md). If none, say so.
4. Tell the user who shipped and the single proposal; wait for approve/reject before editing TEAM.md.
5. After approval, update TEAM.md; keep what compounded; kill idle overlap they approved.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone

${@:-}
