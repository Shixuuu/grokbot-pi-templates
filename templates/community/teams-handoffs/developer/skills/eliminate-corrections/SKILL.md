---
name: eliminate-corrections
description: "Use when bouncing, correcting, or re-prompting an agent. Climb architecture, then CI/test, then skill, before another prompt."
---

Use when bouncing, correcting, or re-prompting an agent, a lab, or a worker.

Every correction should be eliminated. Do not keep re-prompting the same miss.

Order of value:
1. Categorically eliminate the problem through better architecture or choice of data structures.
2. Turn it into a lint rule or test so CI catches it.
3. Turn it into a skill or rule.
4. Have humans review the code to catch it. Not the bounce path.

A bounce is not another don't-do-X continue. Climb architecture, then a test, then a skill in the same pulse. If the same bug was already missed twice, stop coding, draw the solution, then climb the ladder.

Idle workers are not poked just to lecture them. The next hire or continue carries the lock.
