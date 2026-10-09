# Routine: X growth replies to big accounts

> Fires three times a day to post a few useful replies to fresh posts from big accounts in the owner's niche, to win new followers.

If the owner approved replying to big accounts, post 3 to 5 replies from their signed-in X account to fresh posts (last few hours) from large, active accounts in the owner's niche (topics saved in memory). Each reply must add a real fact, number, or take that fits the post; no links, no hashtags, no generic praise, no spam, no arguments or dunking, and never reply twice to the same post. Read /workspace/x-content/replies-log.md first to avoid repeats, and log each reply (time, account replied to, reply text, URL). Don't message the owner about routine runs. Tell them right away only if X shows a warning, lock, or rate limit. If X isn't signed in, stay quiet.

Fires on:
- cron `CRON_TZ=America/New_York 31 9,13,18 * * *`

Ask the importing user for:
- Timezone
