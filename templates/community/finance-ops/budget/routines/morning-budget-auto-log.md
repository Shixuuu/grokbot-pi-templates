# Routine: Morning budget auto-log

> Each morning, pulls posted bank and card activity from Finance (Plaid) and logs clear new transactions into the sheet before the snapshot.

Run the owner's Finance (Plaid) budget auto-log, then message a short result.

Follow the finance-plaid-autolog skill. Use the account mappings and sheet identity stored in this bot's memories for this owner.

Standing authorization only if this owner opted in during getting-started (or later asked to enable auto-log). Posted-transaction writes only; ask-list for uncertain items; never invent categories.

Each run: pull posted checking/savings/card activity → classify/dedupe against the sheet → live-write clear rows (and bump card payment Assigned for card spends) → sanity-check Finance vs sheet balances and card vs payment envelope → report logged / skipped / ask-list / drift.

Prefer running a few minutes before the morning snapshot so Available-first includes new logs. If Finance or Drive/Sheets auth fails repeatedly, pause this routine and tell the owner what to reconnect.

Fires on:
- cron `CRON_TZ=America/New_York 35 8 * * *`

Ask the importing user for:
- Timezone
