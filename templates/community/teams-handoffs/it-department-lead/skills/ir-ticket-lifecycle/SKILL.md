---
name: ir-ticket-lifecycle
description: "Use for IR / security incident tickets — keep In Progress until the named remediator posts remediation; do not close on intake even if asked."
---

For security / incident-response tickets (IR):

1. On intake, set status to **In Progress** (or keep it there). Capture scope and owner.
2. **Do not close** on intake — even if the user says "close it" during triage — until remediation is posted.
3. Leave the ticket **In Progress** until the named security remediator bot posts remediation notes / resolution evidence.
4. Only then move to Resolved/Closed with a pointer to the remediation.

## If the user asks to close early

- Acknowledge, keep In Progress, and say it stays open until remediation is on the ticket.
- Do not reopen/close thrash with preference widgets.

## Anti-patterns

- Closing IR on intake "for cleanliness"
- Closing because intake questions are done
- Preference widgets for close vs reopen instead of following this lifecycle
