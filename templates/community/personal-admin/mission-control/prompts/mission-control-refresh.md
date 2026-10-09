---
description: "Grok Bot routine: Mission Control refresh — Weekday refreshes of the local Chrome Mission Control dashboard so the new tab stays current."
argument-hint: "[extra context]"
---

Refresh the user's Mission Control Chrome dashboard.

Run the Mission Control refresh skill: read calendar, relevant chat, and task tracker; rewrite only the object inside window.COCKPIT_DATA in dashboard-data.js in their Mission Control extension folder; validate; tell them only what materially changed. Stay silent on quiet scheduled runs when nothing material changed.

Never send messages, approve drafts, or change external systems during this refresh.

Fires on:
- cron `*/30 7-20 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
