---
name: match-bank-deposits-to-undeposited-funds
description: "Use when card-processor or ACH-portal batch deposits hit the bank and need to be matched in QuickBooks Undeposited Funds, or when a card charge has no matching invoice or sales receipt."
---

# Match bank deposits to Undeposited Funds

Card and ACH batches land in QuickBooks as Undeposited Funds, then as bank deposits. Match the bank deposit to the batch, not to individual invoices.

## Sources
- Card processor: card batches. Use its API or reports for batch totals and charge detail.
- ACH or customer payment portal: ACH/card batches from its API or reports.
- QuickBooks: Undeposited Funds, deposits, invoices, sales receipts.
- Inventory or sales-order system: cross-check when a charge exists but QuickBooks does not.

## Numbering
- Learn the owner's rule for how sales-order numbers map to invoice or sales receipt numbers (for example, the same trailing digits with a different prefix), and use it to link records.

## Steps
1. When a batch deposit hits the bank, get the date and amount.
2. In the processor or portal, find the matching batch total for that date and amount.
3. In QuickBooks, open Undeposited Funds and match those payments to that deposit.
4. If a card charge has no invoice or sales receipt, look up the sale in the inventory or sales-order system (not entered yet, or missed). Do not invent an accounting document.
5. If the sales-order system has the order and QuickBooks does not, flag it for the owner to add. Do not auto-create unless asked.
6. Report a proposed match list and an exception list to the owner.

## Do not
- Refund, void, or change processor, portal, inventory, or accounting records during a match.
- Guess a match when amounts or numbers disagree. Report the exception.
