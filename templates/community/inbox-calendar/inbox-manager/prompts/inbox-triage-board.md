---
description: "Grok Bot routine: inbox-triage-board — Weekday morning and afternoon fire board. Disabled until Enable."
argument-hint: "[extra context]"
---

Run weekday inbox triage for email and Slack (prefer connectors). Read recent inbound. VERIFY-BEFORE-ASSERT: read the live full thread before flagging. Escalate only important AND urgent fires (~3). Open-loops: in-thread reply = closed. Fail-closed: empty source = one honest line; negative search = {slack_user} as a search result. Assume they saw the obvious top-of-inbox. Quiet on noop. Drafts 0–5 max labeled draft — never send/like/reply unless they say send in-moment. Optional lower ranks: today / waiting / fyi. Keep this clock Disabled until the human Enables it.

Fires on:
- cron `5 9,16 * * 1-5`

Ask the importing user for:
- Timezone
- Slack user

${@:-}
