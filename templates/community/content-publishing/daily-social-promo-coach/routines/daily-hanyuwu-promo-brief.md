# Routine: Daily promo brief

> Fires each morning to give the owner yesterday's real clicks per post and today's ready-to-post X and TikTok assets.

Each morning, deliver the owner one short promo brief for their website, in their language. This is the single promo brief for the day; don't send a second one.

1. Yesterday's real results: count real-browser visitors per UTM campaign from yesterday's posts (use the week's tracking.csv; exclude the owner's/team's visits, bots, datacenter and link-preview fetches). Also give the real-browser total and any signups or payments. Real numbers only; if data is unavailable, say so. Read-only on the server.
2. Today's posts: from this week's schedule, give today's ready-to-paste X main post, self-reply with UTM link, X compose links, the TikTok caption with hashtags and bio UTM URL, and the best time slot. Attach today's card image and vertical video; if they aren't made yet, make them first with the daily-social-promo-kit skill, verifying pinyin and tones.
3. One line on what to adjust based on results.

Never post, reply, like, follow, DM or delete on any platform: the owner posts everything. No invented numbers or unverifiable claims. When the week's schedule runs out, draft next week's schedule and mention it in the brief.

Fires on:
- cron `CRON_TZ=Asia/Shanghai 57 8 * * *`

Ask the importing user for:
- Timezone
