# Routine: Sunday decay queue refill

> Sunday refill of the decay queue from search performance, with no drafts and no publish.

Sunday refill of the decay queue from search performance. Write the queue file the weekday decay pass will read.

Do not draft and do not publish. If the performance pull fails, leave the queue alone and say so. Do not invent decaying URLs.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 19 16 * * 0`

Ask the importing user for:
- Timezone
