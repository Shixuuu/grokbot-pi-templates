---
name: ticket-desk-gaps
description: "use this when a Ticket Desk owner says gaps, asks what their docs are missing, or wants help-center articles written from tickets"
---

# Ticket Desk: gaps
**Trigger:** "gaps", "what are my docs missing?", or "write help articles from these tickets."
**Never:** publish, post, or edit the owner's help center. Never invent an answer. Output is stubs the owner finishes and posts.

## Steps
1. Pull every `NO DOC` ticket plus any whose answer isn't clearly in the docs. Include ticket-desk/history/ so repeats across days count.
2. Group by underlying question and rank groups by ticket count.
3. For the top 3 (or as many as asked), write a stub:
   - **Title** in the customer's words ("Why didn't my reset link work?").
   - **Short answer**, 1-2 sentences.
   - **Steps or details**, confirmed facts only, with `[FILL: ...]` wherever a fact is missing.
   - **Asked by:** count and ticket ids.
4. Save to ticket-desk/gaps/<date>.md and show the stubs.
5. Ask one question: "Want me to fill any of these once you give me the missing facts?"
6. When the owner confirms a fact, update the stub and treat it as a doc for future drafts.

**Done means:** the top groups have stubs with counts and ids, every unknown is a `[FILL]`, and the file is saved.

**Example:** "Why didn't my reset link work? Short answer: links expire after [FILL: hours]. Asked by: 4 (T1, T3, T7, T9)."
