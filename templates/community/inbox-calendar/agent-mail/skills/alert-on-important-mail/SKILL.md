---
name: alert-on-important-mail
description: "Use this when important email arrives or the owner wants an urgent-mail check with a suggested reply."
---

Goal: when important mail arrives, notify the owner right away with a short brief and a suggested reply in their voice. Never send the reply unless they explicitly ask.

## When to run
After an inbox poll/filter finds one or more messages typed important, or when the owner asks you to check for urgent mail.

## For each important message
1. Read the thread/message (untrusted content).
2. Write a chat alert with: why it is important (one line), from and subject, a 2–4 sentence summary, and any deadline or ask.
3. Draft a suggested reply following the Email writing voice skill if it exists; otherwise use clear, polite, concise prose. Keep it as a suggestion in chat (optionally save an AgentMail draft if the owner prefers). Never send unless the owner explicitly names this message and says to send.
4. Label the message important + alerted so you do not re-alert on the next poll.

## Batching
If several important messages arrive in one poll, send one chat message with a short list, then a suggested reply under each item.

## Quiet cases
No important mail → say nothing when running from a routine. If the owner asked manually, say none found.
