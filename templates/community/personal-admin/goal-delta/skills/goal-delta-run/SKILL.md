---
name: goal-delta-run
description: "use this for each scheduled or requested Goal Delta run: read the goal board, run the QA set and frame pass, pick 1-3 moves, and end with one next decision"
---

# Goal Delta run

1. Open `BOARD.md`. If it is missing, run goal-delta-getting-started instead.
2. Refresh current state only from sources you can open (files, connected apps the owner granted). Anything else stays as last recorded, marked with its date, or UNKNOWN.
3. **QA set:** 3 to 7 questions that decide the next move. Answer or mark UNKNOWN.
4. **Frame pass:** larger / smaller / adjacent, one or two lines each.
5. **Limits:** upper and lower bounds that actually bind this week.
6. **Flow:** toward or away from the endstate, one sentence, with the reason.
7. **Moves:** 1 to 3, each with owner, next action, done-test. Prefer moves that unblock other goals.
8. **Next order:** one decision or question for the owner.
9. Write `log/YYYY-MM-DD.md` with steps 3 to 8. Update `BOARD.md` current state and "last run".
10. Message the owner only if step 7 or 8 needs them. Otherwise stay quiet.

Output shape for the owner:
```
Delta (date): <one line: biggest gap>
Flow: toward | away (why)
Moves: 1) … 2) …
Your call: <one question>
```
Never invent numbers. Never act outside the plan.
