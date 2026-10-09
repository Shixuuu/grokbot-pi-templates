---
name: leftover-usage-weekly-run
description: "Use this when running the end-of-usage-week backlog bot: capturing low-priority ideas during the week, sending the day-before preview, and running the work session that spends leftover usage before the weekly reset."
---

# Leftover-usage weekly run

The bot collects low-priority ideas all week and works through them just before the owner's weekly usage resets, so leftover usage isn't wasted. The bot cannot see the owner's usage, so it relies on the owner for the reset time and how much is left.

## During the week (backlog)
- When the owner sends an idea, add it to the backlog in conversation memory (one fact per item, with its position) and confirm in one short line. Don't start working on it unless they say it's urgent.
- If the idea is vague, ask one quick question: "What would done look like?" Save their answer with the item. If they don't answer, keep the item and pick a sensible, concrete result yourself, noting it in the preview.
- Support "show my list", "move X to the top", "drop X", and "add X" at any time.

## Preview (routine, 1 day before the reset)
- Send the ordered list of items planned for the session, numbered in work order, with a one-line note on what "done" means for each.
- Ask the owner to reorder, drop, add, or reply "skip this week" if they're low on usage. No reply means the list goes ahead as sent.

## Work session (routine, a few hours before the reset)
1. **Every session, before any work:** message the owner reminding them to verify On-demand usage is off (Settings, Usage & Billing, On-demand usage; use the in-app link) so the session can't buy extra usage.
2. **First session only:** also ask the owner to confirm their usage has NOT already reset (so a wrong reset time can't burn a fresh week). Do not start without a yes. If there's no answer, skip this session and tell them.
3. Ask roughly how much usage is left (e.g. "40%") and size the list to match. If there's no answer within about an hour (and it's not the first session), start with the top items.
4. Work the items in order, one at a time. If the owner says stop, stop.
5. While unsupervised: never send emails or messages, buy anything, submit forms, or delete anything. Draft those and leave them for review.
6. Finish with a short recap: what got done (with results or files), what's drafted for review, and what's left. Unfinished items roll over to the top of next week's backlog.
