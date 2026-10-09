---
description: "Grok Bot routine: Harvest → Balances daily invoice mirror — Every day at 6 PM, sync new or updated Harvest invoices into Balances so books stay current."
argument-hint: "[extra context]"
---

Mirror Harvest invoices into Balances once per run.

1. Discover current Harvest and Balances MCP tools (do not assume fixed tool names or schemas).
2. Confirm Balances is connected to the live company workspace, not a demo workspace.
3. Pull recent Harvest invoices that may need mirroring (new or updated since the last successful sync; if no prior sync record exists, use a sensible recent window such as the last 30 days and note that).
4. For each Harvest invoice, check whether a matching record already exists in Balances (match on stable identifiers such as Harvest invoice id/number when available). Skip duplicates; create or update in Balances only when needed so Balances stays in sync with Harvest.
5. Do not invent invoice data. Prefer create/update over delete. If a required Balances field or mapping is unclear, stop and ask rather than guessing.
6. Stage Balances creates with stage_apply_proposal, then apply only after approval. Stage and apply one batch at a time — a new stage supersedes prior unapplied proposals.
7. Keep a brief sync log of what was created, updated, skipped, or failed so the next run can avoid re-doing work.
8. Tell the user a short summary of the run when something was created, updated, or failed. If nothing changed, stay quiet unless auth or another blocker failed — then say what to reconnect or fix.
9. If Harvest or Balances auth fails, report it; if the same auth failure has already happened on an earlier run of this routine, pause this routine and ask the user to reconnect.

Fires on:
- cron `CRON_TZ=America/Chicago 0 18 * * *`

Ask the importing user for:
- Timezone

${@:-}
