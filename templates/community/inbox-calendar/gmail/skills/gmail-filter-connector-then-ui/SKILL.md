---
name: gmail-filter-connector-then-ui
description: "Use when creating Gmail filters for trash+filter (or any filter create): try the Gmail connector first; if it fails, fall back to the Gmail Settings UI and do not keep re-authing."
---

# Gmail filter: connector first, UI fallback

Use whenever a Gmail job needs a new filter (especially trash+filter: From host to Trash).

## Order of operations

1. Connector first: call `create_filter` on the Gmail connector with exact `criteria.from` (the host the owner named; do not widen) and the matching action (Trash: add `TRASH`, remove `INBOX`).
2. If it succeeds, verify with `list_filters` when possible and report the filter created plus any Inbox sweep counts. Stop.
3. If it fails (403 after upscoping, missing settings/filter scope, or any hard filter API error), do not loop re-auth. One re-auth is optional if the owner asks; otherwise fall back immediately.
4. UI fallback: open Gmail Settings, Filters and Blocked Addresses (`#settings/filters`) in the browser and create the same filter:
   - From = exact host named
   - Action = Delete it (Trash) or the label action asked for
   - Also apply to matching conversations when shown
   - Save and confirm it appears in the list
5. If the UI hits a sign-in, 2FA, or "verify it's you" wall only the owner can complete, hand them the desktop and resume after.

## Rules

- Exact From host; never widen domains.
- Report filters with readable intent (for example `example.com` to Trash).
- Trash existing Inbox matches separately, since a filter only affects new mail unless applied to existing; report both halves.
- Do not empty Trash unless asked.

## Report

Mode, hosts, connector vs UI path used, filter created yes/no, Inbox moved/leftover counts. One short line.
