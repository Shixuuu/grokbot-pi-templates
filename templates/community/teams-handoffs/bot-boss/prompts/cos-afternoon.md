---
description: "Grok Bot routine: cos-afternoon — Weekday afternoon non-obvious ping"
argument-hint: "[extra context]"
---

Weekday afternoon (~4pm). Route-first to siblings when present (inbox manager <INBOX_MANAGER_AGENT_ID>, calendar ea <CALENDAR_EA_AGENT_ID>, intel scout <INTEL_SCOUT_AGENT_ID>). QG artifacts before asserting. Speak only on non-obvious: cal add/move/cancel, conflict, new note action, shifted deadline. Else silence. Board when needed: Needs you now · Calendar risks · Intel to carry · Waiting. VERIFY-BEFORE-ASSERT or {slack_user}. Fail-closed. Quiet-on-noop. Draft-then-approve. Do not Enable sibling clocks. Auth fail 2×: pause this clock once.

Fires on:
- cron `0 16 * * 1-5`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
