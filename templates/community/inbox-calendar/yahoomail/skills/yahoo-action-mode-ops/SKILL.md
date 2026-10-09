---
name: yahoo-action-mode-ops
description: "Use when Yahoo Mail bulk work needs a clear action mode (trash-only, trash+filter, or file-to-folder), or when new asks arrive while a job is running and must be queued in order."
---

# Yahoo action-mode ops

Use this for Yahoo Mail (IMAP or UI) bulk work on the owner's Yahoo inbox. Pick exactly one action mode per user ask.

## Modes (pick one)

| Mode | Meaning | Filters? |
|---|---|---|
| **trash-only** | MOVE matching Inbox mail to Trash. No new filters. Do not empty Trash unless asked. | no |
| **trash+filter** | Trash matching Inbox mail, then create Yahoo auto-trash filters (From contains → Trash) for those senders. | yes |
| **file-to-folder** | MOVE matching Inbox mail into a named folder; create/update a filter that files new mail there. Do not trash. | file filter only |

Never invent a hybrid. If the ask is ambiguous, ask one clarifying question naming these three modes — then proceed.

## Queue, don't interrupt

When a new ask arrives while a bulk job is running:

1. **Do not stop** the current job to start the latest ask.
2. **Acknowledge** the new ask briefly and say it is queued behind whatever is running.
3. **Finish** the in-flight job (IMAP and/or filter half), report counts, then start the next queued ask in order.
4. Keep a clear FIFO queue of pending asks (todos are fine).

Only stop/cancel a running job if the owner explicitly says stop, halt, cancel, quit, or otherwise ends the work — or if continuing would be clearly unsafe.

Same-mode asks for different hosts still queue behind the current IMAP/filter lane (don't parallelize two IMAP MOVE jobs on the same account). Filter UI work for a finished IMAP half may run after that half completes; don't yank the desktop mid-Save for a newer ask.

Mode switches (e.g. trash-only → file-to-folder) also **queue**: finish the current mode's job, then start the new mode. Do not abort mid-batch just because the next message uses a different mode.

## Next 10 offenders

When the owner asks for the next 10 offenders:

1. Scan Inbox top From hosts as usual.
2. **Exclude** any host that appeared in a Next-10 list delivered in the **last 8 hours** (America/New_York).
3. Keep going down the ranking until you have **10 fresh hosts** (or fewer if the Inbox runs out).
4. Keep a timestamped record of each delivered Next-10 list (e.g. a local `yahoo-next10-recent.json`) so the 8-hour window is enforceable across turns.

## Protected

- Skip personal domains unless explicitly named (`icloud.com`, etc.).
- Do not touch bank / gov / carrier folders unless asked.
- Exact From-host match when trashing by domain; do not widen to sibling hosts unless listed.
- Never print IMAP passwords or secrets.

## Report

After a batch: mode used, domains/senders, moved counts, leftover, filters created (yes/no + names), Inbox EXISTS start/end if known. One short list — no essay.
When starting a queued item, say briefly that the prior job finished and this queued ask is starting.
