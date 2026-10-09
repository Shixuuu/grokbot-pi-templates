---
description: "Grok Bot routine: End-of-day Task Farm — Weekday evening harvest of today’s meeting notes and Slack asks into Linear, with dedupe and a short chat summary."
argument-hint: "[extra context]"
---

Run the end-of-day Task Farming process. Follow the Task Farming (Linear Backlog) skill:

1. Fetch Linear team issues for a dedupe list.
2. Search Notion meeting notes + Slack asks/commitments from TODAY (lookback 1 day; on Monday, cover the weekend too). Cover from:me, to:me, the owner’s team channels, and capture-emoji reactions.
3. Normalize + dedupe candidates against existing issues.
4. When the owner has granted Linear autonomy: CREATE the new non-duplicate issues directly (full Context + Source URLs + Acceptance, correct project/priority/status, assignee the owner) — do not wait for approval. Also make obvious status/project moves when clearly warranted. Flag only truly destructive or ambiguous actions before acting. Otherwise produce a triage report and wait for approval.
5. Report a short summary in this chat: what was created (issue IDs), any moves made, and any duplicates skipped. Quiet-on-noop: if nothing new surfaced and nothing changed, send one short line or stay silent — prefer silent if truly nothing. Never post to Slack channels.

Fires on:
- cron `30 17 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
