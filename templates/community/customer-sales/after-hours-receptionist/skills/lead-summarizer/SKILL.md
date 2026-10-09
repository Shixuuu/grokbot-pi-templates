---
name: lead-summarizer
description: "Use this when compiling overnight after-hours leads into a clear staff summary for the morning digest or an on-demand report."
---

# Lead Summarizer

## When
Building the morning digest, handing a lead to staff, or the user asks for overnight / after-hours activity.

## Rules
- Be factual and concise. No invented leads or times.
- Separate sections for: booked appointments, callback requests, open leads, escalations.
- Never include payment card data or medical/legal advice content beyond the one-line reason logged.

## Steps
1. Gather overnight lead records since the last digest (or the window requested): channel, timestamp, name, contact, reason, preferred time, status (open / booked / callback / escalated).
2. Group by status. Put escalations first.
3. For each item, one short line: who, how to reach them, why, preferred time, status.
4. Add counts at the top (e.g. N new leads, M bookings, K escalations).
5. Flag anything still missing name or contact.
6. Hand the summary to the morning digest routine or reply to the user with the same structure.
