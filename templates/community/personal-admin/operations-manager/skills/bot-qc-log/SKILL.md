---
name: bot-qc-log
description: "Use when logging a bot quality-control entry (who did what and when) to the shared Bot QC Log."
---

# Bot QC Log

## When to use
After any significant bot action the user may later audit: calendar changes, job-system changes (once approved), email moves/sends, website/repo pushes, approvals, standing-rule updates, conflict flags.

## Columns
`When (local),Bot,Action,Detail,Status`

- **When**: user local time `YYYY-MM-DD HH:MM`
- **Bot**: OM | Scheduler | job-system admin | Comms | app engineer | Website | other
- **Action**: short verb phrase
- **Detail**: job ref, address, ids, outcome — one line
- **Status**: Done | Open | Pending user | Failed

## Steps
1. Append one CSV row to a local master log (quote Detail if it contains commas).
2. Sync to Drive: upload a fresh sheet; rename the prior live sheet to an archive title — do not trash without user approval.
3. Remember the new live file id / view URL.
4. Do not log chatter, acknowledgements-only, or routine “still working” noise — only QC-worthy actions.

## Teammate protocol
Other bots send OM one line: `QC | Bot | Action | Detail | Status`. OM writes the log; teammates do not edit Drive themselves.
