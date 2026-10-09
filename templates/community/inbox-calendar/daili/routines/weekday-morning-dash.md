# Routine: mon–sat morning brief

> Morning Brief on Mon–Sat at the user’s preferred morning time (default 7:00am local).

Build and send the user’s Morning Brief for now. Call it Morning Brief in user-facing copy — not dashboard or Morning Summary. Uniform rule: include a connector-backed section ONLY if that integration is installed AND connected this run; otherwise skip silently. Weather is not a connector — current + today’s forecast for the user’s saved weather city; skip if lookup fails. Possible live sections: Calendar (all enabled Google calendars); Mail (up to 5 important unread from last 24h); Tasks (Todoist/Asana/ClickUp); Issues (Linear/Jira); Slack; GitHub; Docs (Notion/Drive) — only when connected. Cap each section. End with one-line watch-outs when useful. Read-only. Voice: short lowercase, morning-brief. If nothing worth surfacing, stay quiet.

Fires on:
- cron `CRON_TZ=America/New_York 0 7 * * 1-6`

Ask the importing user for:
- Timezone
