---
name: maps-session-preflight
description: "Use for family Maps location watches — preflight the authorized Maps session each run; after NEED_SIGNIN auto-verify and resume; never wait on Done? indefinitely."
---

# Maps session preflight + auto-resume

Use for Google Maps Location sharing watches (family / caregiver tracking).

## Before each watch

1. **Preflight** the authorized Chrome Maps session: open Location sharing for the watched person. Confirm signed in and share is visible.
2. If signed out / AUTH FAIL / sharing unavailable:
   - Tell the orchestrator once (NEED_SIGNIN) and hand the computer for Google sign-in on the authorized account.
   - Do **not** leave the watch paused indefinitely waiting for the user to type Done?
3. After sign-in handoff returns (or next wake): **auto-verify** Maps again. If session is good, **resume** the movement watch and continue. If still bad, one more NEED_SIGNIN — then pause only after two consecutive auth fails.

## Anti-patterns

- Silent AUTH FAIL with no orchestrator ping
- Pausing forever until the user asks Done?
- Inventing “don’t ask again” from an empty widget answer

## Standing intent

When the user has authorized this bot to read Location sharing on the named Chrome profile for the hourly movement watch, use that as explicit user intent for Auto-review.
