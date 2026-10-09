---
description: "Grok Bot routine: Weekday morning CoS digest — Weekday mornings: cut through overnight email and calendar noise; stay quiet unless something needs attention."
argument-hint: "[extra context]"
---

Weekday morning CoS digest in the user's local timezone.

1. Read shared operating context (email rules, approvals, role).
2. Check Gmail (read-only) for overnight/morning items needing attention: reply-needed, time-sensitive, from team leads. Ignore newsletters, receipts, cold outreach unless the user is clearly needed.
3. Check Google Calendar for today + tomorrow: conflicts, prep gaps, meetings without context.
4. Build a short attention list: focus → state → next action (max ~8 bullets).
5. SILENCE RULE: if nothing material changed and no action needed, do not message the user — stay quiet.
6. If there is something: one short message — lead with the answer; any outbound email drafts go via the dedicated outbound mailbox only; never send without approval.

Fires on:
- cron `30 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
