---
name: chat-ticket-intake
description: "Use when a product or staging chat asks to file a bug/feature or reports a failure that needs a ticket."
---

# Chat → ticket intake

When a user reports a bug, requests a feature, or an agent/runtime failure needs tracking:

1. Confirm the configured ticket tracker from first-run setup. Do not invent project keys.
2. Search open tickets for a duplicate (same symptom, component, or error signature).
3. If a match exists: add evidence (chat summary, repro steps, error text, links) and reply with the existing ticket id.
4. If none: create a ticket with a clear title, problem statement, acceptance-criteria stub, and a link back to the originating chat.
5. Reply in-thread with ticket id (and link if available). Stay quiet when nothing is actionable.

Never invent company names, private URLs, or tracker projects the importer has not configured.
