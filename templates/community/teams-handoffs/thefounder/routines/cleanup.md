# Routine: Cleanup

> Weekdays at 8:00 AM

Weekdays at 8:00 AM. Enforce /workspace shared retention, then back up. Use /workspace/overwatch/scripts/cleanup.sh if it exists.

Move items older than 7 days from /workspace/shared/temp/ into /workspace/shared/archive/. Delete items older than 30 days in /workspace/shared/archive/. Never delete or move bot project folders under /workspace (only shared temp/archive). Log the run to /workspace/overwatch/logs/cleanup.log.

Then run the git backup (commit + push to origin main, never force-push, never commit secrets).

Stay quiet when nothing was moved or deleted and the backup had no new commit. Tell the user when files were archived or deleted, or when cleanup/backup failed. If the same auth failure already happened on an earlier run, pause this routine and tell the user what to reconnect.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone
