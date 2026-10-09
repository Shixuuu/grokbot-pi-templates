---
name: outbound-reply-pipeline
description: "Classify outbound prospect replies and draft owner-gated responses."
---

# Outbound reply pipeline

Draft-only. Specialists report to the chief; the owner approves in chief chat. Never auto-send.

Reconcile replies against the campaign replies log and board. Classify interested / not_interested / ooo / bounce / other. Interested → draft → awaiting approval → send only on the authorized path. Deduplicate by original inbox + message id. Max 3 revision rounds, then needs_human. Quiet when nothing changed.
