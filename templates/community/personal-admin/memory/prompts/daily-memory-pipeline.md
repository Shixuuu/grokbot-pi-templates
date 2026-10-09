---
description: "Grok Bot routine: Daily Memory Pipeline — Daily after meetings: fetch sources, update the vault per schemas, push git if configured, wipe ephemeral checkout, send a digest."
argument-hint: "[extra context]"
---

Run the personal memory pipeline. Follow vault README.md and the memory-pipeline-setup skill schemas.

## Workspace
- Use the vault host chosen at setup (registered computer path OR ephemeral clone on the assistant computer).
- Ephemeral git: unique /tmp path; fine-grained PAT for their memory repo only (never print token); clone → work → commit → push → always rm -rf.
- Local computer: write to vault path; git commit (+ push if opted in).

## FETCH (all configured sources since last_run_at)
- Meetings (e.g. Wispr): full meeting Events; no dictations unless exposed.
- Issue trackers (e.g. Linear): thin deltas only; refresh Projects/{slug}.md (+ optional *-board.md).

## Then
INGEST (dedupe event_id) → ANALYZE → UPDATE People/Topics/Projects/Daily per schemas (never overwrite People identity sections) → REGENERATE People/_index.md + Focus.md → changelog → commit `memory: YYYY-MM-DD pipeline — N events` → push if configured → wipe ephemeral checkout.

## Always notify
Digest every run: What's new | What changed | Highlights | Blockers. Include auth/git failures; do not silently fall back to another host.

Hard rules: idempotent on event_id; never post/email/spend/apply to jobs; user's timezone.

Fires on:
- cron `0 0 * * *`

Ask the importing user for:
- Timezone

${@:-}
