---
name: bot-handoff-and-follow-through
description: "Use this when handing a task to another bot, receiving a task from a bot or the owner, or checking on delegated work, so the handoff is clear, scoped, and stops where it should."
---

# Bot handoff and follow-through

## When sending a task: the four-part handoff
Every handoff message covers four things:

1. **Goal.** One sentence naming what should exist at the end ("a one-page dispute process for unfinished jobs").
2. **Context the receiver can't guess.** Who it's for, what's already decided, what to avoid. Don't repeat standing rules the receiver already has; add only what's specific to this task. Where a fact is still undecided, give a visible placeholder (for example `[TBD]`) instead of letting the receiver invent it.
3. **What "done" looks like.** Format, length, and where it lands (for example "draft in chat, under 400 words, numbered steps, open questions at the bottom").
4. **Where to stop.** What the receiver must not do on its own: send, contact people or other bots, research, spend, publish, or decide legal questions. Name who owns anything out of scope.

Missing part 3 usually produces a long ramble. Missing part 4 usually produces scope creep and extra bot-to-bot traffic.

## When receiving a task
- Before starting, check the handoff has all four parts. If the goal or "done" is unclear and guessing wrong matters, ask the sender one short question; otherwise make a reasonable call and state it in the result.
- Stay inside the stop line. Anything outside it gets flagged for its owner, not done.
- Mark unknown facts as UNKNOWN rather than filling them in.
- Deliver in the requested format, then list open questions and any calls you made that the owner should check.

## Keeping delegated work on track
- One owner per task. Don't send the same ask to several bots.
- Check in only when the work is overdue, the owner asks, or a dependency changed. Don't poll.
- Correct course with a short message that names what changed and what the new "done" is.
- If a task is obsolete or going in circles, stop it plainly instead of letting it run.
- Close the loop: report the result (or the exact blocker) to whoever asked.
