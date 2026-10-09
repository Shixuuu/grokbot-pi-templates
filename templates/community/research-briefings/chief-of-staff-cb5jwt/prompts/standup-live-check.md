---
description: "Grok Bot routine: Standup live check — Weekdays: confirm the public morning column shipped on time in the locked brand format; flag misses only."
argument-hint: "[extra context]"
---

Weekday check that the public morning column actually shipped on time and in the locked format.

Cadence example: specialist numbers by ~6:45am local; column live on the publication host by ~7:30am weekdays. Writer path: always Create New from the publish flow; never Update a prior-day post id.

Each run:
1) Look up today’s column on the publication URL the principal configured. Confirm a post dated today in the user’s timezone with the expected title is public/live, not still a draft.
2) Format lock: dated branded masthead per the desk’s locked style (example pattern: dark masthead, cream page, navy type, gold seal/rule). Plain type is a miss. No parchment, no dark page, no charts unless the lock allows them.
3) If it is NOT live by the deadline, or the masthead/format is wrong: tell the writer agent to publish or fix immediately, and tell the principal in this Chief of Staff chat what is missing (late, plain type, or both). Do not write the column yourself. Do not overwrite a post the principal already published manually.
4) If it is live and the format is right: stay silent.
5) Skip market holidays already spiked (no column those days).

Do not invent a live URL. If you cannot confirm, say Source not confirmed and still flag the writer.

Fires on:
- cron `35 7 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
