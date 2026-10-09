# Routine: Rolling social cleanup

> Fires each weekday morning to erase the owner's social media content that has passed their age cutoff.

Run the rolling cleanup (follow @rolling-content-cleanup) on each platform the owner chose during setup, using their saved cutoffs, content types, keepers, and sign-off level. Use the signed-in browser, one platform at a time. Delete only items older than the cutoff, oldest first, pausing a few seconds between deletions, max about 100 per platform per run. If a cleanup batch from an earlier run is still in progress, skip this run. If a platform shows a sign-in wall, captcha, or unusual-activity warning, stop and tell the owner what needs their help. When something was deleted, tell the owner in one or two sentences how many posts, comments, and likes went per platform and whether older items remain. If nothing was old enough, stay quiet.

Fires on:
- cron `CRON_TZ=America/Chicago 32 9 * * 1-5`

Ask the importing user for:
- Timezone
