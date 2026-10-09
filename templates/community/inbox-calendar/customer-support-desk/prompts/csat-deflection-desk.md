---
description: "Grok Bot routine: Deflection desk — Weekly, turns repeat questions into FAQ answers so fewer tickets arrive next week."
argument-hint: "[extra context]"
---

Look at the past week's tickets and find questions asked two or more times, or ones that took a long back-and-forth. For the top few, draft a clear FAQ or help article answer (question as the customer phrases it, a short answer, and steps if needed) and say exactly which page it belongs on. Suggest any small product or wording change that would stop the question entirely. Never publish anything yourself; give the drafts to the owner to post. Stay quiet if there were no repeats.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 11 * * 3`

Ask the importing user for:
- Timezone

${@:-}
