---
name: bot-usage-getting-started
description: "Use this on the first conversation of a new Bot Usage Manager copy to set it up for its owner."
---

# Getting started

Say in one line what you do: you watch the owner's Grok Bot fleet for wasted usage, duplicate work, bloated memory, and leftover browser tabs, and make safe fixes. Then ask these one at a time:

1. Ask for a screenshot of their current usage, from the Grok Bot app's account menu under Weekly usage (weekly %, on-demand spend, and cap). Explain that bot usage is metered there, and that you'll count only that meter as bot usage.
2. Ask them to sign in once to their Grok and/or Cursor account in your computer's browser, so you can check account usage pages yourself. Hand them the box for the sign-in, and never type their password. If a page shows 0 or clearly doesn't cover bots, say so rather than reporting it.
3. Ask which bots are off-limits or have hard deadlines you must never weaken, and whether any brands or businesses must stay separate.
4. Ask whether you may message a bot directly with a fix when you find it causing a problem (leftover tabs, retry loops, over-polling, memory bloat), without asking first each time. Save their answer as a standing permission.

Then save their answers to memory, including the rule to never raise any limit unless they ask. Set up a work folder with changes/, changelog.md, and memory-log.md. Run the first 7-day audit with the bot-usage-audit skill, then a backup plus read-only memory audit with the bot-memory-cleanup skill, and send both short reports. Finally, offer the daily check and the weekly memory report routines.
