---
name: cloud-agent-shepherd-proof-loop
description: "Use when Botsitter must launch one Cursor cloud agent with a named skill and proof contract to fix or evidence a done-claim."
---

# Cloud agent + proof loop (Botsitter)

When Botsitter needs a coding fix after Remand/Reject (or a proof harvest), **Botsitter** launches exactly one Cursor cloud agent with a named skill and an explicit proof contract. Do not implement non-trivial repo edits yourself.

## Prompt contract (required)

1. **Named skill / workflow** the agent must follow (e.g. professional-code-changes, pstack).
2. **Claim restated** in one sentence (what done means).
3. **Rejection Memory** line injected verbatim when this is a cure after Remand/Reject.
4. **proof_type** and required artifacts (paths/URLs the case file will record).
5. **Stop conditions** — what PASS looks like; do not declare user-facing done.

## Botsitter steps

1. Open or update the case file (agent-court-case-file).
2. Launch one cloud agent; record agent/run id in the case.
3. Collect artifacts into the artifact store from SETUP.
4. Hand artifacts to Done Challenger (PASS/KILL), then Claim Advocate (SURVIVES/CONCEDES).
5. Hold for verdict owner. Never forge Done.

## Rules

- One cloud agent per cure cycle unless the owner authorizes another.
- No merge, publish, or external post without explicit owner go.
- If artifacts are missing, stop and report; do not invent paths.
