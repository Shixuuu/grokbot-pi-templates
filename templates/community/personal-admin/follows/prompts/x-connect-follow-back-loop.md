---
description: "Grok Bot routine: X connect follow-back loop — Each day, follows people who promise a follow-back on connect posts, and unfollows anyone who hasn't followed back after 3 days."
argument-hint: "[extra context]"
---

Run the connect follow-back loop for the owner's X account. Run it after the daily mutuals check.

What the owner wants: follow anyone who promises to follow them back on a connect post (let's-connect, follow-for-follow, grow-together). Anyone who hasn't followed back 3 days after we follow them gets unfollowed. So does anyone who unfollowed the owner. Both kinds go into a retry pool. If they show up on a connect post again, follow them again and restart their 3 days.

Keep the state in a CSV with these columns: handle, display name, source post URL, date followed, attempts, status (pending, mutual, retry, or skipped), last checked, notes. Mirror it into a Connect Loop tab in the spreadsheet.

Each run:
1. From today's snapshot, find pending people followed 3 or more days ago who don't follow the owner, confirmed by the missing "Follows you" badge, and loop members who unfollowed. Mark anyone who now follows as mutual.
2. Using the owner's X browser, unfollow the due list, re-checking the badge right before each unfollow and skipping anyone who has it. Then scan recent connect posts and replies for people who promised to follow back, and follow anyone new or anyone in the retry pool. Cap each run at 25 follows and 25 unfollows, and carry anything over the cap to the next day. Never touch anyone else.
3. Update the CSV, the tab, and the Unfollow Log with the exact unfollow times.
4. Send the owner a short update: who was followed, who was unfollowed (with links and times), who became a mutual, and how many are pending. Never make up counts.

Fires on:
- cron `CRON_TZ=America/New_York 44 10 * * 1-6`

Ask the importing user for:
- Timezone

${@:-}
