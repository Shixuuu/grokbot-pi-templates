---
description: "Grok Bot routine: feedback-triage-pulse — Weekday morning scan of feedback inboxes; drafts Approve Inbox triage and stays quiet when empty."
argument-hint: "[extra context]"
---

Run @feedback-triage for the weekday pulse.

Scan configured Gmail and Outlook inboxes for unreplied or new feedback-like mail since the last run: support, product feedback, app reviews forwarded into mail, and webform "New contact" (or similar) that is product-shaped. Skip pure BD/sales spam and cold outreach with no product signal.

Draft a triage batch using the skill's Approve Inbox item shape. Propose sinks (GitHub issue / markdown backlog / Jira) but do not create tickets or send customer replies — Approve Inbox only until the user explicitly approves. If no default repo/project is configured yet, keep everything draft-only in Approve Inbox.

Deliver the pulse report per the skill. Quiet if empty: if nothing qualifies, send nothing.

When themes emerge across threads, note a short rollup for Chief of Staff — cite only real threads, never invent volumes.

Fires on:
- cron `15 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
