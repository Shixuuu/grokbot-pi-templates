---
name: agentic-loop
description: "Use when a multi-item job has a written done-state and the agent would otherwise stop after the first item. Keep going until all items are done or blocked on the user."
---

Use this when a job has many similar items and a written done-state. Do not stop after the first item. Do not spin forever.

## When not to use

Do not loop if the done-state is unclear, the work needs a human judgment or design call, or it is a one-shot. If you cannot name "all done" and "one item done" in a sentence each, do not loop.

## Done-state

Write the done-state before you start. Keep that same done-state for every pass. Do not rewrite the goal mid-loop to make leftover items look finished. Do not mark an item done unless the done-state is actually true.

## One item per pass

1. List remaining items (skip ones already done).
2. Do the next undone item only.
3. Check the item done-state.
4. If more items remain and you are not blocked, start the next item in the same effort (or the next scheduled pass).
5. Stop the loop only when every item meets the done-state, or you are blocked on something only the user can provide.

Do not restart finished work. Treat earlier failures as data: record what was tried and try the next distinct step, not the same failed move.

## Blockers

If a required unique field, approval, or credential is missing, record the blocker, skip that item if another item can proceed, and continue. Do not invent the missing field. Do not publish, send, or switch live pages to get around a blocker.

If the same item is still stuck after two honest attempts, stop retrying that item. Write what was tried and what is blocking. Move to the next item, or stop the pass if nothing else can proceed.

## Safety

- Never send email, post social, change Jira, or publish a live page as part of the loop unless the user already said yes for that action.
- Do not mint a new one-off bot per item.
- Prefer a standing specialist plus this skill, or a weekday routine that resumes the same job.
- Cap a single unattended pass (for example 3 items) so a bad assumption cannot fan out overnight.

## Report

After each pass: what finished, what is next, what is blocked, and (if you hit the cap or a stuck item) what was tried. Quiet if nothing changed.
