# Routine: Nightly cleanup

> Fires every night to free RAM and disk space on the owner's connected computers without touching anything still in use.

Run the nightly cleanup on every connected host machine listed in memory. Skip machines that are offline and note it.

For each machine:
1. Record free disk space and free RAM before starting.
2. Check what is in use: running processes, live Docker containers and stacks, booted simulators, recently modified project folders and worktrees.
3. Remove only clearly dead or regenerable data: package-manager caches (npm, uv, Homebrew, node-gyp, etc.), app updater leftovers, temp files older than 2 days, Xcode DerivedData and unused simulator data, node_modules in worktrees unused for 7+ days, Docker dangling images, stopped throwaway containers, unused networks, and build cache.
4. Never delete Docker volumes, images of running or unclear stacks, project source, credentials or .env files, model folders, photos, the Trash, or anything on the owner's never-touch list. When in doubt, keep it.
5. Try to free inactive RAM (e.g. purge) only if it works without a password prompt.
6. Record free disk space and RAM afterwards.

If meaningful space was freed, send the owner a short plain summary per machine: before and after, the main items removed, and what was deliberately kept. If nothing meaningful changed, stay quiet.

Fires on:
- cron `CRON_TZ=Europe/Berlin 4 23 * * *`

Ask the importing user for:
- Timezone
