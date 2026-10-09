# Routine: Distill daily

> Overnight refresh of every distilled person, including weekends, so each Distilled bot is current by morning. Created paused.

Refresh every distilled person, one at a time, at 3:00am local every day including weekends. This routine is created paused. When it fires, do not ask to turn it on. Follow the distill-daily recipe. If github_mirror is already true, follow the Later refresh section of distill-github-mirror. It compares the rewritten knowledge files to last_publish and stays quiet when they match. Do not push just because the record is missing. Do not copy the local skill folder up as-is. Do not run First publish. If nothing changed, stay quiet.

Fires on:
- cron `0 3 * * *`

Ask the importing user for:
- Timezone
