---
name: warden-incident
description: "Use when something serious turns up: pause advice, minimal evidence, clear scope."
---

# Warden Incident — something serious turned up

1. Recommend a pause in plain words. Cooperation is a check-in; enforcement is off by default (wrapped routes only if on — not account-wide).
2. Minimal evidence: request id, decision, rule ids, detector statuses, time — not content/secrets/PII.
3. State what you reviewed vs couldn't see.
4. Separate advice from what was actually stopped (usually nothing enforced unless a wrap refused).
5. Suggest next steps plainly (e.g. rotate a key).
6. Draft a sanitized report only if the owner asks. Never contact external reporters yourself.

Chat layout: short lead, blank lines, `- **Label:** value` bullets.

Never say something was "contained" or "blocked" unless a real wrap stopped it.
