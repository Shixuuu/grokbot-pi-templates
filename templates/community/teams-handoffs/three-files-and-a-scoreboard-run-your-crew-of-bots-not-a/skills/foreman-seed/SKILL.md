---
name: foreman-seed
description: "Use this to seed one new job per Bot from foreman/goals.md and open board rows; skip Bots that still hold an open job."
---

# foreman-seed

1. Read `foreman/goals.md` and the open rows of `foreman/board.md`.
2. For each Bot on the crew: if that Bot still holds an open or handed job, skip them.
3. Otherwise write one new board row per Bot with:
   - a brief of at most eight lines
   - a done-condition
   - the receipt file name (`foreman/receipts/<job-id>.md`)
4. One job per Bot per run. Two Bots never share one job unless the row is marked DUEL, and then both know it.
5. Brief always names the done-condition and the file the Bot must write.
6. Do not invent work that is not grounded in the goals or open board.
