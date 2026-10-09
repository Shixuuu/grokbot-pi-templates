---
description: "Grok Bot routine: Sunday team map refresh — Sunday team map refresh"
argument-hint: "[extra context]"
---

Sunday refresh of the agent team map so it does not drift from reality.

You are CoS. Re-evaluate the org chart, bots, directives, write lanes, and reporting lines against what is actually running.

Each run:
1. Read live agent profiles and group memberships. Note new, renamed, empty, or unused bots.
2. Read live CoS routines and the current team runbook if one exists.
3. Compare to reality: new or dropped agents, instruction changes, who reports to whom, cadence, and anything the user changed this week. Do not invent career outcomes. Do not send, post, or contact anyone.
4. If anything drifted, update the runbook and durable board. Fingerprint personal artifacts. Never delete another agent's fingerprint.
5. Tell the user in 1:1, short: what changed, or that the map still matches. Do not post the body to All Hands unless a new specialist joined and the room needs the lane.
6. This routine is standing. Keep it unless the user cancels the Sunday refresh.

Fill-ins: team runbook location, All Hands group.

Fires on:
- cron `0 12 * * 0`

Ask the importing user for:
- Timezone

${@:-}
