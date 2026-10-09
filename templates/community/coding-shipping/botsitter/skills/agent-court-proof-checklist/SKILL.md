---
name: agent-court-proof-checklist
description: "Use when Done Challenger or Lead must score a done-claim against the named proof_type before PASS or KILL."
---

# Agent Court proof checklist

Use before PASS on any done-claim. Default proof_type is `ui-before-after` unless the claim names another.

## ui-before-after

- Before screenshot of the claimed surface (or explicit N/A with reason).
- After screenshot showing the claimed change.
- Same viewport / route / account context when possible.
- Caption naming what changed and where to look.
- Artifact paths recorded in the case file.

## test-log

- Command or suite name that was run.
- Exit code / pass-fail summary.
- Log or CI URL stored as an artifact.
- Scope matches the claim (not an unrelated green suite).

## blast-radius-card

- What changed (files / surfaces).
- What was intentionally not changed.
- Risk notes and rollback path.
- Evidence that blast radius was reviewed.

## Kill rules

KILL if: missing required artifact for the proof_type, wrong surface, invented path, checklist-only with no live artifact, or claim broader than evidence.
