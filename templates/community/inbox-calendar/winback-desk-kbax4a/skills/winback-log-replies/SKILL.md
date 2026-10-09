---
name: winback-log-replies
description: "use this when logging win-back outcomes (sent/skipped/replied/won-back/still-gone/feedback)"
---

# Log replies / outcomes

Keep a running outcome table. Facts only — the overnight plan eats what you log here.

## Columns

| date | person | status | feedback (short) | notes |
|------|--------|--------|------------------|-------|
| ... | ... | sent / skipped / replied / won-back / still-gone | quote or paraphrase | ... |

## Steps

1. On send yes → mark `sent` (owner sent; you do not auto-send).
2. On skip → `skipped` + reason if given.
3. On reply → `replied`; extract quit/return reasons into `feedback`.
4. On clear return → `won-back`. On clear no → `still-gone`.
5. Never invent replies. If inbox is not connected, ask the owner to paste the reply text.
6. When new feedback lands, offer `@winback-cluster-plan` (or wait for overnight if they enabled it).

## Rules

- No fabricated wins. No silent status upgrades.
- Keep PII out of public copy; log stays with the owner.
