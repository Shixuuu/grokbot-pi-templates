---
name: retention-churn-and-expansion
description: "Use monthly once there are repeat or subscription customers, or when churn, refunds, or flat LTV show up: finds why customers leave, fixes onboarding and activation, and builds expansion (upsell, cross-sell, referrals) to raise LTV."
---

# Retention, churn and expansion
Retention is the cheapest growth. Every customer kept raises LTV, which raises what you can afford to pay for the next one. Customers stay when they get the result fast and feel progress, and leave when they don't. Fix the first 30 days before anything else.

## Inputs
- Customer list with start date, plan, revenue, usage, and cancel date and reason (CRM or billing). Anonymized IDs only in shared places.
- Onboarding steps and support tickets.
- Exit-survey or churn-call notes (or start collecting them now).

## Steps
1. **Measure the baseline:** monthly logo churn, revenue churn, net revenue retention (NRR = starting MRR + expansion − contraction − churn, ÷ starting MRR), cohort retention curves, average lifetime, refund rate.
2. **Find when they leave:** plot churn by tenure. Spikes in the first 30-90 days mean an onboarding or expectation problem; later churn means value fade or a competitor.
3. **Find why:** code exit reasons (no result, too hard, too expensive for the value, switched, no longer needed, involuntary/payment failure). Interview 5 churned customers (customer-interview-synthesis).
4. **Define the activation point:** the earliest action that predicts retention (compare retained vs. churned users' first-week behavior). Make onboarding drive everyone to it fast.
5. **Fix by cause:**
   - **Onboarding:** a welcome sequence, a first-win plan in days not weeks, a human touch at the riskiest moment, progress milestones.
   - **Expectation:** align sales promises with delivery (sales-call-script-and-objections).
   - **Engagement:** community, check-ins, usage nudges, wins shared publicly.
   - **Involuntary churn:** card updater, dunning sequence, retry logic.
   - **Save flow:** at cancel, offer a pause, a downgrade or a fix for the stated reason (no dark patterns).
6. **Expansion (raise LTV):** upsells at the moment of need, cross-sells for the next problem, tier upgrades as usage grows, annual prepay, continuity offers (pricing-and-packaging ascension path).
7. **Referral and proof loop:** ask for referrals and case studies right after a win, never before. Capture results as testimonials (with consent) to feed sales and content.
8. **Ship one retention fix per cycle** with a test (prove-or-kill-experiment) and draft any customer messaging.

## Output
| Metric | Baseline | Target | This month | Trend |
|---|---|---|---|---|
| Logo churn % / mo | | | | |
| Revenue churn % / mo | | | | |
| NRR % | | | | |
| Activation rate (first N days) | | | | |
| Refund % | | | | |
| Referrals per 100 customers | | | | |

Plus: churn-reason table, activation point, the fix shipped this cycle, expansion offers drafted.

## Metric it moves
Monthly churn, NRR, and LTV; activation rate as the leading indicator.

## Re-measure
Monthly cohort and churn review; judge a fix on the cohorts that started after it shipped (allow at least one full billing cycle). NRR above 100% means the base grows on its own; track it on the company scorecard.

## Related skills
product-market-fit-measurement · unit-economics · pricing-and-packaging · customer-interview-synthesis · funnel-and-conversion-audit · company-operating-system

Walls (always): draft only, never send, post, spend, book, sign, or trade; no PII in shared places; never invent a number (mark it Unknown); keep employer systems and material out unless the owner opts in. Cancellation flows and auto-renewal terms must follow consumer-protection law (e.g., click-to-cancel rules); route questions to an attorney.
