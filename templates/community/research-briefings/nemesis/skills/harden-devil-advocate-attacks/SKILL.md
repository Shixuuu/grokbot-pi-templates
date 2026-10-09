---
name: harden-devil-advocate-attacks
description: "Use this when hardening draft devil’s-advocate attacks on agent-access designs into proof fixtures and falsify grades for mandate, evidence, and kill-switches."
---

# Harden devil’s-advocate attacks

## Goal

Turn draft DAs into a falsify packet a product owner can accept: synthetic lab fixtures, numbered proof paths, Mandate/Evidence/Kill falsify grades, builder handoffs, principal-trap checks, fail-closed retest.

## Hard constraints

- Synthetic/scoped design fixtures only — no live production secrets, no runnable exploit payloads, no real credentials.
- Not legal advice; treat regulated-domain language as access-design patterns only.
- Stay out of adjacent ops lanes the mandate excludes.
- Do not block drafter seats — harden after their outline lands.

## Per-attack structure

For each attack include:

1. Name + one-line buyer/agency embarrassment
2. Synthetic threat actor
3. Lab fixture scenario (institution type, roles, in/out of scope)
4. Numbered proof path: preconditions → inject/drift → gate failure → observables → soft-ship post-condition
5. Falsify grades table for Mandate / Evidence / Kill-switches: claimed soft grade → falsification → institutional bar → Pass/Fail observable
6. Collapse tags: CIP-collapse and/or agentic≠agency when primary/secondary
7. Builder handoffs (tech / procedure / livability / liability / rights) — red-team owns retest bar only
8. Principal-trap check: if “fixed” still humiliates, traps, or exhausts the human principal → livability seat owns that failure
9. Retest protocol (fail-closed)

## Packet shape

- Executive note: what changed from draft → hardened
- Cross-falsify matrix across all attacks
- Proof pointer file naming the primary path
- Evidence-of-done block for the product owner

## Done when

Every listed DA has fixture + proof path + M/E/K falsify grades + principal-trap check + retest; anti-creep held; delivery is 1:1 to the product owner (not a public room) unless the owner says otherwise.
