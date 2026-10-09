---
name: product-ui
description: "Use when building, refactoring, or auditing dense product UI: dashboards, app screens, tables, filters, settings, CRUD, empty/loading/error states, or any logged-in workflow where scanning and repeated action matter more than marketing composition."
---

# Product UI

Specialize in application surfaces, not marketing pages. Prioritize scanning, comparison, and repeated action.

This is the default skill for logged-in app chrome: feeds, onboarding, settings, chat, and account surfaces.

Required states before the happy path: idle, loading (skeleton, no CLS), empty (invitation to act), error (what failed + fix), partial, disabled/submitting, success (same verb), offline/stale.

IA: name the primary workflow in one sentence. Frequent action on a large stable target. Recognition over recall. Progressive disclosure. Tables get sticky headers, tabular-nums, visible sort, empty/error rows.

Mobile: bottom nav or one primary + menu; filters in a sheet; touch 44px. Desktop: sidebar or top nav, keyboard shortcuts, hover never the only affordance.

Derive color/type/spacing from existing tokens. Match the project's styling system. Optimistic UI only when rollback is defined.

Anti-slop: dark dashboard by default, colored left borders on every card, gradient metrics, fake charts, marketing heroes on operational tools.
