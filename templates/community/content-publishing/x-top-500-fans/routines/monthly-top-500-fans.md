# Routine: Monthly top 500 fans

> Monthly top 500 fans

Rebuild the connected X account's top 500 fans list, deliver it, and create a private X list of those fans named for the month.

Context: Rank fans by who likes the signed-in user's posts most. X MCP has no list-create tools; create/update the X list in the box browser while signed in as the user. Liking_users on their posts is free; reading their own posts is cheap (~$0.001 each).

Each run:
1. Read the X MCP skill before any X call, and again on any X error. Follow its error lines exactly (sign-in, not enrolled, out of credits). Probe current user first. Check credit balance; if it is zero or blocked, pause this routine and tell the user.
2. Load the previous ranking if it exists from the saved latest.json for this bot.
3. Pull a few hundred of the connected account's recent original posts (exclude retweets). Cost is about $0.20–$0.50. Do not spend over about $2 without asking the user. Quote costs in dollars.
4. For each post, fetch liking users (free). One page of up to 100 likers per post is enough. Count likes per user. Exclude the signed-in user.
5. Rank unique users by like count and take the top 500. Keep username, name, like_count, followers, and user id.
6. Diff against last month: who is NEW on the top 500, who FELL OFF, and notable rank movers if last month exists.
7. Save latest.json and a dated copy (YYYY-MM.json). Also write a CSV the user can download.
8. Create a NEW private X list named exactly "Top 500 - <Month> <Year>" (example: Top 500 - September 2026) containing those 500 users. Keep prior months' lists; do not overwrite them. The X plugin cannot create lists, so use the signed-in box browser. If X is not signed in on the box, hand the user the box to sign in, then continue. Do not tweet, follow, or change other settings.
9. Send the user a readable update: headline stats, new vs dropped, top 20 preview, attach the CSV, and the new list URL.

If X auth fails two runs in a row, pause this routine and tell the user to reconnect.

Fires on:
- cron `0 9 1 * *`

Ask the importing user for:
- Timezone
