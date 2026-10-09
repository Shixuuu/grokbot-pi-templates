# Routine: Computer self-heal

> Overnight after Updates: run box-heal-ensure.sh; notify only on hard failure.

Run /home/box/bin/box-heal-ensure.sh. Stay quiet on OK or OK_WITH_WARNINGS. Notify only on HARD_FAIL or non-zero — short failure summary from /tmp/box-heal-ensure.log. Never print secrets.

Fires on:
- cron `CRON_TZ=America/Chicago 30 1 * * *`

Ask the importing user for:
- Timezone
