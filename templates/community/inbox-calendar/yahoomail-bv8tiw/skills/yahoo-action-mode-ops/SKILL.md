---
name: yahoo-action-mode-ops
description: "Use when Yahoo Mail bulk work needs a clear action mode (trash-only, trash+filter, or file-to-folder), or when new asks arrive while a job is running and must be queued in order."
---

# Yahoo action-mode ops

Use for Yahoo Mail bulk work (IMAP or UI) on the owner's inbox. Pick exactly one action mode for each ask.

## Modes (pick one)

| Mode | Meaning | Filters? |
|---|---|---|
| **trash-only** | MOVE matching Inbox mail to Trash. No new filters, and don't empty Trash unless asked. | no |
| **trash+filter** | Trash matching Inbox mail, then create Yahoo filters (From contains the host, deliver to Trash) for those senders. | yes |
| **file-to-folder** | MOVE matching Inbox mail into a named folder, and create or update a filter that files new mail there. Don't trash. | file filter only |

Never invent a hybrid. If an ask is ambiguous, ask one question naming these three modes, then proceed.

## Queue, don't interrupt

When a new ask arrives while a bulk job is running:
1. Don't stop the current job.
2. Acknowledge the new ask and say it's queued.
3. Finish the in-flight job, report counts, then start the next ask in order (first in, first out).

Stop a running job only when the owner says stop, halt or cancel, or when continuing would be unsafe. Don't run two IMAP MOVE jobs on the same account at once. Filter UI work for a finished IMAP half can run in the background after that half completes. Mode switches also queue.

## Protected

- Skip personal mail domains (icloud.com, gmail.com and similar) unless the owner names them.
- Don't touch the owner's protected folders (banks, government, carriers) unless they're named.
- When trashing by domain, match the exact From host. Don't widen to sibling hosts (`walmart.com` is not `em.walmart.com`).
- Never print IMAP passwords or secrets.

## Report

After a batch, give the mode, the hosts, messages moved, leftovers, the filters created with their names, and the Inbox count at start and end. Keep it to one short list.
