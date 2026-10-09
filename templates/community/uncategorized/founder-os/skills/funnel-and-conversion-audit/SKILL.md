---
name: funnel-and-conversion-audit
description: "Use when leads don't turn into revenue, CAC is rising, or before adding traffic: maps every funnel step, measures conversion between them, finds the biggest leak, and proposes one fix at a time with a test."
---

# Funnel and conversion audit
Fix the leak before pouring more water in. A 2× lift at the weakest step usually beats 2× traffic, and it's cheaper. Measure every step, find the bottleneck, change one thing, re-measure.

## Inputs
- Funnel map: traffic source → landing page → lead capture → nurture → booking → show → sale → onboarding → first result.
- Counts per step for the last 30-90 days (analytics, CRM, calendar, payments). Missing counts are Unknown and become the first fix (tracking).
- Speed-to-lead data (minutes from lead to first contact), page speed, and mobile share.

## Steps
1. **Map and count:** write each step with its count and the conversion to the next step.
   | Step | Count | Conv. to next | Benchmark or prior | Gap | Notes |
   |---|---|---|---|---|---|
2. **Find the bottleneck:** the step with the biggest drop versus its own prior or a sensible benchmark, weighted by dollars at stake (the lift there × downstream conversion × deal value).
3. **Diagnose by mechanism:**
   - Low click-to-lead: message mismatch with the ad or hook, slow or broken mobile page, weak offer or lead magnet, too many fields.
   - Low lead-to-booked: slow follow-up (speed to lead in minutes, not hours), no nurture, unclear next step.
   - Low show rate: no reminders, no pre-call value, booked too far out.
   - Low close rate: weak discovery, unqualified leads, unhandled objections (sales-call-script-and-objections), offer gap (grand-slam-offer-design).
   - Low onboarding to first result: friction, no activation milestone (retention-churn-and-expansion).
4. **Walk it as a customer** (or a teammate bot acting as one): every page, form, email and confirmation on mobile and desktop. Log friction points.
5. **Prioritize fixes:** expected lift × dollars at stake ÷ effort. Pick the top one.
6. **Design the test:** one change, success metric, minimum sample, date (prove-or-kill-experiment). Draft the new copy, page or sequence.
7. **Ship (with the owner's explicit OK for anything public) and record the result**, then move to the next bottleneck.

## Output
Funnel table (above), the bottleneck and dollar impact, diagnosis, ranked fix list, the one test (draft assets included).

## Metric it moves
Overall lead-to-customer conversion and revenue per lead; the specific step's conversion rate.

## Re-measure
At the test's sample size or date: the step's conversion and end-to-end revenue per lead versus baseline. Re-run the full audit monthly, or whenever a traffic source or offer changes.

## Related skills
core-four-lead-plan · sales-call-script-and-objections · paid-ads-test-plan · grand-slam-offer-design · retention-churn-and-expansion · growth-constraint-finder

Walls (always): draft only, never send, post, spend, book, sign, or trade; no PII in shared places; never invent a number (mark it Unknown); keep employer systems and material out unless the owner opts in.
