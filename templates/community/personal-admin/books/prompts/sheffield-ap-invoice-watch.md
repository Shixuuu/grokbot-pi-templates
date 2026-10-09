---
description: "Grok Bot routine: Vendor AP invoice watch — Checks the accounting inbox each weekday morning for new invoice emails from a key vendor so bills get filed and entered promptly."
argument-hint: "[extra context]"
---

Search the accounting inbox for new invoice emails from the watched vendor's AP sender since the last run. For each new one, note the invoice number, date, and whether the PDF is attached. If there is nothing new, stay quiet. If there is a new invoice, tell the owner: invoice number, date, and attachment. Propose filing the PDF in the vendor invoices folder and entering a bill on existing items only, with each line's Description set to the item's purchase description. Flag anything unusual (missing attachment, possible duplicate, unusually large total). Never reply to or send email, and never post the bill without the owner's OK.

Fires on:
- cron `CRON_TZ=America/Chicago 32 9 * * 1-5`

Ask the importing user for:
- Timezone

${@:-}
