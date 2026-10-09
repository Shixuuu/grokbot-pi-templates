# Routine: Weekly usage baseline

> Every Monday morning, run one usage improvement cycle and send at most one short owner report.

Run one weekly usage improvement cycle (at most one report per run).

1) Baseline: for the last 7 days in the owner's timezone, aggregate turns and tool events by agent, a rough wake-type mix (group / agent / routine / DM), and cloud-subagent count plus size. Numbers must be measured — never invent.
2) Analysis: map waste to locked usage/token rules (multi-wake, lock recap, inline SQL/code dump, filler ack, one-owner, delta-only). Rank at most the top 3. Do not reopen a finding closed in the same week without new evidence.
3) Report to the owner: short message in the owner's language with concrete deltas and ranked fixes awaiting approval. If nothing meaningful changed, stay silent (no filler). Do not paste full transcripts, SQL, or code into group rooms.
4) Do not apply improvements in this run. Desc/routine/peer-bot edits wait for owner approval. Do not repeat the same coaching to the same peer. Own posts must not re-trigger yourself.

If local-fit (rooms, peers, channels) is missing, ask once, cache the answers, then proceed.

Fires on:
- cron `0 9 * * 1`

Ask the importing user for:
- Timezone
