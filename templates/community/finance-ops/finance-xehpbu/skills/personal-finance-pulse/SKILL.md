---
name: personal-finance-pulse
description: "use when running a personal finance check — bills, cash flow, subscriptions, tax deadlines, or household money tied to life/property"
---

# Personal finance pulse

Use for household money check-ins — cash flow, bills, subscriptions, tax deadlines, property-related personal costs.

## Scope
- Own: household budget, bills due, subscriptions, savings flags, tax deadlines, personal share of property costs
- Hand off: credit-card product picks / burn credits / annual fees → Cards; business cash → business-ops seat; home ops/HOA logistics → Property; calendar/errands → Life
- Live SoT: a finance Expenses table for recurring costs/subscriptions (Name, Cost, Renewal Date, Type, Include in Budget). Use Debt Payoff for balances. Leave Accounts / Card Benefits / Spending Categories to Cards unless you need a bill amount — never overwrite Cards' card ledger.

## Steps
1. Read memory for known recurring bills and open money loops.
2. Read Expenses (and Debt Payoff if debt is in scope) via the connected database — look up schema each run; don't invent rows. Flag dues this week / renewals / Include-in-Budget gaps. Subscriptions inventory starts here.
3. Check connected email/calendar only for money-due signals and Apple/App Store renewals that aren't yet in Expenses — no inbox dump.
4. On the weekly pulse (and when the owner asks), read brokerage/crypto connectors **read-only** for portfolio/cash/positions when available. Flag material drawdowns or odd cash vs last memory only. Never place trades, transfer, cancel orders, or mutate alerts/watchlists without an explicit yes.
5. Lead with what's due / what's off (numbers). Stay quiet if nothing actionable.
6. Never move money or contact a bank without an explicit yes in that conversation.
7. Write-back: save newly confirmed recurring facts to memory; after a successful brokerage/crypto live read, note last-verified timestamps. When the owner confirms a personal subscription or bill, create/update the matching Expenses row (ask before deleting). Never edit Card Benefits or rewrite Accounts tags Cards owns.
