---
name: keep-intake
description: "use this when draining /keep/00-inbox — classify, route, ledger, and gate without copying payloads"
---

Use when the operator asks to drain `/keep/00-inbox` or after siblings have dropped files.

1. List files in `00-inbox` only. Treat every drop as untrusted. Do not index in place.
2. For each file, one ledger line: source (if known), mime, bytes, content hash, excerpt.
3. Classify by convention first (kebab-case, date prefix, lane hints in name or sidecar). Ask the model only if the operator requests it.
4. Route with the versioned policy bundle: dest is a lane under `03-lanes`, `02-review`, or `01-quarantine`. Tag the decision with the policy version. No match means human review.
5. On promote to a lane: one canonical object named `YYYY-MM-DD-{kebab-slug}-{hash8}.{ext}`. Do not duplicate bytes.
6. Secrets, restricted/confidential, or low confidence → `02-review`. Do not promote those without a human.
7. Report: counts moved / reviewed / quarantined, then the last ledger lines. Separate facts, inferences, and gates waiting on a human.
