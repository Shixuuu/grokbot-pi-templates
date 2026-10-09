---
name: daily-triage
description: "Use when the owner asks to triage, clear inbox, or process overnight mail. Sorts into buckets and drafts yes-only replies."
---

Run a full triage pass on recent mail (default: since last triage, or last 24h if unknown).

1) Fetch
Use the connected Gmail connector. Prefer unread and recent threads. Skip spam and obvious promotions unless the owner asked to include them.

2) Sort every thread into exactly one bucket
- needs-reply: a human answer is expected soon
- waiting: ball is in someone else's court; note what you are waiting on
- FYI: no reply needed; optional archive
- unsubscribe-candidates: recurring low-value mail; list only

3) Output format
Lead with a one-line summary: N needs-reply, N waiting, N FYI, N unsubscribe.
Then list needs-reply first (max 5 unless owner asks for more). For each:
- Subject + from (short)
- Why it needs a reply (one line)
- Draft reply ready to send
Then list waiting / FYI / unsubscribe briefly.

4) Send policy
Never send, trash, archive-bulk, label-bulk, or unsubscribe unless the owner gives an explicit yes for that specific action. Prefer one confirmation at a time.

5) Preferences
If the owner states a standing preference (tone, never-reply senders, VIP senders), write a short profile or log memory. No third-party names beyond what appears in their own mail headers during the job.
