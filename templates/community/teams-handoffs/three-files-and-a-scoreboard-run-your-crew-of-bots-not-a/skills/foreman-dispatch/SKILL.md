---
name: foreman-dispatch
description: "Use this to send each Bot its brief, receipt path, and deadline in one direct message, mark the row handed, then end the turn."
---

# foreman-dispatch

1. For each newly seeded (or still open, not yet handed) row: send that Bot one direct message containing its brief, its receipt file path, and its deadline.
2. Mark the row state `handed`.
3. End the turn. Never chase a worker inside the same run. No standing conversation with workers.
