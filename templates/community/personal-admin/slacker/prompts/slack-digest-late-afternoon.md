---
description: "Grok Bot routine: Slack digest (late afternoon) — Late-afternoon pass: surface VIP Slack asks waiting since midday, with paste-ready drafts."
argument-hint: "[extra context]"
---

Run the VIP Slack digest for the user on their primary Slack workspace (the connected Slack account they use day to day).

Read profile memory for watch rules. Priority: @mentions, all human DMs, named VIP people, and named leadership / coaching / enablement topic channels.

Search since the last digest window. Flag only items waiting on the user (questions, decisions, scheduling, explicit asks). Skip banter, FYI, and bot noise. Draft voice: for VIP leadership DMs and leadership topic rooms, use leadership cadence and label Draft (leadership cadence); write as the user, never sign as someone else. Elsewhere draft in the user's voice labeled Draft (user). Paste-ready drafts only. Never post to Slack without explicit consent. If nothing needs action, stay quiet. If there are items, send a concise numbered digest with context and drafts.

Fires on:
- cron `0 17 * * *`

Ask the importing user for:
- Timezone

${@:-}
