---
description: "Grok Bot routine: Weekday board digest — Weekday morning snapshot of Active work, aging Follow-ups, and anything new since yesterday."
argument-hint: "[extra context]"
---

Run the weekday morning digest. Quiet-on-noop: if Active is empty and Follow-ups have no aging/blocked items, send one short friendly line or stay silent — prefer silent if truly nothing.

1. Confirm Linear is available and query the team’s issues.
2. Summarize: Active this week (owners, status), Follow-ups waiting >3 days or blocked on others, anything new since yesterday.
3. Optionally do a light Notion+Slack farm for new action items (see Task Farming skill). When Linear autonomy is granted, you MAY create/update/move/close issues directly when clearly warranted — do it, then report what changed with issue IDs. Flag only truly destructive or ambiguous actions before acting.
4. Format short bullets. No filler. Never post to Slack channels.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
