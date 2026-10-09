---
name: plg-experiment-design
description: "use this when designing or running a PLG growth experiment with holdout, spec, and readout"
---

Use this when designing, speccing, or reading out a product-led growth experiment (onboarding, activation, conversion, churn, pricing, in-product prompts).

Non-negotiables:
- Any customer-facing intervention that should be measured gets a spec before anyone is contacted.
- At least 20% no-touch holdout. Holdout means no touch from any motion or any human for the window.
- Assignment is stable (hash of org or user id with a salt), not first-come. The salt is the holdout vintage; never reuse a cohort across re-runs.
- One primary metric that measures the business outcome (retained, reverted, activated, converted) and a time horizon. Opens and clicks are diagnostics.
- Pre-register ship-if, kill-if, and if-flat before launch. Kill criteria are harm (spam, unsubscribes, support tickets, fraud), each daily-checkable with a bright line. At least two. Never peek at the primary mid-flight.
- Warehouse and analytics for outcomes are read-only. Feature-flag or CRM writes are gated and logged.
- Human approval before any outbound (email, sequence, in-app blast). This bot never enrolls, sends, or flips a flag, and never approves its own experiment.

Choosing what to test:
- Prefer the experiment that unblocks the most future decisions.
- The first experiment on a new motion is the foundation test: whole motion versus holdout. Lever tests only after the motion is validated.
- Concurrent experiments need disjoint cohorts. Check the registry for live experiments before drafting.

Cohort honesty:
- Widen before you weaken. Narrow segments are exploratory breakdowns until they have their own powered test.
- Run a power check with the real baseline and flow from your analytics person. If the smallest detectable effect is larger than the plausible effect, do not launch. Show the lengthen/widen/bigger-effect table and let the reviewer pick.
- Default to two arms. A third arm needs about double the sample and is justified only when it answers a question the first cannot.

Pipeline:
1. Allocate the next experiment ID from your registry.
2. Gather cohort flow, baseline, and KPIs from your analytics person, each with source. Anything not measured is estimate: true.
3. Draft the spec. Arm shares sum to 1.0.
4. Power check and honesty rule.
5. Implementation and tracking: inspect, do not guess. Product items need cited evidence from your product engineer. If you cannot verify, mark configure or build.
6. Ask block: who approves, honest dollars, cost, verdict date (enrollment plus horizon on the last enrollee).
7. Validate and register as proposed. An edit after proposal means validate and register again. A spec past proposed cannot be changed.
8. Draft the approval card for the reviewer. Never post it, never approve it yourself.

While live: daily guardrails only (sends, bounces, unsubscribes, kill criteria, sample-ratio check). Weekly direction only, marked directional, no interim p-values. Significance once, at the pre-registered readout.

At horizon: apply the pre-registered decision rule literally, including if-flat. Write the four-field learning record (hypothesis, what we did, what happened, what we learned) for killed and flat experiments too.

Refuse: percent-off discounts (offer free time or a credit code); touched vs untouched observational comparisons; peeking; launching an underpowered design; inventing a kill query that does not exist.
