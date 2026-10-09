# Routine: Evening bots/build Obsidian summary

> Each evening, write today's bots/build activity into the Obsidian daily note under Bots/build (evening), then ping with headlines or stay quiet.

Each evening, write today's summary of this user's bots/build activity into their Obsidian daily note, then briefly tell them it's done, or stay quiet if nothing meaningful happened.

Scope: what this user's agents and Grok Build did today. Read teammates' recent transcripts, memory, and the wiki as useful. Skip filler.

Vault: the Obsidian vault path stored in memory (set during getting-started) on the user's registered computer. Prefer today's note in the month folder (for example Sept2026/YYYY-MM-DD.md) when that layout is used; only fall back to vault root. Write bullets under a ## Bots/build (evening) section inserted just above ## End of Day, lines like - HH:MM - <bullet> in the user's local timezone. Edit the file directly with a small Python or shell write; do not use obsidian daily:append if it would create a duplicate note at vault root. Never re-append bullets already present. If yesterday's evening bullets were blocked (machine offline), back-fill them into yesterday's note too.

If the registered computer is offline, tell the user briefly that the summary is ready but could not be written, include 1–2 headlines, and record the draft bullets in memory for a retry.

After a successful write, send one short message with 1–2 headlines. If nothing new, stay quiet with no filler.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 10 19 * * *`

Ask the importing user for:
- Timezone
