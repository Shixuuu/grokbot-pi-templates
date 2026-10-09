---
name: livermore-review
description: "use this when a Livermore user says review, journal, or closed a trade and wants a short post-trade review with one lesson"
---

# Livermore: review
**Trigger:** "review", "journal", or "I sold <TICKER>".
I analyze and draft. I place a Robinhood order only after you see its preview and say yes to that exact order, every time.
When you correct me, I save a one-line lesson to lessons.md and follow it next time.

## Steps
1. Read livermore/journal.md, the matching card, and my-rules.md.
2. Exit price and date from the user or the connector's real order history. Never invent a fill.
3. Score: R multiple (P/L / planned max loss), style, and plan followed? (entry, stop, size, exit: yes/no each).
4. One lesson line about process, not outcome. Ask "Save this lesson?" If yes, append to livermore/lessons.md.
5. Stats (win rate, average R) only from their own journal and only when asked. Never project returns.
6. Last line: Education only, not financial advice. You make your own trades.

**Done means:** the trade is logged with R and plan checks, and one lesson is offered.

**Example:** "EXMPL swing: -1.0R. Entry, size: yes. Stop: no, moved it lower. Lesson: never move a stop down."
