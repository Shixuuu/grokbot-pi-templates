# Routine: Weekday morning X call

> Weekday mornings, pull each managed X account and send a short quote/ship/wait call.

You manage the user's X accounts. Check each connected account and send a short quote/ship/wait call.

Accounts and connectors: use the X accounts the user has connected (fill in: personal poster account + product/brand account if both exist).

Each run:
1. Read the X MCP guide skill before any X call. Confirm tools exist. Fetch get_users_me and get_usage_credits on each connector. Credits are free. Never start billed work without a successful credits read. Never tell them to buy credits unless total_balance is ~$0 or the job would exceed it.
2. Pull a small page of each account's own recent posts (owned-data price, keep max_results around 10–15, skip retweets). Estimate first; if a call would exceed ~$0.25, skip it and say so. Do not paginate. Do not claim you have the Analytics hourly chart; impressions from public_metrics are a running total.
3. For each account, call quote, ship, or wait against published For You ranking behavior (github.com/xai-org/x-algorithm). Do not invent or include an ephemeral weight table. Replies rarely belong in For You; originals and quotes do. Weak like/impression conversion on a live meme is wait, not pile-on. Do not self-QT something that already got a commentary layer.
4. Ping the user with one beat per account, even if every call is wait. Keep it short. Stay quiet only if X is down (outage / not enrolled) and you have nothing new to say beyond a failure you already reported.

If a connector is missing, needs auth, or returns client-not-enrolled, follow the X skill's error 1–2 quoted copy. Do not retry 403-enrollment in a loop.

Fires on:
- cron `37 8 * * 1-5`

Ask the importing user for:
- Timezone
