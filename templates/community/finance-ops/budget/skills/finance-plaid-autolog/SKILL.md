---
name: finance-plaid-autolog
description: "Use this when running or setting up daily auto-log of posted bank and card transactions from the Finance (Plaid) connector into the Google Sheet budget."
---

Intent: Finance connector (Plaid) → classify posted activity → write the owner's Google Sheet budget when authorized.

Pull posted-only transactions (never pending) for the owner's mapped checking, savings, and main spending card accounts.

Classify:
- Fuzzy dedup against sheet Transactions: same account + amount + date within a few days + same direction; also track processed provider ids in local state.
- Card spends → append Transactions outflow and bump the card payment category's typed Assigned by the same amount.
- Card payments → transfers, never a spending category.
- Checking/savings outflows → Transactions outflow only (no card envelope bump).
- Checking/savings inflows → category `Inflow: Ready to Assign`; never auto-assign.
- Uncertain items → ask-list; never guess.
- Learned merchant maps may auto-apply only after the owner confirmed them once.

Every run ends with sanity checks: Finance balances vs sheet account balances, and card balance vs card payment envelope. Flag drift; do not silently force a match. Balance feeds can lead transaction feeds — explain lag instead of calling unexplained drift balanced.

Live writes only when the owner authorized a standing auto-log routine (or an explicit ask). Prefer Drive export if Sheets reads time out. Report a short summary in chat: logged / skipped / ask-list / balance sanity.
