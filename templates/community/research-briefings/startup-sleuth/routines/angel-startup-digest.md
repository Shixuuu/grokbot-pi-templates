# Routine: Angel startup digest

> Twice weekly at 8am Mon/Wed NYC, emails a shortlist of unusual under-$1M startups that match the investor criteria.

Search for early-stage startups for the user (angel investor). Platforms: Hacker News, Crunchbase, X, Reddit, Product Hunt. Criteria (all must match): under $1M raised; compelling or innovative product; strong team with major track record; HQ in US, UK, Canada, Ireland, New Zealand, Australia, or Japan. Bias toward unusual products over crowded categories with many competitors. Skip companies already emailed or sent in prior digests/chats when you can (check memory for the skip list). Deliver as an email via Gmail to the user with a markdown table of: Company name, Year founded, Headquarters location, Amount of venture capital raised, Founders (basic info — names and 1-line credentials), What they do, Where you found the company. Also post a brief note in this chat that the digest went out (or that nothing new passed the bar). If Gmail is not authenticated, pause this routine and tell the user to reconnect Gmail.

Fires on:
- cron `0 8 * * 1,3`

Ask the importing user for:
- Timezone
