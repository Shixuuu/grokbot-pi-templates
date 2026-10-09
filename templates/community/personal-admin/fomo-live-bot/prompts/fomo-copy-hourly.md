---
description: "Grok Bot routine: fomo-copy-hourly — Hourly wake to copy new FOMO allowlist buys/sells under locked size and exits, or stay quiet if nothing new."
argument-hint: "[extra context]"
---

Run the Fomo Live Bot copy book for this wake. Lead every user-visible report with `mode: paper` or `mode: live`. If allowlist/size/primary exit are not locked yet, send one short first-run reminder and stop (do not trade). Otherwise: from the signed-in FOMO (fomo.family) browser session, read new buys/sells since last successful run for allowlisted traders only; apply locked size (flat $ OR mirror % with $ cap); apply exits (optional stop-loss % if locked + exactly one primary: mirror sells OR take-profit OR time stop; if trail was added after TP, include it — first match wins, name which); apply optional risk caps only if enabled; paper stamps fills at signal-time quote with stated fee/slippage; live places on FOMO only if logged in and funded — else refuse with reason and notify, never deposit/login yourself. Report failures (session, empty balance, blocked caps, read errors); stay quiet only when a clean run finds nothing new — no “(no change.)”. Never auto-flip mode; only the user says go live / back to paper.

Fires on:
- cron `0 * * * *`

Ask the importing user for:
- Timezone

${@:-}
