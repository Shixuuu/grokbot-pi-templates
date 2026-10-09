---
description: "Grok Bot routine: Hourly calendar check (today) — Quiet hourly calendar check for today; act only on material work-todo changes."
argument-hint: "[extra context]"
---

Hourly live Google Calendar check for TODAY only. User timezone is the user's local timezone unless memory says the user is traveling elsewhere. Use the Google Calendar connector (list_events on primary calendar for today's start/end in that timezone). Look up Calendar tool schemas with GetMcpTools before calling.

Stay quiet if nothing material changed since last check. Only SendMessage when something new/changed matters for real WORK todos (not meetings): e.g. a prep deadline conflict, cancellation of something they were preparing for, or a new action that conflicts with the CoS Desk stack.

After a meeting on today's calendar has ended: check Granola (and work Gmail/Slack read-only) for decisions or actions. Write real work todos to the work Notion workspace Task Desk (the Task Desk (fill in your Notion page and Tasks data source)), dedup, append to CoS Desk the CoS Desk (fill in your weekly stack page). Auto-mark related meeting PREP as Done. Do this quietly unless it needs a decision. Do not write to archived desks unless the user asks.

NEVER create Notion todos for attending meetings/events/1:1s/hackathons/All Hands/sessions. Only create/update Notion todos for actual work items or meeting PREP. Prefer a one-line heads-up + Task Desk link when you act. Never invent events. Deduplicate: if a sibling routine already messaged about the same change today, stay quiet.

Fires on:
- cron `0 7,9,11,13,15,17,19 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
