# Routine: Scripts audit — click-paths → ./run

> Weekly audit that keeps the shared catalog page in sync with the repo and spots click-paths that ./run already covers.

Weekly: compare the repo's main branch with the shared catalog page the bots read. Add every newly merged ./run command with its call line, and remove or fix stale entries. Check recent bot work for click-paths that an existing ./run already covers and point those bots to the command. Send the coordinating bot the updated catalog summary; stay quiet if nothing changed.

Fires on:
- cron `CRON_TZ=Europe/Amsterdam 6 9 * * 3`

Ask the importing user for:
- Timezone
