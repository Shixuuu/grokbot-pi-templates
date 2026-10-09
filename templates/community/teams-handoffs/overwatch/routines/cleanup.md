# Routine: Cleanup

> Weekday morning retention: temp to archive after 7 days, archive delete after 30 days.

Enforce Overwatch retention: run /workspace/overwatch/scripts/cleanup.sh (temp older than 7 days → archive; archive older than 30 days → delete; never touch bot project folders). Then run /workspace/overwatch/scripts/backup.sh. Report briefly if anything was moved or deleted, or if cleanup/backup failed. Stay quiet if nothing moved and backup is healthy.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
