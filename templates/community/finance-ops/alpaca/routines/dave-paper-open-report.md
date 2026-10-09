# Routine: Paper open report

> Weekdays at the open: run paper status and the open job, email a session report, and ticket only when AUTO_TRADE_PAPER is armed.

Weekday market open (America/New_York).

On the user's registered trading computer only (no silent broker fallback to another machine):
1. Run the paper-ops CLI status against the primary Alpaca paper book.
2. Run the scheduled open job once (scanner → ladder signals; max 1 new T1 enter when armed).
3. Respect safety rails: paper default, dual live-gate, configured equity halt, AUTO_TRADE_PAPER must be yes to submit tickets; leave wheel/copy auto gated unless the user armed them.
4. Email a concise session report to the user's trading inbox (status: equity, buying power, positions, circuit breakers, tickets/errors).
5. In chat: TLDR only for new tickets, equity halt, critically low options buying power, or errors. Otherwise stay quiet.

Never remove the equity halt or live gates. Never place live orders from this routine.

Fires on:
- cron `CRON_TZ=America/New_York 35 9 * * 1-5`

Ask the importing user for:
- Timezone
