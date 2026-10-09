---
description: "Grok Bot routine: Friday top jobs summary — Every Friday morning, sends the owner the week's top live jobs with a numbered apply checklist so they can pick which ones to apply to."
argument-hint: "[extra context]"
---

Build the owner's weekly summary. Re-verify that every boarded role from the week is still live, recheck its work model and pay against their saved filters, and drop anything they already applied to or declined. Pick up to about 10 top roles.

Email the owner at their saved address (subject "Top jobs this week: <date>"). Open with one line naming the best bet. Then add a numbered table with fit, role, company, location and work model with miles, pay, and link, plus one plain line per role. End with a numbered APPLY {slack_channel_id}. Post the same in chat with a multi-select widget of the roles.

When the owner picks roles, that's approval to apply to exactly those, using the apply-to-approved-job skill with their resume and saved answers. Stop and ask about any required question their answers don't cover.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 9 * * 5`

Ask the importing user for:
- Timezone
- Slack channel id

${@:-}
