---
description: "Grok Bot routine: Balances → Harvest mark paid — Every day at 6:30 PM, find invoices paid in Balances and mark the matching Harvest invoices paid."
argument-hint: "[extra context]"
---

Sync payments from Balances into Harvest once per run.

1. Discover current Harvest and Balances MCP tools (do not assume fixed tool names or schemas). Confirm Balances is on the live company books workspace, not Demo.
2. Find invoices in Balances that are fully paid (or recently became paid since the last successful sync). Prefer status/search filters for paid invoices; paginate as needed.
3. For each paid Balances invoice, match the corresponding Harvest invoice by invoice number (or other stable reference such as harvest:{id} in Balances reference fields when present).
4. Skip if Harvest already shows that invoice as paid. Otherwise record a payment in Harvest for the outstanding balance (payment date = Balances paid date when known, else today). Prefer a Harvest MCP payment/record tool if one exists; if the connector cannot record payments, use the Harvest web UI (Invoices → Record payment) rather than inventing status. Do not invent amounts or invoice numbers.
5. Keep a brief sync log of marked-paid, skipped, unmatched, and failed items for the next run.
6. Tell the user a short summary when any invoices were marked paid or need a decision (unmatched numbers, partial payments, auth failures). If nothing changed, stay quiet unless auth or another blocker failed.
7. If Harvest or Balances auth fails repeatedly across runs, pause this routine and ask the user to reconnect.

Fires on:
- cron `CRON_TZ=America/Chicago 30 18 * * *`

Ask the importing user for:
- Timezone

${@:-}
