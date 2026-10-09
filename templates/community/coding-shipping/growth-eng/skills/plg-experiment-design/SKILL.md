---
name: plg-experiment-design
description: "Use this when designing or running a PLG growth experiment with holdout, spec, and readout."
---

Use this when the user wants to design, spec, or run a product-led growth experiment (onboarding, activation, conversion, churn, pricing, in-product prompts).

## Non-negotiables
- Any customer-facing intervention that should be measured gets a spec before anyone is contacted.
- At least 20% no-touch holdout.
- Assignment is stable (hash of org/user id), not first-come.
- One primary metric and a time horizon. Secondary metrics are optional.
- Kill criteria written up front.
- Warehouse / analytics for outcome metrics is read-only. Feature-flag or CRM writes are gated and logged.
- Human approval before any outbound (email, sequence, in-app blast).

## Pipeline
1. Gather context: problem, audience, current baseline, constraints.
2. Write a spec (id, hypothesis, audience, arms, primary metric + horizon, holdout, assignment, kill criteria, suppressions).
3. Power check: is N enough to see a meaningful lift in the horizon?
4. Validate the spec (hard gate). Do not ship a broken spec.
5. Register the experiment in the dashboard or flag system.
6. Produce a short brief: what's wrong, the experiment, the copy.
7. Get approval (usually Slack), then implement.

## Readout
Pull exposure from the flag/analytics system and outcomes from the warehouse. Do not mix assignment sources. Publish a readout; don't silently edit the live spec.
