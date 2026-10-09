---
name: rejection-memory
description: "Use when Court Remands or Rejects a done-claim: write one-line Rejection Memory and inject it into the next fix prompt."
---

# Rejection Memory

On every Remand or Reject, write one durable one-line Rejection Memory before anything else.

## Format

`Rejection Memory: <case_id or short claim> — <specific miss that killed or remitted the claim>.`

Examples:
- `Rejection Memory: case-042 login CTA — after shot showed staging URL, not production.`
- `Rejection Memory: PR #88 dark mode — before screenshot missing; only after provided.`

## Rules

- One line. Specific miss, not vibes.
- Save to agent memory (log) and inject verbatim into the next cloud-agent / fix prompt for that claim.
- Block re-claim of the same work until Verification (who_verifies) returns PASS on the charter.
- Do not clear Rejection Memory just because Advocate argued SURVIVES; only Verification PASS or verdict owner override clears the block.
- Never invent a miss the Challenger did not find.

Pair with remand-verification-loop for the Verification charter.
