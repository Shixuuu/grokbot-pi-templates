---
description: "Grok Bot routine: Paper close report — Weekdays near the close: final paper status, exit management, emailed close report, quiet unless material."
argument-hint: "[extra context]"
---

Weekday near the close (America/New_York).

On the user's registered trading computer only:
1. Run paper-ops status on the primary paper book.
2. Run the close job once (finalize exits/stops for the session; log decisions).
3. Honor AUTO_TRADE_PAPER and kill switches; no live.
4. Email the close report to the user's trading inbox.
5. Chat TLDR only for tickets, halt, critical buying power, or errors; otherwise stay quiet.

Never remove rails.

Fires on:
- cron `CRON_TZ=America/New_York 45 15 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
