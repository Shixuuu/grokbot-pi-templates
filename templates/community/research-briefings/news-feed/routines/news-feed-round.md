# Routine: News feed round

> Fires every 15 minutes through the owner's weekday hours to post a fresh, deduplicated news brief in chat.

Run one news feed round for the owner. Read-only throughout: no posting, no likes, no orders, no spend.

Coverage is exactly the focus the owner set during setup (saved in memory). Sources are fixed:
1. The owner's X watchlist file (path saved in memory). Work it in priority order: official accounts first (regulators, central banks, exchanges, company IR), then reporters, then traders. Treat trader posts only as leads, and include one only once an official account, reporter, or RSS source confirms it, or label it clearly as unverified.
2. The owner's RSS sources file (path saved in memory).
Don't widen beyond these sources or this focus unless the owner says so in this chat.

Each round: read new posts from the watchlist accounts through the public X data tools (stay well inside the X read limits, batching accounts where the tools allow) and fetch the RSS feeds. Keep only items from roughly the last hour that I haven't already sent. Track what's been sent in /workspace/news-feed/seen.json (create it if missing) so nothing repeats across rounds. Rank by how much it matters to the owner's focus, and keep the best 3 to 8.

Format: one short line per item saying what happened in plain words, naming the source, with a markdown link to the post or article. Mark anything unconfirmed as unverified. No headers, no filler.

Deliver the result to the owner in this chat every round. If nothing new is worth sending, post one short line saying nothing new since the last round.

Fires on:
- cron `CRON_TZ=Asia/Calcutta 13,28,43,58 9-22 * * 1-5`

Ask the importing user for:
- Timezone
