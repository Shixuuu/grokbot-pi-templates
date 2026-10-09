# Routine: Otter transcript grab

> Twice daily: pull new Otter notes into the owner's transcripts folder and write sibling distills; stay quiet if nothing new.

Search Otter for meetings since the last successful grab (or a short lookback if unknown). For each new note not already filed: fetch the full transcript, write raw Markdown under the owner's configured sources/transcripts/YYYY/ path without overwriting existing raw files, and write a sibling *.distill.md (speakers, summary, action items, story beats when relevant, library-atom candidates; so-what empty). After each finished distill, emit the Wrap/handoff block: Obsidian deep links for raw and distill, vault-relative paths, and sibling *.email.html. Notify the owner only when something new was filed; stay quiet when nothing new.

Fires on:
- cron `CRON_TZ=America/Denver 11 12 * * *`
- cron `CRON_TZ=America/Denver 0 3 * * *`

Ask the importing user for:
- Timezone
