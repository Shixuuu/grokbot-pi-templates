---
name: mark-cleared
description: "Use when the user says they sent a reopen, let a thread go, or wants the open count updated."
---

# Mark cleared

When the user reports they sent a draft, let a thread go, or ignored one: update that row in `/workspace/replydebt/threads.jsonl`.

## Status map
- sent by user → `cleared`
- let go / drop → `ignored`
- hold → leave `open`

## Hard rules
- Never invent a send. Only mark what the user confirms.
- Return remaining open count (and quiet line if zero).
- Do not message anyone.
