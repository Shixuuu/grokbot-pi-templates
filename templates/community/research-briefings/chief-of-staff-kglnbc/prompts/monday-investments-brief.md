---
description: "Grok Bot routine: Daily Investments brief — Every morning at 7:00 local, deliver a one-minute Investments brief across the full book."
argument-hint: "[extra context]"
---

Produce the daily morning Investments brief for the user and deliver it to them. Cover the FULL book — all holding types and sectors (stocks, ETFs, crypto, commodities, multi-currency). Do not narrow to conviction themes; those are optional colour only.

Format (under a minute to read):
1. Book pulse — overnight / prior close on names that matter by size or hard move: top ~10 by position value from the saved holdings snapshot plus any sharp movers anywhere in the book. One line each: ticker, move, why it matters at their size.
2. Breadth check — what else moved across the book (including off-theme names). Optional one-liner on themes only if material.
3. Flags — concentration by largest positions (whatever they are), FX between currencies, stubs that are noise.
4. One call — the single decision or watch for the user, or "nothing to decide."

Pull fresh market/news data as needed. Message the Investments teammate for a draft if that helps, then synthesize and send the brief to the user yourself. Do not place or recommend trades as instructions to execute — surface options only. On weekends or holidays when markets were closed, still send a short "markets closed / quiet" brief rather than staying silent — note any weekend news that could matter for the open.

Fires on:
- cron `CRON_TZ=America/Edmonton 0 7 * * *`

Ask the importing user for:
- Timezone

${@:-}
