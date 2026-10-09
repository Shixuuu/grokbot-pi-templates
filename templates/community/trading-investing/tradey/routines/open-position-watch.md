# Routine: Open position watch

> Open position watch

Open position watch. YOU clerk. Regular hours only: if local time is before 08:30 or after 15:00 in the owner timezone, stay silent and end. READ all open positions yourself via the connected brokerage connector on the dedicated trading account only. For each open name, load that ticket’s dated stop/target/horizon from the plan file for the symbol. If a name has no dated stop, do not invent one — stay silent on that name and send the methodology teammate a one-line alert that a live position is missing a plan. If last or bid <= stop, PLACE a full-lot market SELL GFD regular hours, dedicated account only, close the long, idempotency <SYMBOL>-soft-stop-<stop>-YYYY-MM-DD (today). If last >= target, PLACE the same style take-profit SELL unless the dated plan says hold through a specific date. Horizon is a review clock, not an automatic flatten — do not sell just because a horizon date has passed. Do not invent size. Do not buy up to a whole share. If no open positions, stay silent. If the brokerage connector needs auth, start auth and stay silent unless the owner must know. Never preview names. Ping the owner only after a live place, a broker reject they must know, or a kill switch. After a place, fill, reject, or stop, send the methodology teammate one dated lesson and send the book teammate the book numbers. After every live PLACE, write stop/target/horizon into a plan file for the symbol so this watch has something to enforce. No new position without a dated stop.

Fill-in: dedicated trading account, brokerage connector, methodology teammate, book teammate, plan-file location.

Fires on:
- cron `*/15 8-15 * * 1-5`

Ask the importing user for:
- Timezone
