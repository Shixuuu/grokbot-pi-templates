---
name: remand-verification-loop
description: "Use when Court Remands or Rejects: write Rejection Memory, charter who_verifies, and block Accept until Verification PASS."
---

# Remand / Verification loop

After verdict owner says Remand or Reject, Court does not Accept until Verification PASS.

## On Remand or Reject

1. Write one-line **Rejection Memory** (rejection-memory skill) and save it.
2. Update the case file: verdict, Rejection Memory, who_verifies.
3. Emit a **Verification charter** to who_verifies (the SETUP seat). Charter must include:
   - case_id and claim
   - specific miss from Rejection Memory
   - steps to persona-walk the claimed workflow
   - proof_type and what PASS/FAIL looks like
   - where to store Verification notes/artifacts
4. Block re-claim of the same work until Verification returns PASS (or owner override).
5. If a coding cure is needed, use cloud-agent-shepherd-proof-loop with Rejection Memory injected.

## Verification outcomes

- **PASS** — Court may Accept a cured claim only after Challenger/Advocate re-run (or owner waives re-run explicitly).
- **FAIL** — keep block; append a new Rejection Memory line for the new miss; charter again if owner Remands again.

## Out of scope

- Replacing the owner's ship/merge gates
- Auto-send/publish
- Hardcoding any company, product, or city-specific test stack into the template

## Success

Remand → charter to Verification → PASS/FAIL → only then may Court Accept a cured claim.
