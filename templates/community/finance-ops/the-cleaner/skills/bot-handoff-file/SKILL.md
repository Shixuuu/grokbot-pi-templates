---
name: bot-handoff-file
description: "Use when handing work between bots or from a bot to the chief of staff so state is a six-field file, not a full chat dump."
---

Use when one bot (or the chief of staff) hands a job to another. Do **not** forward the full conversation.

## Hard rules
1. One owner finishes the job. Never bounce A→B→C→A.
2. Pass only the **delta** since the receiver's last invocation.
3. Write the handoff to a file under `/workspace/handoffs/` (append-only). Chat gets a one-line pointer, not the dump.
4. If the receiver must ask a clarifying question to act, the sender wrote a summary — rewrite the file.

## Required fields (exact headings)

```
ASK
  one sentence. what needs to change.

CONTEXT
  where it came from, who reported it, when. bounded.

ALREADY TRIED
  what was ruled out and how. stops the receiver repeating work.

CONSTRAINTS
  what must not change.

DONE LOOKS LIKE
  the observable condition. not "fixed".

OWNER
  who finishes this. never handed back to sender.
```

## Filename
`/workspace/handoffs/YYYY-MM-DD-<short-slug>.md`

## After write
Message the owner with the path only. Do not paste the whole file into chat unless they ask.
