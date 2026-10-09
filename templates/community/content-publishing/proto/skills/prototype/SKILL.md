---
name: prototype
description: "Build multiple genuinely different versions of a UI piece you describe, rendered behind a visual picker so you can flip through them live and promote the one that feels right. Only runs when explicitly invoked; it does not trigger on its own."
---

# Prototyping Variants

Divergence skill: build several genuinely different versions of one UI piece behind a visual picker. Each variant must be shippable on its own and meet Emil craft (ease-out, sub-300ms, correct origin, transform/opacity, reduced-motion).

## Hard rules
1. Never touch production during exploration — isolated prototype surface only.
2. Variants diverge on a named axis (layout, density, personality, motion, interaction).
3. Every variant fully works with realistic content.
4. Picker chrome is fixed; one variant at a time, full size; instant switch (no animation).
5. Clean up after promoting a winner.

## Workflow
Phase 1 Scope → Phase 2 Recon (stack/tokens/personality) → Phase 3 Choose directions (name + axis) → Phase 4 Build picker harness → Phase 5 Verify and hand off with tradeoff table → Phase 6 Promote on selection.

Default 3 variants. Names describe direction, never Option A/B/C.
