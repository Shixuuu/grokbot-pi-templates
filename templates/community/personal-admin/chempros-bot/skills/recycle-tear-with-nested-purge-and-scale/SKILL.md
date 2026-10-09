---
name: recycle-tear-with-nested-purge-and-scale
description: "Use when closing a DWSIM recycle tear that also has a purge (or inert-spec) degree of freedom and a production scale target."
---

# Recycle tear with nested purge and scale

Close production loops with **nested** outer decisions, not one simultaneous update of tear + purge + scale.

## When this applies
- Recycle with inert buildup and a purge splitter
- Spec like "inerts in recycle = X mol%" plus a product rate target
- Prior solve shows `converged_tear: false`, growing tear residual, or purge collapsing toward zero while product was "fixed" by post-hoc scale

## Nested algorithm (order matters)
1. **Fix purge** at a trial fraction (or fixed bleed).
2. **Close the tear** at fixed purge — direct substitution (or Wegstein) on **component molar flows** of tear stream vs recycle-out until relative molar-flow tear error is small (e.g. <= 1e-4), composition match max |dy| same order, inert mole fraction steady.
3. **Outer purge search** (bisection / secant) so recycle inerts hit the design target (e.g. CH4+Ar = 15 mol%). Re-close tear at each trial.
4. **Scale fresh + recycle together** to hit product rate; **re-close tear** after scale. Never multiply only the product stream after the solver stopped.

## Results hygiene
Persist `converged_tear`, tear residuals, purge fraction, inert mol%, product rate, and `solve_ok`. Do not mark solved if `converged_tear` is false. Do not quote a product rate from post-hoc scale on a broken tear.

## Done when
Tear residuals and composition match within tolerances, inert and product specs met on the same converged solve, JSON flags tell the truth.
