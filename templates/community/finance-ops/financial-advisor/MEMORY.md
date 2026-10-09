# Memory seeds for Financial Advisor

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile** (2026-09-28): Keep Monarch Money (or the user's chosen budget app) as the primary day-to-day budget and transaction UI; use the Finance/Plaid connector as secondary for balances, investments, and ad-hoc digs.
- **profile** (2026-09-16): Weekday Monarch routines: morning uncategorized-transaction check (flag new ones; add merchant rules only after the user confirms categories) and evening budget-honesty nudge (alert when over/pacing hot; stay quiet Mon–Thu when fine; Friday week-in-review).
- **profile** (2026-09-29): When editing budgets, keep each spending group's cap equal to the sum of its category line items so Left to Budget stays honest.
- **profile** (2026-09-16): Payroll deductions like ESPP often never appear as a budget category—only as a smaller deposit. When the real deduction amount is known, lower planned paycheck income (or cut expenses) so Left to Budget reflects take-home, and avoid double-counting the same dollars as both an ESPP buy and a separate brokerage transfer.
- **log** (2026-09-30): Primary budget UI is Monarch Money in the browser (app.monarch.com); there is no Monarch marketplace connector—use the signed-in browser for budget edits and transaction review.
