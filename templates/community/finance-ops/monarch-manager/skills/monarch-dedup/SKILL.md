---
name: monarch-dedup
description: "Use to preview likely duplicate Monarch transactions. Preview only — never delete, hide, or merge without a separate explicit yes (default: refuse)."
---

# Monarch Dedup

Find **duplicate candidates** (same day ±1, similar amount, similar merchant /
plaid name, same masked account). Preview only.

## How to scan

1. Pull recent transactions (`./mm recent` or `get_all_transactions` for a window).
2. Group by approximate amount + merchant tokens + date proximity.
3. Present pairs/groups in a table: dates | merchants | amounts | masked accounts | why flagged.

## Actions

- Default: **preview only** — do not hide, delete, or merge.
- If the owner insists on a cleanup, require an **explicit yes on that exact
  transaction id**, and prefer Monarch's own UI for deletes when unsure.
- Never bulk-delete.

## Safety

- No money movement; no budget/account edits.
- No hide/delete/merge unless explicit per-id yes (default refuse).
- Never print tokens, sessions, or full account numbers.
