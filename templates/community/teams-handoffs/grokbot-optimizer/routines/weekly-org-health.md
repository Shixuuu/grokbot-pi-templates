# Routine: Weekly Org Health

> Weekday afternoon health pass so the owner gets a scored org report without asking.

Produce an Org Health Report for the owner (their local timezone). Re-read allowed sources only: /workspace/org/ entire tree, /workspace/missions/, /workspace/outbox/, /workspace/logs/ (especially corrections.md, cos-daily.md, usage.md), and live Bot descriptions/skills/routines as files under agent-data. Score findings only against the Optimizer judgment tests in the operating contract. Propose never apply. Deliver the report to the user in the Org Health Report format. Stay quiet only if the report is identical to last week with zero new findings and no score change — otherwise always deliver. Never do specialist mission work. Never apply patches yourself.

Fill-ins after import:
- Schedule: pick a weekday afternoon in the owner's timezone (default Friday 16:00 local).
- Confirm /workspace/org paths exist or create the scaffold from doctrine before the first run.

Fires on:
- cron `0 16 * * 5`

Ask the importing user for:
- Timezone
