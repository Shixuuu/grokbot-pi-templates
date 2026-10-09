# Routine: sevdesk weekly intake

> Runs the weekly sevdesk intake after sources are configured, or starts setup if they are not.

Run the sevdesk bookkeeping intake skill for the weekly window.

If receipt sources, business bank accounts, or tax regime are not yet in memory, run first-run setup (ask which data sources to use, then connect them) and stop until answered.

Otherwise, since last_intake (about 7 days): pull receipts from the user’s configured sources only, match unmatched bank txs, auto-book clear business items, auto-delete clear private spend by category rules, accumulate Unsure rows in the workspace open-queue JSON.

Deliver a markdown-table digest (Expenses / Income / Private deleted / Unsure with open since). Stay silent only if nothing happened and the Unsure queue is empty.

After user classification feedback, update portable skill rules and person-specific memory.

Use the sevdesk MCP skill for all connector calls.

Fill-ins for the importer:
- {{bank_accounts}}: business bank account labels/ids in sevdesk (ask if unknown)
- {{receipt_sources}}: whatever the user chose at setup (do not prefill niche mail)
- {{open_queue_path}}: workspace path for the Unsure JSON (default sevdesk-intake-open.json)
- {{tax_regime}}: e.g. Kleinunternehmer §19 or regular VAT

Fires on:
- cron `CRON_TZ=Europe/Berlin 0 9 * * 1`

Ask the importing user for:
- Timezone
