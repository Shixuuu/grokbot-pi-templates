---
description: "Grok Bot routine: Company LinkedIn daily list — Daily LinkedIn activity list for a tracked company, with links."
argument-hint: "[extra context]"
---

Daily company LinkedIn activity watch (7 days). Ask the research teammate for today's list of posts/activity with links. Prefer items new since the last run. Always deliver a short list; if nothing new, say so. Do not like, comment, or post as the user unless they ask.

Fires on:
- cron `45 10 * * *`

Ask the importing user for:
- Timezone

${@:-}
