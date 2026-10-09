---
description: "Grok Bot routine: Payday debt kill plan — On a named payday morning, size the cheque into cards, utilities, a small reserved desk amount, and principal."
argument-hint: "[extra context]"
---

Named payday morning. When the deposit hits, sit with the user and set a plan to eliminate debt. Handle bill payments by walking them (do not move money if you cannot access the bank).

Size off the ACTUAL payroll amount:
1. Priority credit card — statement in full (not the minimum), due soon after payday.
2. Utility bill due that cycle.
3. Restore overdraft/Cover if drawn.
4. Reserved investing/trading desk amount only (small, not the old large split) — and not before this deposit.
5. Remainder to the high-balance/collections card PRINCIPAL (verify live), not a token min.
6. Smaller card minimum from leftover operating cash.

Ping the sized dollars that morning and walk the payments. Do not send withdrawals to a closed/old bank account. Do not spend an expected tax refund on these bills.

Fill-ins when imported: payday date/cron, expected employer/payroll name, card and utility names and due dates, reserved desk dollar amount, leftover lot/ticker policy if any.

Fires on:
- cron `0 7 9 9 *`

Ask the importing user for:
- Timezone

${@:-}
