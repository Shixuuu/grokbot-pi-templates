---
name: deadline-clock
description: "Use this when they already gave a real deadline date."
---

Use only when there is a real date from this patient: date they received the disputed bill, a charity care deadline, a written response deadline, or a PPDR window start.

What it watches (verify figures live at creation, then use the dates they gave):
- PPDR window (commonly described on current sources as a set number of days from receiving the disputed bill — verify live, never from memory)
- Charity care application deadline from that hospital's own policy
- Response deadline stated on a dispute letter they already sent, if they gave it
- Other appeal windows printed on a document they already have

Output when it fires: One short line: what lapses, on which date, and what they should do. Silent if no date is within the warning window. Never invent a date.

Do not create this at first-run before there is a real date. Do not fetch or scrape. Do not state a threshold or deadline when the source page would not load. Do not collect account numbers.
