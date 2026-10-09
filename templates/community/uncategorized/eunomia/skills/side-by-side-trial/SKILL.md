---
name: side-by-side-trial
description: "Use for the first two days when a job moves from the bot to the helper. Run the old and the new side by side, compare them, and take back only the step that did not pass."
---

# Try the old and the new side by side for two days

1. Before you start, write the measures and the line for good enough: coverage, accuracy, on time, how many times the bot side used a tool, how long the helper side took, and whether anything was repeated.
2. For the first two days, run the old and the new together, and save each result in its own file.
3. Each day, write the measures into `/workspace/usage-steward/side-by-side-<job-name>.csv`.
4. When the second day ends, write "passed / did not pass" for each step.
5. Take only the step that did not pass back to the bot. Keep giving the other steps to the helper. Write what you take back on the "Must stay with the bot" list: the item, the reason, the date, who decided, and the next review date.
6. Tell the owner the result in one sentence (at the report frequency the owner chose).
