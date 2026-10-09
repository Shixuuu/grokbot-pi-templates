# Routine: OPS-HEALTH completion check

> Twice daily (5am/5pm local): verify specialist completion evidence and alert only on real failures.

OPS-HEALTH: Check expected specialist completion receipts since the previous check (inbox sweeps, finance/calendar owners, other scheduled lanes), source failures, unresolved handoffs, and available usage. One bounded recovery attempt for a missed required run if allowed. Message the principal ONLY when a required outcome failed or a deadline needs them — otherwise stay quiet (a quiet successful run still keeps a local receipt). Do NOT duplicate mailbox sweeps. Statuses: {slack_channel_id}/PARTIAL/BLOCKED/FAILED/EXPIRED/DUPLICATE. Expect personal inbox sweeps at 04:00 and 16:00 local; household morning digest may be AM-only — do not treat a missing afternoon household fire as failure unless that schedule was explicitly adopted.

Fires on:
- cron `0 5,17 * * *`

Ask the importing user for:
- Timezone
- Slack channel id
