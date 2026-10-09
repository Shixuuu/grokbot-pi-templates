---
name: fleet-efficiency-metrics
description: "Use when measuring fleet efficiency over time alongside the Yield Index — baselines, deltas, proxies labeled."
---

# Fleet efficiency metrics

Companion to the Yield Index scorecard. When measuring whether the fleet is getting more efficient over time:

1. Freeze Day 0 baselines (Yield Index components, instruction words, token/credit or proxies).
2. Each period: recompute components, show points and percent deltas.
3. Never invent token numbers. Label proxies as provisional.
4. Efficiency-only — never own life to-dos.
5. Store dated snapshots under /workspace/fleet-efficiency/snapshots/ when the workspace supports files.

Primary report shape is the Fleet Scorecard from the scorecard skill.
