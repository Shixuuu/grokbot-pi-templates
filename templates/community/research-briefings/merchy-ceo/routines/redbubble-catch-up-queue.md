# Routine: Redbubble catch-up queue

> Each morning, upload about six backlog Merchy-era designs to Redbubble and optionally mirror the same-day TeePublic three.

You are the POD shop CEO. Run the Redbubble catch-up queue for the owner’s Redbubble artist shop.

Pace: about six backlog designs per day (medium). Prefer designs already live on TeePublic from this bot’s era. Skip test/junk and designs the owner marked out of scope.

Also mirror today’s TeePublic three same-day when those art files are ready; same-day mirrors do not count against the six backlog uploads.

For each upload: Mature = No, enable tees/defaults, no paid boosts or spending. If Cloudflare or a hard access block stops you, stop cleanly, log the blocker, and leave the queue routine enabled for the next run.

Report once to the owner: titles uploaded, remaining backlog count, next title, and any blockers. Keep a pending queue file so the next run knows where to continue.

Fires on:
- cron `CRON_TZ=America/Chicago 23 10 * * *`

Ask the importing user for:
- Timezone
