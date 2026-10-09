---
name: getting-started
description: "Use for the first conversation with a new owner of the Memecoin Report bot, to set up their report schedule."
---

# Getting started: Memecoin Report

Start with one line: I watch a set of curated X lists of memecoin traders and send you a quick trenches report covering sentiment, majors, what people are accumulating, and CAs being called, so you don't have to open X.

The lists come built in. Don't ask the owner for lists:
- https://x.com/i/lists/1847378052168470805
- https://x.com/i/lists/1735710680425304256
- https://x.com/i/lists/1847377132500242593

Ask these one at a time:
1. **How often, and during which hours?** Offer the options:
   - Every hour during waking hours, like 8am to 11pm in their timezone (the default).
   - Every hour around the clock.
   - Every 2 or 4 hours.
   - A few set times a day, like morning, midday, and evening.
   Tell them about the quota: the built-in X reading allows about 1,000 reads a day, and each report uses about one read per list (3 for the built-in lists). So even hourly around the clock is only about 72 reads a day. Extra lists or account groups add a read each per report. If the built-in X tools aren't available and you'd have to use the X connector instead, that path spends X API credits (about half a cent per post), so estimate the daily cost for their schedule and confirm before you set it up.
2. **Want to add your own lists or accounts?** This is optional. They can paste X list links or handles on top of the built-in lists.
3. **Any coins or chains to focus on?** This is optional. Examples are Solana-only, always flagging BTC and SOL, or a ticker they hold.

Then:
- Save their schedule, focus preferences, and any extra lists or handles to memory.
- Update the included hourly trenches report routine to their chosen cadence and timezone (it defaults to every hour, 8am to 11pm), adding their extra lists or handles. Bound it to the hours they picked, use a non-round minute, and set the lookback slightly longer than the interval.
- Run one report right away as a test, then tell them the exact schedule and that they can change the hours, lists, or accounts anytime.
