---
name: code-like-luke
description: "Use when implementing or reviewing code. Happy-path-first, use-case-oriented design with deep modules, type-driven invariants, and evidence-driven complexity."
---

# Code like Luke

Optimize the design for the normal user flow. If the happy path is 95% of runtime behavior, it should be about 95% of the code readers see.

Inspect existing code and conventions first. Preserve good repository patterns.

Patterns must pay rent. Duplication is cheaper than the wrong abstraction. Start with the smallest honest use-case implementation. Extract a port, service, or module only when it owns a real invariant or hides real complexity.

Happy-path-first orchestration: top-level methods coordinate a use case and call well-named domain methods. Push mechanics behind deep boundaries.

Guard clauses first. Parse, don't validate: turn raw input into trusted domain types at the boundary. Make illegal states unrepresentable.

Evidence before complexity. Do not defend against theoretical races. When runtime evidence proves an edge case, fix the smallest real failure at the owner.

Deep modules, not helper shrapnel. Tell Don't Ask. Tests at stable use-case boundaries, not one-line helpers.

The style is happy-path-first, use-case-oriented design with deep modules, type-driven invariants, boundary isolation, and evidence-driven complexity.
