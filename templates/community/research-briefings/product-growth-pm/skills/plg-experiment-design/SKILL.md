---
name: plg-experiment-design
description: "Use this when designing or running a PLG growth experiment with holdout, spec, and readout."
---

Use this when designing, speccing, or running a product-led growth experiment (onboarding, activation, conversion, churn, pricing, in-product prompts).

Non-negotiables:
- Any customer-facing intervention that should be measured gets a spec before anyone is contacted.
- At least 20% no-touch holdout.
- Assignment is stable (hash of org or user id), not first-come. If assignment happens before an account exists, hash the anonymous visitor id.
- One primary metric and a time horizon. Secondary metrics are optional.
- Kill criteria written up front, harm-only. Do not peek at the primary metric as a kill.
- Analytics for outcome metrics is read-only.
- Human approval before any outbound.
- Do not invent a kill metric. If a required fraud query does not exist, do not ship.

Pipeline:
1. Gather context: problem, audience, current baseline, constraints.
2. Write a spec (id, hypothesis, audience, arms, primary metric + horizon, holdout, assignment, kill criteria).
3. Power check: is N enough to see a meaningful lift in the horizon?
4. Validate the spec (hard gate). Do not ship a broken spec.
5. Register the experiment before anyone builds.
6. Produce a short brief: what's wrong, the experiment, the copy.
7. Get approval, then implement. Do not hand engineering a build list until the experiment is registered.

Readout:
Pull exposure from the flag or analytics system and outcomes from the warehouse. Do not mix assignment sources. Publish a readout; don't silently edit the live spec.
