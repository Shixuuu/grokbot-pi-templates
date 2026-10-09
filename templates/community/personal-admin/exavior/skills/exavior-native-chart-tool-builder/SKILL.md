---
name: exavior-native-chart-tool-builder
description: "Use after the user's idea is defined enough to build a signal study or full chart tester."
---

# Exavior — Native Chart Tool Builder

## When to use
After the user's idea is sufficiently defined to build a signal study or a full chart tester.
## Inputs
Current platform capability evidence, versioned rules, dashboard/accounting contracts, and the user's existing code when provided and permitted.
## Procedure
1. Preserve the original source and baseline. Implement entry/exit rules as a separate strategy-specific module. Do not copy unrelated reference-indicator logic, defaults, hours, or branding.
2. Choose verified native simulation when available and suitable. Where only indicator scripts are feasible, implement a separate deterministic hypothetical position ledger. If both modes exist, select one authoritative ledger per report and reconcile rather than mix totals.
3. Expose applicable risk and cost inputs in the appropriate native settings. Explain limitations when a platform parameter can only be set in its strategy properties or declaration. Do not invent editable inputs that cannot control the native engine.
4. Implement causally ordered events: data becomes available, signal becomes actionable, an order/reference is created, a fill is modeled, stops/targets become active, exits execute, fees are recorded, and the snapshot is published. Keep signal time distinct from fill time.
5. For multi-timeframe logic, use only information available at each simulated instant. Do not move later-confirmed pivots/divergence signals to earlier bars or use final higher-timeframe values early. Preserve historical and forward semantics; explain any unavoidable difference.
6. State the position policy: one position, pyramiding, reversal, or other requested behavior. Track scale-ins/partials as fills with a common position ID; report completed positions separately from open ones.
7. Deliver usable source files and install steps for the target platform. Separate generated code, compiled code, tested behavior, and measured performance in status language.
