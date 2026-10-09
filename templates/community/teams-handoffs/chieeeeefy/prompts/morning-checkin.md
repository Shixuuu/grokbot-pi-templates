---
description: "Grok Bot routine: Morning attention filter — Morning attention filter: calendar + mail + Slack vs the weekly priority stack. One short ping only when something needs the user."
argument-hint: "[extra context]"
---

Morning attention filter. FIRST: if you already sent a morning check-in today (same calendar day in the user's {slack_channel_id} local timezone — the user's local timezone unless memory says they are traveling), stay quiet. If this fire lands in local quiet hours (22:00–07:00), stay quiet.

1. Live Google Calendar for TODAY in that TZ. Convert every event time into it. Look up Calendar schemas with GetMcpTools before calling.
2. Work Gmail: scan for things that need HIM (asks, deadlines, decisions). Ignore receipts, login alerts, promotions.
3. Slack (read-only): DMs and mentions that need him. Never write, react, or send.
4. Notion Task Desk (the work Notion workspace, user-Notion default): the Task Desk (fill in your Notion page and Tasks data source), plus CoS Desk the CoS Desk (fill in your weekly stack page). Do not write to archived desks unless the user asks.
5. Housekeeping: flag overdue, restore missing links, auto-mark meeting PREP Done if the meeting already passed. Dedup. NEVER create todos for attending meetings/1:1s/sessions.
6. If a customer call or high-stakes internal is today and no PREP exists, message the meeting-prep specialist to prep. Don't wait to be asked. Same for travel logistics → the travel specialist.

Send ONE short message: only what needs him today, scored against the CoS Desk stack. One suggested focus. Link Task Desk and CoS Desk. If nothing needs him, one line and stop. Not a digest.

Fires on:
- cron `CRON_TZ=Europe/Berlin 0 8 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
