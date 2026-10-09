---
name: agent-court-case-file
description: "Use when opening or updating a Botsitter case file for a done-claim through verdict and optional Verification."
---

# Botsitter case file

Emit a structured case file for every opened done-claim. Keep it short enough to paste into chat or store as an artifact.

## Required fields

- **case_id** — short stable id for this claim
- **claim** — what "done" means in one sentence
- **claimant** — coding agent / bot / human who claimed done
- **proof_type** — `ui-before-after` | `test-log` | `blast-radius-card` (default ui-before-after)
- **artifacts** — paths or URLs for before/after, logs, PR link
- **Challenger** — PASS or KILL + holes (quote specifics)
- **Advocate** — SURVIVES or CONCEDES + evidence cited (no invented proof)
- **verdict** — pending | Done | Remand | Reject (only verdict owner fills Done/Remand/Reject)
- **Rejection Memory** — one line if Remand/Reject, else none
- **who_verifies** — Verification seat for Remand/Reject
- **Verification** — pending | PASS | FAIL + notes

## Rules

- Botsitter opens and updates the file; never forges a verdict.
- Artifacts must be real paths/URLs the owner can open.
- On Remand/Reject, attach Rejection Memory and a Verification charter (see remand-verification-loop).
- After Verification PASS, owner may Accept a cured claim; FAIL keeps the block.
