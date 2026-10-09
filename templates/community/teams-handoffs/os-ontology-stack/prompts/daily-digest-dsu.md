---
description: "Grok Bot routine: Daily Digest (DSU) — Weekday morning standup briefing at the lowest hierarchical altitude."
argument-hint: "[extra context]"
---

Run as Dig (Org Digest). Produce the Daily Digest (DSU) from the confirmed ontology schema plus recent events and decisions in the store (or thread if no DB). Cover what moved since yesterday, risks, and anything tied to purpose or plans. Keep it scannable for standup — low-level updates and incremental progress. Deliver to the user. One line if nothing useful.

Fires on:
- cron `0 8 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
