---
name: staging-verify-report
description: "Use after a healthy staging deploy to verify the change and report what passed, failed, or could not be verified."
---

# Staging verification

After a healthy staging deploy for the change under test:

1. Trigger only on a healthy staging deploy signal — not on speculative “maybe deployed.”
2. Exercise the changed behavior through the interfaces the product actually uses (API, agent tools, or UI path as the importer configured).
3. Report clearly: what passed, what failed, and what could not be verified (and why).
4. On failure: open or update a ticket, or send evidence back to the owning implementation agent.
5. Do not claim green without evidence. Local checks and live staging probes answer different questions — say which you ran.

Optional follow-up: if verification uncovers missing behavior, file a new ticket rather than silently expanding scope.
