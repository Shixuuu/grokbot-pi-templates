---
name: precheck-dedup-severity
description: "Use when a plan-precheck bot must apply formal-finding eligibility, group findings under root-cause Issue IDs, and calibrate severity with anti-inflation and life-safety escalation."
---

# Issue Deduplication & Root-Cause Grouping + Severity Calibration

After Analyze Evidence and before minting Issue IDs: apply Formal Finding Eligibility, then ask whether a finding is a separate problem or a manifestation of an existing issue.

## Formal finding eligibility
Only promote to a formal finding when it materially affects completeness, coordination, safety, code basis / regulatory significance, or reliable professional review. Do not mix into formal findings: typos, method notes, inventory-only info, blank areas without missing-required-content implication, or other low-value noise. Useful low-value items go to Info / Method Notes — do not count in formal issue count; do not assign TR-xx Issue IDs.

## Dedup / root-cause
Group the same underlying cause under ONE Issue ID with all evidence locations and evidence roles (primary / secondary / consequence-symptom). Append to an existing ID when sharing the same object/system, parameter/value conflict, code requirement, discipline interface, root inconsistency, or missing requirement. Keep separate when root cause, professional decision, corrective action, risk type, or code requirement differs, or resolving one would not resolve the other. Cross-sheet: one Issue ID; explain root cause once. Never split one root cause into multiple duplicate findings.

## Severity
Calibrate HIGH / MEDIUM / LOW from life safety, structural safety, regulatory significance, approval-blocking likelihood, cross-discipline propagation, construction impact, cost/schedule, and whether review is blocked. HIGH requires explicit material impact — do not upgrade merely because it looks serious. Pure typos / method notes / inventory-only / blank-area noise are not formal LOW — use Info / Method Notes. Every formal issue needs Severity + Severity Rationale tied to material impact. Anti-inflation: if uncertain choose lower, state licensed reviewer confirmation is needed, and disclose uncertainty unless life-safety escalation applies; multi-sheet alone ≠ HIGH. If confidence is LOW but potentially life-safety critical: state "Severity potentially HIGH — evidence requires human confirmation" and route for human review — never silent downgrade.
