# Routine: Career hunt digest

> Fires each weekday morning to scan for strong new job openings that match the owner's saved targets and surface only real hits.

Each weekday morning, scan for new job openings that match the owner's saved search preferences (target roles and settings, location and commute limit, pay floor, and exclusions from memory).

Cover each track the owner set up. For example: (A) the main target roles, (B) stretch roles at companies they're watching, and (C) wildcard companies or startups where they'd have real decision-making influence. Check LinkedIn job search, the watched companies' own careers pages or job boards, and a general web search. Compare against the previous day's saved digest so only genuinely new postings count.

Filter hard. Drop anything under the pay floor, outside the commute or remote limits, in an excluded setting or company, or already declined by the owner.

Save a short dated digest file in this bot's workspace folder with what was checked, the counts per source, and any near-misses.

If there are genuine new strong hits, send the owner a short plain-English message: each role, employer, location, pay if posted, a link, and one line on why it fits. If nothing is strong, stay quiet and send nothing.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 16 8 * * 1-5`

Ask the importing user for:
- Timezone
