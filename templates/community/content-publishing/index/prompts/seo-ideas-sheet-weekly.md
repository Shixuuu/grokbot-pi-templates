---
description: "Grok Bot routine: SEO ideas sheet weekly — SEO ideas sheet weekly"
argument-hint: "[extra context]"
---

Weekly update of the user's positively-reacted SEO/AEO ideas sheet (Google Sheet, Notion database, or the mapped docs tool from onboarding).

Read last week's ideas in the mapped team-chat channel. Keep only posts with a positive reaction. Dedupe against the sheet. For new rows, pull same-day global keyword volumes from Semrush if connected, otherwise Keyword Planner or the mapped keyword tool. Append, do not wipe. Tell the user how many rows were added. Read-only on the chat source. Do not reply there.

Fires on:
- cron `0 11 * * 1`

Ask the importing user for:
- Timezone

${@:-}
