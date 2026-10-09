---
name: gibbs-reactor-coke-graphite-rpb-workaround
description: "Use when a DWSIM GibbsReactor must include solid carbon (Graphite/coke) and ReactivePhaseBehavior has no VaporAndSolid."
---

# Gibbs reactor coke / Graphite RPB workaround

DWSIM ReactivePhaseType has CalculateEquilibrium | Vapor | Liquid | Solid — **no VaporAndSolid**. Trial order: Solid (often no coke) → CalculateEquilibrium (may break closure) → Vapor (watch C-closure/T drift) → Liquid (often practical workaround).

Reporting gates before quoting coke yield: |C_closure - 1| < 0.05 and |product_T - setpoint_T| <= 2 K. Persist c_closure_ok / coke_yield_reportable. Ban failed points from answers.

Prefer reactor outlet vapor+liquid molar sum at reactor T for balances. Name chosen RPB in results.
