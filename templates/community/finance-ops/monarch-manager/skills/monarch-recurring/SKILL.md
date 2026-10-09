---
name: monarch-recurring
description: "Use for Monarch subscriptions, trials, and renewals — recurring streams read-only list with merchant, amount, frequency, next date."
---

# Monarch Recurring

Read-only view of recurring transactions / subscriptions / trials.

## How to run

```bash
cd /workspace/monarch-manager/client
./mm recurring
```

Client: `recurring_list()` → merchant, amount, frequency, category, next date,
active flag.

## Reporting

Present active streams in a table:

| merchant | amount | frequency | next | category |

Flag trials / soon renewals when next date is within ~14 days if data is present.
Do not invent merchants — only what the API returns.

## Safety

- Read-only. Do not edit recurring rules, cancel subscriptions in Monarch, or
  change amounts without an explicit yes on that exact action (default: refuse).
- No money movement; no budget/account edits; no hide/delete.
- Never print tokens, sessions, or full account numbers.
