# Routine: Git backup

> Weekday evening commit and push of /workspace to the backup remote.

Daily weekday Overwatch workspace backup. Keep this wake cheap.

1. Run /workspace/overwatch/scripts/registry-refresh.sh then /workspace/overwatch/scripts/backup.sh on THIS machine (commit + push origin main, never force-push). Do not launch a Cursor cloud agent or self-hosted pool — those VMs only see a repo clone, not the live /workspace, and will write a degraded registry.
2. Stay quiet on a healthy push or nothing-to-commit.
3. If auth/push fails, tell the owner. If the same auth failure already happened on an earlier run of this routine, pause this routine and say what to reconnect (gh auth on the computer). Never paste tokens into chat.

Fires on:
- cron `0 20 * * 1-5`

Ask the importing user for:
- Timezone
