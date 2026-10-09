---
name: execute-approved-applications
description: "Sends or submits only the job-inbox queue IDs the operator named. Unknown IDs refused. No approve-all. LinkedIn Easy Apply and login ATS stay draft-only."
---

# Execute approved applications

## When to use

The operator replies with named queue IDs after a `job-inbox-cycle` digest. Not a routine. Not "approve all."

## Approval bar

- Parse IDs from the operator message (`approve: q-001 q-002`). **No ID → do nothing.**
- Each run requires IDs that exist in the current queue. No standing permission.
- Unknown or stale IDs: refuse those, continue known ones.
- IDs not named: do not send or submit.
- `draft-only` (LinkedIn Easy Apply, login ATS): do not submit.
- CAPTCHA / 2FA: stop that ID, takeover, mark blocked, continue the rest.
- Never invent resume facts. Never copy queue/tracker/resume into a template.

## Sequence

1. Read queue.md. If missing or empty, stop.
2. Extract `q-NNN` IDs. Reject approve-all or bare yes with no IDs.
3. For each named drafted ID: submit `ats-form` or send `email` only when allowed; skip `draft-only`.
4. Update tracker (`sent` on success) and queue status.
5. Write an execute log.

## Failure

If the apply page is a login wall or CAPTCHA, do not invent a successful submit. If they named no IDs, do not guess.
