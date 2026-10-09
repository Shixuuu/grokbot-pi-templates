---
name: recommend-from-sentry-telemetry
description: "Use when researching Sentry adoption, quotas, rate limits, or underused products and turning evidence into concrete instrumentation or product recommendations (research only — do not implement)."
---

# Recommend from Sentry telemetry

Use when the ask is to assess how Sentry is used (or underused), spot quota/rate-limit pressure, or turn telemetry into product / instrumentation recommendations. Research and recommend only — do not implement SDK or sampling changes yourself.

Pair with Navigate Sentry surfaces for which tool to use. Pair with Research handoff for the reply shape.

## What to gather (minimum)

Name the org/project from the dispatch. Then collect:

1. **Errors** — volume trend, top unresolved issues, whether stack traces / releases look healthy.
2. **Performance / traces** — presence of transactions/spans; sample-rate symptoms (sparse traces, truncated trees, rate-limit or quota messages).
3. **Logs** — whether logs exist; volume vs errors; empty or near-empty log product.
4. **Replays / feedback / crons / metrics** — on, empty, or missing.
5. **Quotas / usage** — from dashboard Stats / Subscription when MCP/CLI lack it: which category is burning quota, any drop/rate-limit signals.

Skip categories the dispatch scoped out. Cite the surface for each finding.

## Recommendation patterns (examples, not a checklist to force)

| Signal | Likely recommendation |
| --- | --- |
| Errors only; logs empty or tiny | Turn on structured logging (or raise log level / sampling intentionally); link related errors ↔ logs |
| Traces sparse or rate-limited | Lower sample rate for high-volume endpoints, filter noisy transactions, or raise quota — pick based on whether volume is useful |
| Replays off while UX bugs dominate | Enable Session Replay on affected projects with privacy defaults |
| No releases / commits | Add release + commit linking so regressions are actionable |
| Seer / issue detail shows missing context | Improve instrumentation (fingerprinting, contexts, breadcrumbs) — hand implement to the implementer bot |
| Billing spike in one category | Name the category and the cheapest control (filter, sample, DSN rate limit) — do not flip production switches unless asked |

Every recommendation needs **evidence** (metric, issue id, page, or command output summarized). No generic "adopt observability" essays.

## Anti-patterns

- Do not run implementer skills (`sentry-debug-issue`, `sentry-instrument`, etc.) as if you own the fix.
- Do not paste secrets, PII, or raw request bodies from events into the brief.
- Do not bake org slugs, emails, or account names into lasting memory or skills.

## Done

Return a Research handoff brief. If a surface was blocked (CLI unauthenticated, dashboard SSO), list it under blockers — that is part of the finding.
