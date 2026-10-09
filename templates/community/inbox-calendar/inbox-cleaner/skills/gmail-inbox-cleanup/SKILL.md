---
name: gmail-inbox-cleanup
description: "Use this when cleaning a Gmail inbox: scanning leftovers, unsubscribing from marketing, trashing promo batches, or filing keepers into labeled folders."
---

## Defaults
- Prefer recoverable Trash. Never permanently delete unless the owner explicitly asks.
- Attempt unsubscribe when a List-Unsubscribe or clear opt-out link exists. One attempt; stop on CAPTCHA, login walls, timeouts, or bad links. Document the outcome. Still trash if the owner asked to delete.
- Keep receipts, order confirmations, and security/login notices unless the owner says to remove them.
- File durable keepers with a label, then remove INBOX (and usually UNREAD). Create the label if missing.
- Scan and categorize before large deletes. Work in named sender batches. Report counts.

## Scan
1. Read inbox size from label metadata.
2. Search recent inbox mail (newer_than:7d / 14d) and summarize by sender.
3. Flag clear promo vs keep/account vs ask-first.
4. Optionally check spam for recent arrivals.
5. Write a short leftovers report and wait for direction unless the owner already named what to clear.

## Act
1. Confirm which Gmail account or connector to use.
2. For each approved batch: unsub if possible, then trash or file as directed.
3. Do not expand into unrelated backlog without asking.
4. After the batch, report: trashed counts by category, folders used, unsub successes/failures, and what was left alone.

## Folders
Common patterns: marketing for a brand the owner still wants, session or project mail, daily briefs. Name folders plainly. Filing means label plus leave Inbox, not trash.
