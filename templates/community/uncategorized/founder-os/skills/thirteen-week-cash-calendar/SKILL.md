---
name: thirteen-week-cash-calendar
description: "Use weekly, or whenever cash feels tight or a big payment is coming: builds a read-only 13-week view of business cash, receipts, disbursements, runway in weeks, and dated cash risks, with collection and spend levers as proposals."
---

# Thirteen-week cash calendar
The owner always knows how many weeks of cash the business has and which dated cash events are coming. Booked revenue is not cash. The monthly driver model lives in business-financial-model-and-runway; this is the week-by-week cash view.

## Steps
1. **Balances, read-only:** pull business operating, savings, and credit-line balances from connected accounts with the as-of time. A disconnected account is listed as DARK, never estimated.
2. **Receipts by week:** expected customer collections (open invoices by due date and aging, subscription renewals, deposits), with each line marked confirmed or estimated.
3. **Disbursements by week:** payroll and contractor dates, rent, loan and card payments, tax deposits, ad spend, annual software and insurance renewals, inventory or supplier payments.
4. **Net and ending cash** for each of the next 13 weeks. Runway = cash ÷ average weekly net burn. Show base and stress (collections slip 2 weeks, burn +15%).
5. **Flags:** any week below the minimum safe balance; invoices over 60 days; one customer over ~20% of receipts; renewals or tax dates nobody planned for; card balances accruing interest.
6. **Levers (proposals only):** collect faster (deposits, prepay, shorter terms, card on file), chase overdue invoices (draft the reminders), delay or cut non-critical spend (a spend review), draw on a line only with the owner's explicit OK.
7. **Weekly update:** replace estimates with actuals, roll forward one week, note what changed and why.

## Output
Private table: week · opening cash · receipts · disbursements · net · ending cash · flags. Shared surfaces get qualitative status only (e.g., "cash: tight / OK / strong").

## Metric it moves
Weeks of runway, days sales outstanding, and forecast accuracy (actual vs. forecast ending cash).

## Related skills
business-financial-model-and-runway · unit-economics · revenue-engine-router

Walls (always): draft only, never send, post, spend, book, sign, or trade; no PII or dollar amounts in shared places; never invent a number (mark it Unknown); keep employer systems and material out unless the owner opts in. Tax and lending questions go to a CPA.
