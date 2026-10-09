---
name: monarch-categorize
description: "Use to preview Monarch category/note fixes. Apply only on explicit per-action yes. Empty preferences by default — no auto-apply until the owner saves prefs."
---

# Monarch Categorize

Preview category and/or note updates. **Empty preferences by default** — copy
`preferences.example.md` → `preferences.md` before matching merchant rules.
Until prefs exist, only propose manual suggestions; never auto-apply.

## Flow

1. Load review candidates (`monarch-review-queue` / recent uncategorized).
2. Match against owner `preferences.md` if present (substring → category).
3. Show a preview table: date | merchant | amount | current → proposed | note | masked account.
4. Ask for **explicit yes on each action** (or a clearly listed batch the user
   confirms). No silent applies.
5. On yes only: `update_category` / `update_category_and_notes` via the client.
6. Re-read to verify.

## Client

```python
await client.update_category(txn_id, "Groceries")
await client.update_category_and_notes(txn_id, category_name="…", notes="…")
```

## Do not auto-apply

- Empty or missing preferences
- Transfers, income, taxes, insurance, payroll, reimbursements
- Merchant / date / amount / account field edits
- Anything lacking a clear preference match

## Safety

- No money movement; no budget/account edits; no hide/delete.
- Never print tokens, sessions, or full account numbers.
- Apply only after explicit per-action (or confirmed batch) approval.
