---
name: sevdesk-mcp
description: "Use this whenever you call the sevdesk connector — before booking, listing, uploading, or using sevdesk_call — so you pick the right tool and VAT fields."
---

# sevdesk MCP

How to drive the sevdesk connector safely. Prefer dedicated tools; use the catalogue only when a wrapper is missing.

## First checks
1. `sevdesk_ping` — confirm the token works, read-only/dry-run mode, and bookkeeping system version (1.0 taxType vs 2.0 taxRule).
2. For unfamiliar write paths, pass `dryRun: true` once, then execute for real.
3. Never invent amounts, suppliers, tax rules, or contact ids. Read them from sevdesk or from a receipt the user provided.

## Tool map (common work)
| Goal | Tool |
|------|------|
| List / search bank txs | `sevdesk_list_transactions` |
| List / search vouchers (Belege) | `sevdesk_list_vouchers` |
| One voucher + positions | `sevdesk_get_voucher` |
| Contacts | `sevdesk_list_contacts` |
| Outgoing invoices | `sevdesk_list_invoices`, `sevdesk_create_invoice` (draft only), `sevdesk_mark_invoice_sent`, `sevdesk_get_invoice_pdf` |
| Upload receipt file | `sevdesk_upload_voucher_file` → keep the filename token |
| Create expense/income voucher | `sevdesk_create_voucher` (or `sevdesk_call` + `voucherFactorySaveVoucher` when the wrapper is too narrow) |
| Change VAT rule on a draft | `sevdesk_set_tax_rule` |
| Account / tax guidance | `sevdesk_receipt_guidance` |
| Missing receipts vs bank | `sevdesk_reconcile_transactions` |
| Folder of PDFs vs booked vouchers | `sevdesk_diff_receipt_folder` |
| Duplicates / stuck drafts | `sevdesk_find_duplicates` |
| Recurring supplier gaps | `sevdesk_subscription_gaps` |
| VAT / §13b health | `sevdesk_audit_vat`, `sevdesk_reverse_charge_report` |
| Aging receivables | `sevdesk_invoice_aging` |
| Anything else | `sevdesk_list_operations` → `sevdesk_describe_operation` → `sevdesk_call` |

## Writes
- Mutating tools change live bookkeeping. Confirm with the user before bulk deletes, mass rebooks, or sending invoices to customers.
- `sevdesk_create_invoice` always creates a **draft** — nothing goes to a customer until they review it in sevdesk.
- `sevdesk_set_tax_rule` only works on **draft** vouchers. Paid/foreign-currency fixes belong in the sevdesk UI.
- Uploads must use an allowlisted path on this machine; copy receipts into that folder first if needed.

## Booking field conventions (German small business)
Confirm the user's tax regime once and store it in memory. Typical **Kleinunternehmer §19** pattern used with this connector:
- **Foreign SaaS / §13b expenses:** taxRule **13**, creditDebit **C**, accountDatev **4279**, taxRate **0**
- **Domestic DE expenses:** taxRule **10**, creditDebit **C**, accountDatev **4279**
- **Income:** taxRule **11**, taxRate **0**, creditDebit **D**, accountDatev **3629**
- Create voucher status **100** (open), then book full payment against the matching bank tx when the user wants it booked
- Expense `bookAmount` is **negative**; income is **positive**
- A PDF is helpful but **not required** to book when the bank line and merchant are clear

If the account is regular VAT (not Kleinunternehmer), look up allowed rules with `sevdesk_receipt_guidance` instead of copying the pattern above.

## Catalogue escape hatch
1. `sevdesk_list_operations` with a short query or tag (`Voucher`, `CheckAccountTransaction`, `Contact`, …)
2. `sevdesk_describe_operation` for the exact `operationId`
3. `sevdesk_call` with `params` / `body` (nested objects use sevdesk bracket encoding)

## Do not
- Book personal spending as business without a standing rule or an explicit user answer
- Guess contact ids or invent invoice numbers
- Email invoices from here — marking sent is PDF/print/postal only
- Dump the full account catalogue; always filter `sevdesk_receipt_guidance`
