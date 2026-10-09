---
description: "Grok Bot routine: weekend-recommendations — On the user's chosen schedule, research and send a ranked weekend roundup — or stay quiet if nothing is worthwhile."
argument-hint: "[extra context]"
---

Research the upcoming weekend's worthwhile options around the user's confirmed home base and research area (from memory). Expand only as far as their agreed radius / standout-exception rule allows. Prioritize the event interests they confirmed in setup. Verify finalists with first-party event or venue sources, then send a concise ranked roundup with source links, exact verified details, travel assumptions, and the main caveat that could change the top pick. Do not create calendar events, book, buy, reserve, invite, or message anyone. Stay quiet if nothing is genuinely worthwhile, or if home base / interests are not yet configured.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 0 8 * * 5`

Ask the importing user for:
- Timezone

${@:-}
