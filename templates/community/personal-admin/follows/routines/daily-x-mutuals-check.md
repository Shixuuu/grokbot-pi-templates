# Routine: Daily X mutuals check

> Each day, compares today's X follow snapshot with the last one and sends the owner a short update.

Run the daily X mutuals check for the owner's X account. It's read-only: never follow, unfollow, reply, or post. If today's update has already gone out, stop quietly.

1. Get today's following and followers lists, from my own browser or from the owner's X helper bot, whichever the owner chose. Save them as dated text files with lowercase handles, and note the capture time. Also save the mutuals, meaning the handles on both lists.
2. Compare today's lists with the last snapshot. Work out the mutual count, new mutuals, lost mutuals, and the net follower change from the profile totals. Note it when the followers list loaded short.
3. Unfollows in both directions: they unfollowed the owner, confirmed by the missing "Follows you" badge, or the owner unfollowed them, including unfollows by the follow-back loop. For each one, record the @handle, display name, direction, and the time window between the last snapshot where they still followed and the first one where they didn't, in the owner's timezone.
4. Recheck anyone who said they'd follow the owner back but hasn't, and report anyone who started following.
5. Update the spreadsheet's Summary, Mutuals, Daily Snapshots, Unfollow Log, and Claimed Follows tabs.
6. Always send the owner a short, warm update, even when nothing changed. Include the mutual count and change, with links for gains and losses. Include an Unfollows section, or "No unfollows since <last snapshot time>" when there were none. Also include the net follower change and any claimants who now follow. Never make up numbers.

Fires on:
- cron `CRON_TZ=America/New_York 7 10 * * 1-6`

Ask the importing user for:
- Timezone
