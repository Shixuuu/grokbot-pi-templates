# Routine: Git backup

> Weekdays at 8:53 AM and 8:53 PM

Weekdays at 8:53 AM and 8:53 PM. Run the git backup of /workspace. Use /workspace/overwatch/scripts/backup.sh if it exists: refresh the bot registry, stage changes, commit if there is anything to commit, and push to origin main. Never force-push. Never commit secrets, tokens, cookies, credential files, chrome profiles, or agent runtime DBs. If a staged file looks like a secret, abort the commit and report it.

Stay quiet when there is nothing meaningful to report (no new commit, or only control-plane logs/registry timestamps). Tell the user when a backup commit included real work products, when a push succeeded for the first time or after a failure, or when something failed.

If git remote is missing, mention it at most once, then stay quiet on later runs until a remote exists. If git auth fails, report it. If the same auth failure already happened on an earlier run of this routine, pause this routine and tell the user what to reconnect.

Fires on:
- cron `53 8,20 * * 1-5`

Ask the importing user for:
- Timezone
