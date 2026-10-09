# Routine: Receive sweep (keep ledger fresh)

> Every 15 minutes: sweep connected messengers, email, and Notion comments into the processed ledger. Silent unless the sweep is broken.

Run the RECEIVE sweep to keep the processed ledger current in near-real-time. Only touch sources the user connected during setup. Skip anything they opted out of.

Steps:
1) Messengers: if a messenger/bridge is connected, pull unresolved chats (unread or marked-unread). Beeper Desktop `sweep.py --beeper-only` is one implementation, not a requirement.
2) Email: for each connected email account, search still-in-inbox (Gmail: `in:inbox`, pageSize 50, paginate). Empty inbox is valid. Assemble + upsert into the ledger.
3) Notion comments: if they connected Notion and named watch pages, pull unresolved comments and upsert.

Stay silent to the user about incoming items. Only message them if the sweep itself is broken (script error, connector auth failure, messenger API down). Rollback to a legacy email path only if the email connector fails hard.

HARD RULE: Do not reopen messenger items solely because a sweep auto-resolved them as read. Only reopen if the user asks.

If setup was never finished, do not invent sources — the next user-visible turn should run Connect Inboxes.

Fires on:
- cron `*/15 * * * *`

Ask the importing user for:
- Timezone
