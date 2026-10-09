---
name: revenue-engine-router
description: "Use at the start of any engagement, when unsure what to work on next, and every week: diagnoses the business's stage and single growth constraint from a few numbers, picks the one skill to run next, and runs the weekly revenue scorecard (leads, booked calls, show and close rate, average price, CAC, churn, cash collected) to name the biggest leak and one move with a re-measure date."
---

# Revenue engine router
The operating brain of this bot. Find the stage and the single constraint, run the one skill that attacks it, then hold a weekly scorecard so a number moves every week. A loop isn't done until a number moves.

## Inputs
- What is sold, to whom, at what price (from memory or getting-started-founder-os).
- Last 7 and 30 days, Unknown allowed: leads, booked calls, shows, closes, new customers, average price, sales and marketing spend, active customers, cancels, cash collected, cash on hand, monthly burn.
- Last week's scorecard and the move that was assigned.

## Steps
1. **Stage:** classify from the numbers, not the story.
   | Stage | Signal | Usual constraint | Run first |
   |---|---|---|---|
   | Idea | No paying customers | Market | market-and-niche-scoring, then customer-interview-synthesis |
   | First sales | Under ~10 customers or the offer is unproven | Offer | grand-slam-offer-design, then pricing-and-packaging |
   | Repeatable | Offer converts, volume is low | Leads | core-four-lead-plan |
   | Leaky | Leads arrive, few become cash | Conversion | funnel-and-conversion-audit, sales-call-script-and-objections |
   | Scaling | Paid channels, a team, thin margins or cash | Unit economics, cash, people | unit-economics, thirteen-week-cash-calendar, SOPs and delegation |
   | Mature | Several channels and products | Moat, capital, new markets | a long-range strategy and moat plan, a capital plan, an acquisition screen |
2. **Constraint:** run the short form of growth-constraint-finder (want it? enough leads? convert? deliver? stay? pay back? run without the founder?). The first "no" is the constraint. Prove it with one number; if the number is Unknown, the move is to start tracking it.
3. **Route:** name one skill, why it fits, and what it should change. One primary move per week; everything else waits.
4. **Weekly scorecard** (same day each week):
   | Metric | Formula | Last wk | This wk | Change | Target | Source |
   |---|---|---|---|---|---|---|
   | Leads | count | | | | | |
   | Booked calls | count | | | | | |
   | Show rate | shows ÷ booked | | | | | |
   | Close rate | closes ÷ shows | | | | | |
   | Average price | revenue booked ÷ closes | | | | | |
   | CAC | sales + marketing spend ÷ new customers | | | | | |
   | Churn | cancels ÷ customers at start | | | | | |
   | Cash collected | bank/payments | | | | | |
   Show the math. Unknown stays Unknown and goes on the tracking-gap list.
5. **Biggest leak:** compare each ratio with its target or its 4-week average, then weight by dollars at stake (gap × downstream conversion × average price). Name the single biggest leak in one sentence with its dollar estimate.
6. **One move:** one action for the week aimed at that leak: owner, skill to run, done line (a written goal, scope, and done line), and the re-measure date (next review). Draft any messages it needs.
7. **Close last week's move:** hit or miss against its number; keep, adjust, or kill (prove-or-kill-experiment rules). One-line lesson.
8. **Stage check:** when the constraint metric hits target two weeks running, re-run step 2. The constraint has moved.

## Output
Under 15 lines: headline (the leak and this week's move), scorecard table, last move's result, this week's move (skill · owner · done line · re-measure date), tracking gaps.

## Metric it moves
Cash collected per week and the constraint metric; consecutive weekly reviews completed.

## Re-measure
At every weekly review; full stage and constraint re-check monthly with growth-constraint-finder.

## Related skills
getting-started-founder-os · growth-constraint-finder · weekly-business-review · funnel-and-conversion-audit · unit-economics · core-four-lead-plan · grand-slam-offer-design · company-operating-system

Walls (always): draft only, never send, post, spend, book, sign, or trade without the owner's explicit OK for that exact action; no PII in shared places; never invent a number (mark it Unknown); keep employer systems and material out unless the owner opts in. Dollar amounts stay in private files, never in shared channels.
