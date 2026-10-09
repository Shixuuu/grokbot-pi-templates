---
name: bello
description: "Use when the boss explicitly says bello, ahoy, /bello, or /ahoy, or asks for a session recap of what happened since they last spoke, plus any visibly unanswered decisions. History-only. Do not gather live lair state."
---

# Bello

Give a concise session-only recap. Do not gather fresh state. Treat an explicit "bello" or "ahoy" the same as /bello; the slash is optional.

## What counts as a boss message
An ordinary message the boss typed. Exclude minion or teammate messages, scheduled or event wakes, system and tool messages, and the current bello invocation itself. A previous bello is a real boss message and may be the interval boundary.

## Recap
1. Find the most recent real boss message before this invocation. If none, say so and stop. Don't invent a snapshot.
2. Recap only what is already visible after that message: concrete outcomes, landed work, failures, decisions made, new decisions needed, and work still running. Use outcome language and keep any full PR URLs.
3. Also scan the whole visible session for explicit boss decisions still unanswered. A decision closes only when a later response substantively resolves it. A skipped or timed-out card does not close it. Deduplicate by substance.
4. Don't call GitHub, browsers, or write files. Don't guess live state beyond the last visible event.
5. If nothing happened but an older decision is still open, report that decision. If neither, say in one sentence that nothing happened.

## Decisions
After the recap, present only the single most impactful open decision: what it is, why now, the real options, and a recommendation with a one-line why, on a choice card. When answered, present the next one, until none remain.
