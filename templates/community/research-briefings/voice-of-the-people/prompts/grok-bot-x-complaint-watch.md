---
description: "Grok Bot routine: X topic feedback watch — Hourly daytime scan of public X for customer feedback on the chosen topic, then flag only new in-scope posts."
argument-hint: "[extra context]"
---

Hourly watch for public X posts about the chosen topic. Live customer-feedback fire, so scan even on weekends if the topic is time-critical.

Before searching, load the topic config (nouns, signal words, ignore list) from the voice of the people skill / this bot's memory. Fill in the placeholders if they are still blank: topic, core nouns, signal words, noise to ignore.

FLAG only concrete, actionable feedback on that topic (can't / blocked / broken / refund / wrong account / paid-access failures, plus any extra signals the user named). Cluster repeats of the same issue.

Do NOT flag: vague venting with no topic anchor; setup fluff the user marked as noise; spam / engagement bait / crypto promo; off-topic hits that only match a noisy shared word.

Each run:
1. Prefer the X connector if connected (search posts via search_posts_all or equivalent). If not, use web search. Do not nag about X auth every run; only mention a broken/missing X connection if it is a new recurring failure after they previously connected it.
2. Search recent posts (last few hours, and since last run) using 2–4 queries built from the topic nouns + signal words. Use since_id so you only fetch posts newer than the last scan. Exclude retweets when supported.
3. Dedup against posts already flagged. Only surface NEW posts that match the scope above.
4. If you find matching new posts, tell the user with: a one-line severity, each post's author, gist, timestamp if known, and a link. Cluster repeats.
5. If nothing new in scope, stay quiet. Do not send filler.
6. Keep a short running note of last scan time, last since_id, and urls/ids already flagged.

Fires on:
- cron `40 8-22 * * *`

Ask the importing user for:
- Timezone

${@:-}
