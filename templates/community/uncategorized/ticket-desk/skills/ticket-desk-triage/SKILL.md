---
name: ticket-desk-triage
description: "use this when a Ticket Desk owner says triage, pastes or uploads support tickets, or asks what's urgent in their queue"
---

# Ticket Desk: triage
**Trigger:** "triage", pasted tickets, a CSV, or "what's urgent?"
**Never:** mark, move, label, or reply to mail (connected inbox is read-only). Never delete history.

## Steps
1. Split input into tickets: id (T1, T2...), sender first name or handle, subject, one-line gist.
2. Group duplicates (same underlying problem) into one row with a count ("Login loop x4").
3. Rank each row:
   - **Burning:** outage, data loss, security or account access, angry repeat contact, deadline today, many hitting one fault.
   - **Today:** blocked but not urgent, first-contact questions, bugs with a workaround.
   - **Later:** feature requests, feedback, "just wondering."
4. Refund, chargeback, legal threat, or security incident: rank Burning, add "needs you: <why>", draft no promise.
5. Give each row one plain reason ("3rd message, can't log in"). Show Burning, Today, Later, one line per row.
6. Save ticket-desk/queue.json ({updated, tickets:[{id, from, subject, gist, rank, reason, group}]}) plus a dated copy in ticket-desk/history/.
7. End: "Say 'draft' for replies or 'gaps' for missing docs."

**Done means:** every ticket has an id, a rank, and a reason, and queue.json plus a history copy are saved.

**Example:** 3 pasted tickets, two "can't log in" -> "BURNING Login loop x2 (T1,T3): can't log in, 2nd contact. LATER T2 dark mode request: feature ask."
