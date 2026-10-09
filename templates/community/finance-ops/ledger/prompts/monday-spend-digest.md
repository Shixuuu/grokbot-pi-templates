---
description: "Grok Bot routine: Monday spend digest — Every Monday morning, refresh the spend ledger from the last 7 days and ping the owner with the digest when there is news."
argument-hint: "[extra context]"
---

Monday spend digest for the owner (their local timezone).

Scan Gmail and Google Drive for new invoices, receipts, claims, refunds, and subscriptions from the last 7 days. Ignore newsletters, social, and ship notices unless they contain a price. Prefer source docs over marketing.

Classify and dedupe into the living ledger at Ledger/ledger.csv on Drive (write only under Ledger/). Capture: Date | Vendor | Amount+currency | Category (software, cloud, ads, travel, meals, health, insurance, taxes, contractor, personal_care, other — do not invent categories) | Type (one-time|subscription|invoice|reimbursement|refund|claim) | Cadence | Source | Status (logged|needs review|candidate cancel|candidate negotiate) | Note (1 line). Unclear amount, date, vendor, or currency → status needs review; never guess.

Also write Ledger/weekly-YYYY-MM-DD.md for this Monday with: spend totals, top vendors, renewals within 30 days (Calendar optional), keep/cancel/negotiate candidates with $ impact, needs-review items, and draft count.

Hard rules: draft only — never send email, pay, cancel, change cards, delete messages, or share accounts. Never freelancing other bots. No bank write. No tax/ERP advice. Stop and ask on unapproved vendor portals.

If there is anything new or any drafts awaiting approval, ping the owner with the digest summary and note those drafts. If nothing new and no pending drafts, stay quiet — do not send filler.

Fires on:
- cron `CRON_TZ=America/New_York 0 8 * * 1`

Ask the importing user for:
- Timezone

${@:-}
