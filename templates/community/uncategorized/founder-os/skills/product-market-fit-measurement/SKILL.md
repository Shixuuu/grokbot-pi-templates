---
name: product-market-fit-measurement
description: "Use once there are paying or active users (about 30+), before scaling spend or headcount, or when growth feels forced: measures PMF with the 40% very-disappointed survey, retention curves, and organic pull, and names the gap to close."
---

# Product-market fit measurement
Scaling before fit is the most expensive mistake a company makes: spend amplifies whatever is there, including churn. Measure fit with behavior and one sharp survey, not vibes.

## Inputs
- Active or paying users with usage and payment data (at least ~30 responses for the survey to mean anything).
- Cohort retention data (by signup month).
- Acquisition mix: organic or referral versus paid or outbound.

## Steps
1. **Sean Ellis survey** (draft the survey; the owner sends): "How would you feel if you could no longer use [product]?" (Very / Somewhat / Not disappointed), plus "What type of people benefit most?", "What is the main benefit?", "How can we improve it?" Survey only people who used it recently (e.g., 2+ times in the last 2 weeks).
2. **Score:** % Very disappointed. About 40% or more is the commonly used fit threshold. Below that, segment until you find a group above it.
3. **Segment the "very disappointed"** (Superhuman's PMF engine): who are they (role, use case, trigger)? That's the high-expectation customer. Narrow targeting to them.
4. **Close the gap:** among the "somewhat disappointed" who share the main benefit the "very" group named, what holds them back? Build the roadmap half on doubling down on the main benefit and half on removing those blockers.
5. **Retention curve:** plot % of each cohort still active or paying by month. Fit looks like a curve that flattens (stops falling) rather than one that trends to zero. Note the flattening level.
6. **Organic pull:** share of new customers from referral, word of mouth, or direct; unprompted referrals; sales-cycle length trending down.
7. **Verdict:**
   | Signal | Pre-fit | Fit |
   |---|---|---|
   | Very disappointed | under 40% | 40% or more in the target segment |
   | Retention curve | still falling | flattened |
   | Organic share | mostly pushed | rising pull |
   Fit in one segment → scale that segment only (core-four-lead-plan). Pre-fit → stop scaling spend and run the gap plan with prove-or-kill-experiment.
8. **Log** the score, the segment and the top 3 gaps on the company scorecard (company-operating-system).

## Output
PMF one-pager: survey score (overall and by segment) · high-expectation customer · main benefit · top blockers · retention curve and flattening level · organic share · verdict · next 3 moves.

## Metric it moves
% very disappointed, cohort retention at month 3 and month 6, and organic share of new customers.

## Re-measure
Re-run the survey every quarter (or after a major release) with a fresh sample, and refresh the cohort curves monthly. Two quarters without movement → revisit the market or offer (market-and-niche-scoring, grand-slam-offer-design).

## Related skills
customer-interview-synthesis · retention-churn-and-expansion · growth-constraint-finder · prove-or-kill-experiment

Walls (always): draft only, never send, post, spend, book, sign, or trade; no PII in shared places; never invent a number (mark it Unknown); keep employer systems and material out unless the owner opts in.
