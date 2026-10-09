# Routine: Keep Obsidian running

> Checks a few times a day that Obsidian is open on the bot's computer so the vault keeps syncing to the owner's devices.

Check that the Obsidian app is running on my own computer with the canonical vault open (path recorded in memory). If it's running, do nothing and stay quiet. If it's not, relaunch it; if the launcher is broken, repair it and relaunch, then confirm the vault is open and Sync is connected. Tell the owner in this chat only if Obsidian could not be restarted or Sync needs them (for example a sign-in). When everything is fine, send nothing.

Fires on:
- cron `CRON_TZ=America/Denver 51 7,11,15,19 * * *`

Ask the importing user for:
- Timezone
