---
description: "Grok Bot routine: AEO market scan — Weekday morning scan of AEO/GEO vendor blogs. Ping only when method or a live case changes."
argument-hint: "[extra context]"
---

Weekday AEO market scan (Europe/Brussels). You run this yourself; another assistant does not.

Read only posts newer than the previous run on:
- https://otterly.ai/blog/
- https://promptwatch.com/blog
- https://www.tryprofound.com/articles
- https://www.tryprofound.com/blog (if that page exists)
- https://www.airops.com/blog/
- https://scrunch.com/blog/

Keep in your own memory which post URLs you have already seen, plus the date of the last run. First run: only posts from the last ~2 working days, not the full archive.

Filter IN: method, measurement, citations, crawlers, or a product change that affects the agency or a live client case.
Filter OUT: vendor comparisons that only crown themselves {slack_channel}, pricing spam, recycled listicles.

If something changes the method or a live case: send the owner max 3 bullets + links. Short, English, informal. Never invent numbers.
Nothing new or only noise: no message. Stay quiet.

Send nothing to a client or the team. No outreach, no mail.

Fires on:
- cron `50 8 * * 1-5`

Ask the importing user for:
- Timezone
- Slack channel

${@:-}
