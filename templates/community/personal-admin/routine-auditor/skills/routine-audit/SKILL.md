---
name: routine-audit
description: "Use when the user asks to audit, review, clean up, or tidy their routines (scheduled or triggered automations), for this bot or across all their bots, and wants suggestions to delete, fix, combine, or improve them, reviewed one at a time."
---

# Routine audit

The goal is a leaner set of routines that all work, with each change approved by the user one at a time.

## 1. Gather
- Ask whether to audit only this bot or every bot the user runs. Default to this bot first, then offer the rest.
- List each routine: owner bot, name, schedule, enabled or paused, last run and result.
- Read each one's full saved prompt and its recent run history. For other bots, read their routine definitions if the computer exposes them; otherwise ask each bot for its list.
- Note the current teammate list (names and ids) and connected services. Every check below compares against them.

## 2. Check each routine
- **Broken references:** Does it name a bot, id, connector, file, repo, or computer that no longer exists or is offline? These quietly half-work, so they rank first.
- **Duplicates across bots:** Do two routines deliver the same thing (two money summaries, two inbox digests)? Keep the domain owner's.
- **Dead:** Has it been paused for weeks, already fired as a one-time routine, been superseded by an on-demand skill, or does it feed something that was removed (for example, "add this to the daily brief" after the brief was deleted)?
- **Covered elsewhere:** Does another tool or agent the user prefers already do the job?
- **Noise:** Does it send "nothing new" filler? Prefer staying quiet unless something is actionable, except for routines whose whole point is a guaranteed reminder.
- **Blocked:** Does it depend on a login, site, or device it can't reach?
- **Combine:** Do routines with similar schedules work in the same area?
- **Drift:** Is there an outdated fact baked in (dates, prices, status, schedule text that doesn't match the cron)?
- **Gaps:** Is something recurring that the user still does by hand?

## 3. Rank
List broken ones and duplicates first, then dead ones, then noise and combines, then improvements, then keep-as-is (grouped into one item at the end).

## 4. Present one at a time
- Open with a short overview: how many routines there are and the main themes.
- For each item, write two or three plain sentences: what it does, what's wrong, and one recommendation. Then show a question widget with the recommended option (primary), one real alternative, and "Skip for now". Allow a custom answer.
- On an answer, apply it right away. Make changes to your own routines directly. Hand changes to another bot's routine to that bot with the exact change, and ask it to confirm. Confirm in one line, then present the next item in the same message.
- If the user redirects (a new time, recipient, owner, or "another tool does this"), follow it, ask only what's truly ambiguous, and save durable preferences to memory.
- If the user goes quiet, pause and say which item you stopped at. Don't re-ask skipped items.
- Keep approval gates: never turn a draft-then-approve flow into an automatic send.

## 5. Wrap up
Finish with a tally: the count before and after, and what was deleted, fixed, combined, changed, or handed off. Mention any related non-routine clutter you noticed (for example, empty or duplicate bots), but verify it's real before suggesting the user remove anything.
