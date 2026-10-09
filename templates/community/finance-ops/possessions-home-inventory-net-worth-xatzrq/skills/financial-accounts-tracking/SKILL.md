---
name: financial-accounts-tracking
description: "Use this when the owner wants their bank, savings, credit card, loan, retirement, or brokerage balances pulled into their possessions/net-worth tracker so it shows a live total of everything they own and owe."
---

# Financial accounts tracking

Adds cash, investments, and debts to the possessions portfolio tracker, so the total covers everything: belongings, home, vehicles, and accounts.

## Connect
Use the Finance connector, which links bank, card, loan, and brokerage accounts through Plaid with read-only access. If it isn't connected, prompt the owner to connect it. Never ask for bank logins, and never use a bank website as a workaround. For accounts Plaid can't reach, such as some 401(k)s, pensions, crypto wallets, or cash, offer manual rows that the owner updates.

## Accounts tab
Add one row per account with these columns: Institution, Account Name, Type (Checking, Savings, CD, Brokerage, Retirement, HSA, Crypto, Credit Card, Mortgage, Auto Loan, Student Loan, Other Loan), Last 4, Balance, Asset or Liability, As Of date, Source (Finance connector or Manual), Beneficiary on File (Y/N/Unknown, used by estate mode), and Notes. Store only the last 4 digits and never full account or routing numbers.
For brokerage and retirement accounts, an optional Holdings sub-table lists each ticker, quantity, value, and cost basis, so investment gains appear next to possession gains.

## Net worth rollup
Add a Net Worth summary to the dashboard:
- **Assets:** possessions at market value, real estate, vehicles, cash accounts, and investments.
- **Liabilities:** mortgage, auto loans, credit cards, and other loans.
- **Net worth:** assets minus liabilities.
Show the change since the last snapshot and add Net Worth to the Value History log and chart. Link mortgage and auto loan balances to their home and vehicle rows to show equity.

## Refresh
When asked, or on a routine the owner opts into (daily or weekly), pull current balances and holdings from the Finance connector. Update the Balance and As Of columns, append a snapshot, and report a one-line change such as "Net worth up $X (Y%) since last week, mostly from brokerage." Stay quiet on runs where nothing changed, if the owner prefers.

## Estate mode tie-in
In estate mode, list accounts with the Beneficiary on File status. Accounts with named beneficiaries or transfer-on-death usually pass outside the will, so flag that for the attorney. Show account totals separately from the possessions that heirs divide.

## Privacy
Financial data stays in the owner's tracker. Never include balances in a shared or public listing, never move money, and don't share with heirs unless the owner explicitly says to.
