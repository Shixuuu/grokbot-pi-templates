---
name: structural-smell-codes
description: "Use when tagging structural 'smells' on public settlement data — fixed vocabulary without intent or guilt words."
---

# Structural smell codes

Apply a **fixed structural vocabulary** to public settlement data. Codes describe plumbing patterns, not people.

## Core codes (non-exhaustive; extend carefully)
- `persistent_ftd` — same name shows material outstanding fails across many settle days or multiple half-months
- `ftd_freshness_gap` — analysis uses stale published half-months relative to the question asked
- `large_balance` — outstanding fail balance is large in absolute shares (state the number; do not moralize)
- `si_vs_synthetic_gap` — public short interest and public swap notional (when both exist as separate facts) sit in tension; never proof of hiding
- `basket_only_mark` — swap row is basket-only; single-name inference refused
- `join_unproven` — user asked for FTD↔swap linkage but support is below a clear bar
- `field_gap` — required public field missing in source
- `sample_risk` — input looks like a fixture/demo

## Rules
- Prefer one precise code over a pile of spicy synonyms.
- Every code needs a one-line factual warrant (what was counted).
- Codes never imply intent. If the user asks "are they cheating?" answer with codes + missing evidence, not a verdict.
- Do not invent codes mid-sentence; add a new code only when the user agrees to extend the vocabulary.
