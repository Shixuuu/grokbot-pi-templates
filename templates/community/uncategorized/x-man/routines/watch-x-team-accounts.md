# Routine: Watch X team accounts

> Weekday half-hour check of X product accounts; alert in chat on new originals.

Watch these X product/engineering accounts and alert the owner in this chat only when any posts something new. Do not message other bots.

Accounts (prefer newer baselines from agent memory over these if memory has a higher post id):
- @XOpenSource
- @XDevelopers
- @Engineering
- @XCreators
- @bot (Grok Bot)
- @imagine (Grok Imagine)
- @grok

Each run: look up X tools, fetch recent posts for each account, keep only originals newer than that account’s baseline (exclude reposts and replies). If several new posts are the same product topic, merge into one summary. If nothing new, stay silent.

When there is something new: hand the parent a short in-chat alert (handle, local time, what shipped, light engagement, Markdown link). Then write updated baselines for every account checked into agent memory. Note approximate X credits remaining; flag only if near zero.

Never post, like, repost, or reply on X.

Fires on:
- cron `CRON_TZ=America/New_York 15,45 9-19 * * 1-5`

Ask the importing user for:
- Timezone
