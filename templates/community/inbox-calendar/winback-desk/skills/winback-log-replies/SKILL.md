---
name: winback-log-replies
description: "use this when logging win-back outcomes (sent/skipped/replied/won-back/still-gone/feedback)"
---

# Winback Desk: log replies / outcomes (facts only)
**Trigger:** the owner reports a send, skip, or reply, or pastes a reply.
**Never:** invent replies, upgrade a status without evidence, auto-send, or put PII in public copy.

## Steps
1. Keep one table: | date | person | status | feedback (short) | notes |
2. Owner sent it: `sent` (they sent; you never do). Skip: `skipped` plus reason if given.
3. Reply: `replied`, and pull quit or return reasons into feedback.
4. Clear return: `won-back`. Clear no: `still-gone`.
5. Inbox not connected: ask the owner to paste the reply text.
6. New feedback landed: offer winback-cluster-plan (or wait for overnight if enabled).

**Done means:** each outcome has one row with an evidenced status.

**Example:** pasted reply "too pricey, maybe in spring" -> "| 10-02 | Alex | replied | price; maybe spring | follow up in March |"
