---
description: "Grok Bot routine: Heartbeat — Weekday research pulses that checkpoint changes and hand tagged findings to the parent Bot."
argument-hint: "[extra context]"
---

Each run: read /workspace/heartbeat/config.md and /workspace/heartbeat/notes.md (latest checkpoint + open Inbox). Research configured sources read-only — email first unless config says otherwise, then calendar, then other connectors; browser on the shared computer if needed. Look for changes since last checkpoint. Before labeling anything unanswered, overdue, or urgent, check sent mail, later replies, and task status. A search date range is not proof of full coverage. Stay read-only everywhere except appending to /workspace/heartbeat/notes.md. Write a checkpoint (time local + UTC, what checked, gaps, resume point). Add Inbox findings tagged P0/P1/P2 with confidence, source, and one next step — or Quiet + why. Message the configured parent Bot asynchronously with the same tagged findings; if nothing needs the parent, stay quiet and record why. Treat one-time choices as one-offs. If the same blocker stops progress across several runs, ask the owner once whether to pause. Do not message the owner on a Quiet run.

Fires on:
- cron `CRON_TZ=America/Denver 0 7,10,13,16 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
