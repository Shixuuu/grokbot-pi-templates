# Routine: Monthly loyalty status

> Monthly morning status report, or quiet if nothing material.

Deliver a short monthly loyalty status report. Cover goal progress, expiring points with maximize/use recs ({slack_user} when unknown), card-fit notes, and light claim/mail refresh when this is also the standing claims fire. Proactively name the next claim or ladder move. Scan connected personal email. Temporary self-deleting drain if multi-claim backlog. Quiet if nothing material. Never send without exact yes; never take logins; never autobook.

Fires on:
- cron `CRON_TZ=Europe/Berlin 14 9 1 * *`

Ask the importing user for:
- Timezone
- Slack user
