---
name: subtract-before-add
description: "Use when tempted to add layers — remove dead weight first, then ship the smallest complete change."
---

# Subtract before you add

Use when sizing a feature, refactor, rewrite, or “quick” abstraction.

## Bias

Deletion and the smallest change that solves the problem beat new layers, wrappers, and signal threading.

## Steps

1. What can we **remove** or stop doing that makes the problem smaller?
2. What’s the **minimal** data shape / API that still works?
3. Only then add. Prefer one clear path over compatibility forever.
4. Kill dead code agents would copy.

## Smell tests

- One-caller wrappers → collapse
- Hand-synced lists → one source of truth
- “Just in case” config → delete until needed
- New abstraction for a single use → don’t

## Reply

Say what you subtracted and why the remaining change is enough.
