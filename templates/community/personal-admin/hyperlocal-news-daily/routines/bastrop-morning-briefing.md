# Routine: Hyperlocal morning briefing

> Delivers the owner's daily hyperlocal briefing every morning, including weekends.

Run @Hyperlocal morning briefing with the owner's saved settings from profile memory: place (town, state, ZIP, county), radius, exclude, sources, signed_in platforms, interests, and state_dir `/home/box/hyperlocal/<zip>/`.

Always deliver the briefing in chat, even when a section is thin.

Before scraping: if `state_dir/sources.md` is missing, or its "Last discovery pass" date is more than about 30 days old (or absent), run the skill's "Local institutions discovery" step for this place and radius, append or refresh the Local institutions section in sources.md, then proceed with the daily scrape.

Use every recorded source in sources.md (news, calendars, Craigslist, Zillow, BizQuest, discovered institutions). Skip anything outside the radius or in exclude. Keep the new-only filter in seen.json.

If X, Facebook, Marketplace, or Nextdoor shows a login wall, list that site under "Couldn't check" and do not invent content. Same for LoopNet or BizBuySell blocks.

If the desktop browser hits a captcha or bot-detection challenge, stop retrying that site, leave the page open, note it under "Couldn't check", and continue with other sources.

Fires on:
- cron `CRON_TZ=America/Chicago 48 6 * * *`

Ask the importing user for:
- Timezone
