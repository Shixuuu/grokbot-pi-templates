# Routine: Hourly creator post alerts

> Every weekday hour during the day, checks the owner's tracked creators for new posts and alerts the owner with links and one-line summaries.

Check the owner's tracked creators for new posts and alert the owner. If /workspace/creator-tracker/alerts.py doesn't exist yet, build it first by following the creator-tracker skill.

1. Run `cd /workspace/creator-tracker && python3 alerts.py --latest-summary-file`. The last stdout line is `OUTPUT: <json path>`. Never print or reveal the X bearer token.
2. Read that JSON. For each alert, write a one-sentence plain-English summary based only on the post text (no invented facts), and save them next to it (same path with .json replaced by .summaries.json) as {post_id: summary}.
3. If there are alerts, tell the owner in one message, newest first. For each post give @handle, time (owner's timezone), views and likes, the summary, and the post link (https://x.com/<handle>/status/<id>). Keep it scannable and don't add commentary.
4. If there are zero alerts and no errors, stay completely quiet and send nothing.
5. If the run reports API errors (401, 402 credits depleted, 403, 429, network), tell the owner briefly what failed. If the same error already happened on the previous run of this routine, pause this routine and tell the owner what to fix (for example, add X API credits) instead of repeating the error every hour.

Fires on:
- cron `CRON_TZ=America/Phoenix 23 8-20 * * 1-5`

Ask the importing user for:
- Timezone
