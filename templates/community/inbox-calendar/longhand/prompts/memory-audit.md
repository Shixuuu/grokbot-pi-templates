---
description: "Grok Bot routine: memory-audit — Sunday health check of the brain store: snapshot, roster drift, contradictions, and cost flags."
argument-hint: "[extra context]"
---

Weekly audit of /workspace/brain/. Timezone is America/Chicago. Use the local calendar date of this run.

Hard rules (same spirit as memory commit):
- Never edit rules.md, any skill, any watch bar, or any routine (including this one).
- Never move, rewrite, or delete a fact. No inference promoted to fact. Never invent a fact to close a TBD.
- If any store file listed in index.md is missing or unreadable, stop and report what's wrong in the assistant chat. Do not rebuild from memory.
- Snapshot is the only write outside log/. The only delete you ever do is old tars inside snapshots/ (keep newest eight). Never write outside /workspace/brain/ except running the check script at /workspace/brain-check.sh.
- Every flag in the report ends with "confirm or kill?" You resolve nothing alone. Propose changes; change nothing.
- This report is not a ping. One assistant chat message for the full report.
- Exception: unordered roster mismatch (3a) or ping-ledger reconcile miss (3b) also gets a delivery via the ping skill (chat-only per skill).

## VALIDATE
Re-read the authoritative source after each claim — not the tool return. Tag every claim:
- **{slack_channel_id}** — re-read and saw it
- **ACK-ONLY** — tool success only
- **{slack_user}** — no read path (approval queue, etc.)
Checks:
{slack_channel}. Re-read that today’s snapshot tar exists (stat) → **{slack_channel_id}** or don’t claim snapshot ok.
{slack_channel_2}. Re-read the check script output you just produced → **{slack_channel_id}**.
3. Roster / mirror / ping-ledger: re-read each source you cite → **{slack_channel_id}** per observation. Hash dimension {slack_user_{slack_channel_2}} while local automation files are stale — do not print false-green hashes.
4. Audit report in assistant chat: in-thread → **{slack_channel_id}**; else **ACK-ONLY**.
5. Any ping from 3a/3b must pass the ping skill VALIDATE (re-read ledger).
Unexplained green without a {slack_channel_id} read = fail.

Do this in order:

{slack_channel}. Read /workspace/brain/index.md, then rules.md. If either is missing or unreadable, post what's wrong in the assistant chat and stop.

{slack_channel_2}. Snapshot. Write snapshots/brain-YYYY-MM-DD.tar.gz of the whole store excluding snapshots/. Keep newest eight tars. If today’s tar exists, leave it and note that. Then VALIDATE {slack_channel}.

3. Health check. Run bash /workspace/brain-check.sh. If missing, report and skip — never rewrite. Include FAIL/WARN summary. VALIDATE {slack_channel_{slack_channel_2}}.

3a. Roster drift: Read facts/routine-roster.md. Live list = source of truth for enabled/paused and schedule. If local automation files are stale (not reflecting live server state): hash dimension = {slack_user_{slack_channel_2}} (do not print passing hashes). Missing local automation.json for expected folder → FAIL. Mismatch the operator did not order → list + one delivery via the ping skill. Do not change routines/roster.

3b. ping-ledger reconcile (7-day or since last Sunday): the assistant's outbound ping-shaped posts must match ledger/pings.jsonl. Side door = channel without ledger; silent drop = ledger without channel. Listener replies don’t need ledger rows. Empty ping-hold ≠ quiet-hours worked unless write path shown. Miss → list + delivery via the ping skill.

4. Contradictions. List disagreeing fact lines / wrong subject. List only.

5. Stale. List [active] facts older than 90 days with no later confirming line. List only.

6. Rules recitation. Locked rules from memory, then paste rules.md, then differences. Do not edit rules.md.

7. Cost pass. Runs since last audit, pings, acted/noise/later. Flag runs-with-zero-pings, one-shots past date, runs outside hours. Propose only.

8. Lessons. Same lesson three times → propose skill. Do not create.

9. Post one assistant chat report covering 3–8 (include 3a/3b). Every flag ends with "confirm or kill?" Include evidence tags. Then run VALIDATE on the whole report.

Quiet example: "Memory audit — snapshot ok [{slack_channel_id}], check clean [{slack_channel_id}], roster live match [{slack_channel_id}], hash {slack_user_{slack_channel_2}} (local mirror stale) [{slack_channel_id}], ping-ledger reconcile clean [{slack_channel_id}], contradictions none, stale none, rules match, cost flags none, lessons none."

Fires on:
- cron `CRON_TZ=America/Chicago 0 8 * * 0`

Ask the importing user for:
- Timezone
- Slack user
- Slack channel id
- Slack channel

${@:-}
