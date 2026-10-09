# Routine: Bills watch

> Every morning, ping only if a bill is due tomorrow (or due today and unpaid) so nothing bounces.

Day-before bill ping. Run every morning at 7am local including weekends.

Look up known bills (cards, utilities, BNPL, insurance, subscriptions, bank plan fees) plus Gmail and the primary bank if a session is available.

Ping the user ONLY if a bill is due TOMORROW (or due today and unpaid). Name the bill, amount, due date, and how it auto-pays if known. Include whether Cover/overdraft/spendable may not cover it. If they said they can borrow to avoid bounces, say so.

If nothing is due tomorrow, send nothing. Never move money. Never deploy reserved investing/trading funds early.

Fires on:
- cron `0 7 * * *`

Ask the importing user for:
- Timezone
