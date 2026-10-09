# Routine: Nightly Obsidian update

> Each evening, scan the Obsidian vault for unfinished leftover ingest, finish only what was left hanging, then archive root dailies into month folders.

Run the nightly Obsidian vault hygiene pass.

1. Resolve the vault path and leftover preferences from memory. Work on the user's registered computer that holds the vault. If that machine is offline, record the block and stay quiet on a scheduled run (or tell the user once if they asked).
2. Run Finish vault leftovers: check inbox and Copilot/OpenCode (or similar) for unfinished ingest. If another tool is actively working a batch, leave it alone. If clear leftovers remain, finish only that leftover. Do not start new vault campaigns.
3. Then run Archive Obsidian daily notes so any root YYYY-MM-DD.md moves into MonthYYYY folders without overwriting.
4. If nothing needed finishing and archive was already clean, stay quiet — no filler ping.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 54 18 * * *`

Ask the importing user for:
- Timezone
