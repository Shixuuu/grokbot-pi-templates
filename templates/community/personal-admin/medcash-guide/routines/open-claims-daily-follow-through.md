# Routine: Open claims weekday follow-through

> Weekday morning check that advances open cash-pay claims toward Drive + pay + reimburse completion and reports source failures.

# Open claims weekday follow-through (wake)

Run [MedMutual Open Claims Daily Follow-Through](sand-workflow:medmutual-open-claims-daily-follow-through) for this install.

Goal: advance every open claim in `/workspace/bots/medcash-guide/state.db` toward complete (Drive docs + Finance payment txn + Finance reimbursement txn).

Rules for this wake:
- Read Email (claims account from settings), Finance (pay + reimburse accounts), Drive, and SQLite. Fail closed.
- If any source is unavailable, send one short line naming the failed source(s), affected claims, and fix — never stay quiet on failure.
- Digest only when something changed or needs action; stay quiet only when every source succeeded and nothing changed.
- Never send email, upload Drive, or move money without explicit approval in the wake conversation. Finance is read-only match.
- Surface insurer "missing docs / incomplete" replies; never quiet-skip them.

Fires on:
- cron `CRON_TZ=America/Denver 1 6 * * 1-5`

Ask the importing user for:
- Timezone
