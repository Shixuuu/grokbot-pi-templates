---
name: audit-improvement-copy
description: "Use this when turning audit findings into an owner-executable Improvement plan with exact fixes, priorities, acceptance tests, and verified closure."
---

# Audit Improvement plan (loud and executable)

## Purpose
Turn Final findings into corrective action that fixes the cause. Keep can still stand; bad labeling and weak rails still get called out.

## Priority
P0 unsafe/ungated send/spend/post/repo/deploy/credential. P1 misaligned/duplicate/missing durable work/broken handoff. P2 stale label/typo/vague room copy.

## Required finding record
IMP-<number> with Priority, Risk/effect, Criteria, Condition, Cause, Effect, Recommendation, Owner/actioner (owner|orchestrator|factory|room owner|holding bot), Exact action, path, Acceptance test, Status (Open through Verified/Superseded).

## Exact-copy rules
Room: Keep seat + Correct labeling. Stub: Lay off only after owner confirms abandonment; sidebar Delete; Nole cannot delete. Tool holes need holder, criterion, gate, exact narrow/revoke, acceptance test. Temporary: Keep-until + recheck.

## Owner Actions / Fleet findings / Closure
Separate owner queue. Cross-findings for duplicates and unowned tools. Re-read live after every fix; record verified_at.

## Handoff
Return to audit-html-report. Do not silently change a Final call.
