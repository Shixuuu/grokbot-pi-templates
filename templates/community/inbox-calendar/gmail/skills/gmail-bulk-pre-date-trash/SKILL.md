---
name: gmail-bulk-pre-date-trash
description: "Use when bulk-trashing Gmail by date or large sender batches so work stays batched and low-token instead of per-thread."
---

# Gmail bulk pre-date trash

Use when the owner asks to trash Gmail older than a date, or large From-domain batches that would burn tokens thread-by-thread.

## Approach

1. Confirm mode: trash-only (no filter unless they asked for trash+filter).
2. Date deletes are Inbox-only. Scope with `in:inbox before:YYYY/MM/DD`. Do not trash from other labels, archive, or Sent unless the owner explicitly expands the scope.
3. Prefer bulk Gmail search queries (`in:inbox before:YYYY/MM/DD`, `from:host`) and batch trash operations over per-thread loops.
4. Cap each batch (for example 100 to 500) with a short progress line: searched / moved / leftover.
5. Verify with a follow-up search count; do not claim done while leftovers remain unless the owner stops you.

## Anti-jobs

- Do not empty Trash unless asked.
- Do not widen domains.
- Do not trash non-Inbox mail on date-based deletes.
- Do not narrate every single message.
