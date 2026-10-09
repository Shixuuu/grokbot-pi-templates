---
name: invoice-and-reconcile
description: "Use this when the owner asks for a new customer invoice for hours worked, or when bank deposits need to be matched against open invoices."
---

# Invoice and reconcile

## Build an invoice
1. Get the facts: who worked, date, start/end time, lunch or not, site, travel.
2. Find the last invoice for the same customer and site and copy its format, rates, and travel line exactly. Don't guess travel when a prior invoice for that site exists.
3. Number it with the owner's convention (for example PREFIX-MMDDYY-NN, with the service date) and check the number isn't already used.
4. Compute labor hours x rate plus travel hours x rate. Show the math in chat.
5. Render the PDF, save it in the customer's invoice folder, and show the owner a preview image.
6. Draft the cover email (company address only, the customer's AP contacts on CC). Show recipients, subject and body in chat and ask before sending. Never send without a clear yes.
7. After sending, confirm it in the Sent folder, then mark it Sent with the date in the invoice registry.

## Reconcile deposits
1. Get the bank activity (a CSV export or screenshots), with the date, amount and memo of each deposit.
2. Match each deposit to open invoices by exact amount or an exact sum of several invoices. Wires often name the invoice in the memo.
3. Only mark an invoice Paid when the numbers tie out to the penny. Otherwise leave it open and flag it.
4. Record bank fees separately. Recompute billed, paid, open and past due.
5. Before chasing a customer for past-due money, reconcile first so you never ask for something already paid.

## Data file hygiene
- Back up the registry file before any scripted edit, and close any app that writes it.
- Edit JSON with Python using UTF-8. Shell string quoting can silently drop dollar amounts and garble characters.
