---
name: unit-economics
description: "Use before scaling acquisition, when setting prices or ad budgets, or monthly as a checkup: computes gross margin, contribution margin, CAC, LTV, LTV:CAC, and payback per channel and segment from real data, and names the lever to pull."
---

# Unit economics
A business scales only if each new customer is worth more than they cost to get and serve, and the cash comes back fast enough to fund the next one. Compute it from real numbers per channel. Blended averages hide the channels that lose money.

## Inputs
- Revenue per customer per period (ARPA), billing model, and refunds.
- Cost of delivery per customer (COGS: hosting, fulfillment, delivery labor, payment fees, support).
- Sales and marketing spend fully loaded (ads, tools, salaries and commissions, agencies) by channel, plus new customers by channel.
- Churn or repeat-purchase rate (retention-churn-and-expansion).

## Steps
1. **Gross margin % = (revenue − COGS) ÷ revenue.** Use fully loaded delivery cost, including people.
2. **Contribution margin per customer = revenue − all variable costs** (COGS + variable selling costs such as commissions, payment fees, per-unit fulfillment).
3. **CAC by channel = fully loaded acquisition spend in the channel ÷ new customers from it.** Also compute blended CAC. Use a consistent window and allow for lag between spend and close.
4. **LTV = ARPA × gross margin % × expected lifetime** (subscription shortcut: lifetime ≈ 1 ÷ monthly churn). For one-time purchases use observed repeat purchases over 12-24 months. Cap lifetime at a sane horizon (e.g., 3-5 years) and say so.
5. **LTV:CAC.** About 3:1 or better is a common rule of thumb; much higher may mean under-investing in growth.
6. **Payback months = CAC ÷ (monthly ARPA × gross margin %).** Shorter payback = growth funded by customers instead of capital.
7. **First-30-day cash test** (Hormozi's client-financed acquisition idea): does gross profit collected in a customer's first 30 days cover CAC (his stated target is 2× CAC)? If yes, growth can self-fund; use upfront offers, annual prepay or upsells to get there.
8. **Diagnose and pick the lever:** the weakest number points to the fix.
   | Weak number | Levers |
   |---|---|
   | Gross margin | Price up (pricing-and-packaging), delivery efficiency, vendor costs |
   | CAC | Conversion (funnel-and-conversion-audit), channel mix, referrals and partners |
   | LTV | Retention and expansion (retention-churn-and-expansion) |
   | Payback | Upfront cash, annual prepay, attraction offers |
9. **Show the math** for every number with source and date; mark gaps Unknown.

## Output
| Segment/channel | ARPA | GM % | Contribution | CAC | LTV | LTV:CAC | Payback (mo) | 30-day GP ÷ CAC | Verdict |
|---|---|---|---|---|---|---|---|---|---|

Plus: the weakest number, the lever chosen, the expected change, and the re-measure date.

## Metric it moves
LTV:CAC, payback months, and contribution margin per customer.

## Re-measure
Monthly, by channel and cohort. After any price, channel or retention change, recompute on the affected cohort only.

## Related skills
pricing-and-packaging · paid-ads-test-plan · retention-churn-and-expansion · funnel-and-conversion-audit · business-financial-model-and-runway · growth-constraint-finder

Walls (always): draft only, never send, post, spend, book, sign, or trade; no PII or dollar amounts in shared places; never invent a number (mark it Unknown); keep employer systems and material out unless the owner opts in.
