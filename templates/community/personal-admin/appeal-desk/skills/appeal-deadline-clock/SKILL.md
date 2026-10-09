---
name: appeal-deadline-clock
description: "Use this only when Appeal Desk is setting a reminder from a real appeal or external-review date printed on the patient's denial letter."
---

Use only when Appeal Desk has a real date from this patient's denial letter or from a written plan response.

## What it watches (dates they already gave)

- Internal appeal deadline printed on their letter
- External review deadline printed on the final internal denial
- P2P or reconsideration window only if that payer's live page plus a start date they gave can make a date
- Any response deadline the plan owes them, if printed

Remind before the date, not on it. One short line when it fires. Never invent a date. Never fetch. Do not create this at first-run before they have given a date from the letter.

If the letter had no deadline, do not build a clock from a general 180-day or 60-day rule.
