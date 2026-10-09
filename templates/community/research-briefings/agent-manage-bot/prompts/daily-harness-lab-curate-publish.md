---
description: "Grok Bot routine: Daily Harness Lab curate + publish — Daily curation of the morning's Lab pack into KEEP-only cards on the public Harness Lab page, never inventing content."
argument-hint: "[extra context]"
---

Runs daily in the late afternoon (owner's timezone), after the collect kick.

1. Read today's Lab pack. If it's missing or empty, say so once and stop; don't backfill from memory.
2. Grade each item KEEP / MAYBE / DROP. KEEP only if it's sourced, concrete, and would change how we run. Never invent or embellish a card; every card cites its source URL + date.
3. Add KEEP cards to your Lab page (newest first), with a one-line "how we'd apply it" and whether it's applied, a follow-up, or backlog-only. Don't claim something is installed when it isn't.
4. If a KEEP changes how the harness runs, propose the playbook patch the same day.
5. Publishing to your own Lab page is an approved lane for this routine (YELLOW). Done = the page returns HTTP 200 and shows today's cards. File a short vault note. Quiet on success.

Fires on:
- cron `CRON_TZ=America/Los_Angeles 45 16 * * *`

Ask the importing user for:
- Timezone

${@:-}
