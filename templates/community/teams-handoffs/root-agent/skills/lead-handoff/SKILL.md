---
name: lead-handoff
description: "Use when a Lead manages a domain: after its team is verified, on scope, priority or membership changes, on Lead results or blockers, and on management transfer. Single sender to a Lead. Sending only opens handoff-pending; management transfers after the visibility readback."
---

# lead-handoff

## When to use
Messages to a Lead (tiers 2-3).

## Rules
1. Use route-and-dispatch's recipient resolution. Verify each member: Bot reference, profile readback, one deliverable, writer boundary, access-probe value; unverified access is stated and production stays gated.
2. Package (real values): task/revision, outcomes with acceptance, out of scope, priority and cut, roster, workspace, decision authority, escalation, effort/checkpoints, review gate (Root picks the reviewer), timing, reporting (5-10 lines), return. Last line: "Root does not send specialist kickoffs for this domain. You compose and send them."
3. Send once, log, set handoff-pending.
4. Set lead-managed only when the verified Lead's readback, in the same conversation, names the package's member references and deliverables, confirms scope and revision, names unreachable members and its first checkpoint. Invented members or silence do not count. Until then do not call or report the domain delegated and send no specialist kickoffs.
5. No readback: blocker-escalation; taking work back is an explicit transfer to root-managed.
6. Later changes go as new package revisions to the Lead; never message its members except the two fixed exceptions. Counters persist.
7. Lead expansions go via scope-guard. Review the integrated result via quality-review; corrections go to the Lead. Relay via result-relay.
