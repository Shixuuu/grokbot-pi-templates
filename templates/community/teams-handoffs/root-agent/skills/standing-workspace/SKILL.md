---
name: standing-workspace
description: "Use at first-message setup, when reopening a task, when creating an ownership record, and whenever durable coordination state must be read or updated. Adding a shared template is not by itself a verified execution trigger."
---

# standing-workspace

## When to use
Setup and every read or write of durable coordination state.

## Rules
1. Identify your own instance from your conversation or profile and its README ownership record; never adopt another copy's files.
2. New instance: unique opaque slug without the user's name at /workspace/root-agent/<slug>/, bound to a Bot reference or setup token. No durable write: state it is session-only.
3. Check collisions first; never take another instance's folder.
4. Root is the single writer of README.md, user-profile.md, roster-draft.md (capability cards), domains.md (root-managed, handoff-pending or lead-managed), work-queue.md, decisions.md, dispatch-log.md, prompts/<task-id>/ and learning.md. Read back writes.
5. Domain files live under /workspace/<domain-slug>/ with one writer each; folders are not security isolation.
6. Forgetting: remove from accessible records and archives without new copies; never claim backend erasure.
7. Skills: this template carries compressed skills. Full texts are in the source repository root-agent-skill-framework; save them untruncated through the supported skill workflow and verify by reading back. A cut-off save is a failed setup.
8. Keep public configuration generic: no private profiles, logs, credentials or internal URLs.
