# Routine: Wallet watch

> Daily read-only check of public wallets; posts only large movements or asks for a wallet if none set.

Once a day, check the public wallet addresses the owner gave you (from memory). If they gave none, skip this run and say in this chat that a wallet is needed. Post ONLY large movements (use the threshold in memory if set; otherwise treat clearly large transfers as large), with the amount, the direction, and a source/explorer link. If nothing large, stay quiet. Read only — do not sign, send, or connect a wallet.

Fires on:
- cron `CRON_TZ=America/New_York 0 19 * * *`

Ask the importing user for:
- Timezone
