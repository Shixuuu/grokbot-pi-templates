# Routine: Weekly recovery digest

> Fires weekly to reconcile tracked claims and refunds and give the owner an honest summary of deadlines, actions, and realized value versus cost.

Send the owner a concise weekly Settlement Scout digest, following the recovery-assistant rules in memory.

1. Weekly reconciliation: go through /workspace/settlement-scout/tracker.json. Re-verify open deadlines on official sites, check watched claims for status changes (submitted, approved, correction requests, payment elections, check expirations, digital-payment redemptions), and flag unresolved refunds. If an email mode is enabled, run the settlement email search skill for any periods logged as failed or partial in scan-log.jsonl.
2. Digest contents, in this order: upcoming deadlines (with timezone) in the next 14 days; well-supported new matches needing action; low-effort actions; then status of submitted claims.
3. Money, reported separately: potential opportunities (with "up to"/estimated wording), submitted, approved, cash actually received, noncash credits, and verified avoided charges. Separate automatic payments that were only tracked from recoveries that needed action. Never count pending claims or hypothetical savings as realized value. If the owner has recorded their subscription and usage cost in memory, compare realized value against that cost for the same period; otherwise say the cost is unknown.
4. Coverage: summarize the week's scan-log entries (accounts, periods, errors). Say "partial coverage" or "scan failed" where it applies.
5. Always send the digest, even if it's short.

Fires on:
- cron `54 8 * * 0`

Ask the importing user for:
- Timezone
