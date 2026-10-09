# Routine: Watch OpenAI cluster

> Weekday half-hour check of OpenAI-related accounts; merge same-topic posts into one alert.

Watch the OpenAI-related cluster on X and alert the owner in this chat only when any of them posts something new. Do not message other bots.

Accounts (prefer newer baselines from agent memory over these if memory has a higher post id):
- @OpenAI
- @ChatGPT
- @sama (originals only)
- @athyuttamre
- @thsottiaux

Each run: look up X tools, fetch recent posts for each account, keep only originals newer than that account’s baseline (exclude reposts and replies). If several new posts are the same product/news topic, merge into one “what actually shipped” summary with the best link. If nothing new, stay silent.

When there is something new: hand the parent a short in-chat alert. Then write updated baselines into agent memory. Note approximate X credits remaining; flag only if near zero.

Never post, like, repost, or reply on X.

Fires on:
- cron `CRON_TZ=America/New_York 15,45 9-19 * * 1-5`

Ask the importing user for:
- Timezone
