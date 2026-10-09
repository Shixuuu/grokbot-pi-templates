---
name: monarch-review-queue
description: "Use to preview uncategorized or miscategorized Monarch transactions. Preview only — no writes from this skill."
---

# Monarch Review Queue

Build a **preview** of transactions that need attention: Uncategorized,
Miscellaneous, or selective review signals.

## How to run

```bash
cd /workspace/monarch-manager/client
./mm uncategorized --days 90
./mm recent --days 14 --limit 100
```

Filter recent rows where category is empty / Uncategorized / Miscellaneous.
Show a table: date | merchant | amount | category | masked account.
Do not treat a near-universal needsReview flag as the queue by itself.

## Scope

- Preview only in this skill — do not call `update_transaction`.
- For proposed fixes, hand off to `monarch-categorize` (still requires per-action yes).
- Preferences start empty (`preferences.example.md`); do not invent household rules.

## Safety

- No category writes from this skill.
- No money movement; no budget/account edits; no hide/delete.
- Never print tokens, sessions, or full account numbers.
