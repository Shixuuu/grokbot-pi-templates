# Routine: X posts, 3x daily

> Fires morning, midday and evening to publish the next queued X post with its visual and keep the queue a week ahead.

Each run: confirm the product site is up (if it's down, don't post; tell the owner). Confirm the browser is signed in to the product's X account. Open the queue index and find the item for this date and slot. If its image or video is missing, generate it with the image helper using the saved prompt and brand guardrails (no real people, logos, fake numbers or readable UI). Post the text with its media, using the X connector if it can post, otherwise the signed-in x.com session. Mark the item posted in the queue index with the time and post link. If fewer than 7 days of posts remain queued, draft more in the same format (keeping sales posts under half of the week) and generate their media. Log everything in DEPLOY-LOG. Stay quiet unless something fails; on failure, tell the owner exactly what failed.

Fires on:
- cron `CRON_TZ=America/New_York 47 7,12,17 * * *`

Ask the importing user for:
- Timezone
