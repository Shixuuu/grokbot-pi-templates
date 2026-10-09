---
name: crypto-tax-and-budget-workflow
description: "Use when building or updating a household budget, net worth, or crypto tax file (cost basis, gains and losses, CPA summary) from bank data, exchange CSVs, and self-custody wallet history."
---

# Budget
1. Pull bank and card transactions (90 days to start). Categorize each one as income, spending, or transfer.
2. Transfers between the owner's own accounts (bank to exchange, exchange to wallet, business to personal, checking to a loan-payment account) are never income or spending. Count income once, where it lands in household money, to avoid double counting.
3. Add spending that bypasses the linked bank: crypto debit cards paid in stablecoins (from the exchange CSV) and bills paid from unlinked accounts, such as a car loan paid from a separate credit union. First search the bank data for the payment amount and lender name so it isn't counted twice.
4. Round amounts that end in a small fee (like $409) are probably ATM cash. Ask whether any of it went into a cash stash, since then it isn't really spending.
5. Report steady income, variable income, core spending, and the monthly gap in simple tables. Say what covers the gap.

# Net worth
1. Assets: bank balances, exchange balances, every self-custody wallet (at a stated price and time), retirement accounts (label traditional, Roth, and taxable), cash on hand, and vehicles or property at the owner's own estimate, labeled as an estimate.
2. Liabilities: loans and card balances. Show vehicle equity (value minus loan).
3. Before reporting, check that every wallet the owner has named is actually counted. Count open DEX offers once, since they're already in the balance. State the price assumptions (for example, a dollar stablecoin at $1.00).
4. A bank that won't link can come in from app screenshots: the balance, payment, rate, and origination date. Treat those figures as "as of" the screenshot date.

# Creator and business income
- Platform payouts (YouTube AdSense, X creator payouts, affiliate networks) are business income, counted in the year they're paid. A December payout that arrives in January belongs to the next year. Monthly payout screenshots are good records.
- An affiliate deposit can cover several months. Ask before treating it as a raise.
- Show or business expenses: record the date, amount, account it was paid from, and the receipt. Ask the business-use percentage for anything mixed-use (computer, phone, internet). The CPA decides deductibility.

# Crypto tax file
1. Gather every source: exchange connectors and CSVs, public wallet ledger history, IRA statements, and 1099s.
2. Identify which wallets are the owner's own. Moves between them carry cost over and are not sales. Trace a deposit back through chains of the owner's own wallets and exchanges to find its real cost lot. Confirm unknown addresses with the owner, and use ledger memos as clues.
3. Book every disposal: crypto to cash, crypto to crypto, crypto to stablecoin, and card spends. Stablecoin spends near $1 produce near-zero gains but are still recorded, so the totals match the exchange's 1099-DA.
4. Use FIFO by default and note that the CPA may prefer specific identification. Split short-term and long-term. For sales with unknown cost, use a clearly labeled stand-in, show the worst case at $0 cost, and list the document that would fix it.
5. IRA distributions paid in crypto are ordinary income at fair market value, and that value becomes the new cost basis. Roth conversions are income too. The 10% early penalty normally applies to the distribution, not the conversion, and only under age 59½. Check the 1099-R for withholding.
6. When the owner remembers where money went, check it against the ledger or bank data before booking it. If the data disagrees, say so plainly and keep what the data shows.
7. Reconcile each account: deposits minus withdrawals should equal the balance. Report any gap and don't book a sale without evidence.
8. Keep backups before every rebuild, and check formulas for errors.

# Deliverables
An easy-read PDF with big headings and simple tables, marked "Draft, not tax advice". It covers income, gains and losses by account, net worth, the budget, a rough federal tax estimate with and without deductions, a checklist of missing documents, and questions for the CPA.

# Rules
- Read-only: never trade, move money, file, or send messages for the owner.
- Never invent numbers. Plain English. The CPA decides deductibility and filing positions.
- Never save passwords or full account numbers. If a document password looks built from an SSN, warn the owner.
