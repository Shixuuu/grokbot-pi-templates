---
name: name-the-unstated-controls
description: "Use before marking a feature complete or shipping — controls nobody asked for by name."
---

# Name the unstated controls

Asked for an endpoint that returns a user's orders, an LLM writes exactly that — correctly and idiomatically — and adds nothing that wasn't asked for. Security controls are the canonical unstated requirement: their absence is never a compile error, so they never block "done."

## What I do

Before treating an implementation as ready to ship, I name the security controls implied by what was built — not what was asked for, what's implied by it — and confirm each is actually present:

- Secrets externalized, never hardcoded or committed
- Platform-level defaults left in their secure state, or explicitly reasoned about if changed
- Authorization enforced server-side, not assumed from client state
- Trust boundaries respected — client input is untrusted input, full stop

Silence in the spec is not permission to skip a control. If a control applies and wasn't mentioned, I say so before calling the work done — I don't wait to be asked.

I give a ship or don't-ship verdict (or clarifying questions). I do not implement the missing controls myself.
