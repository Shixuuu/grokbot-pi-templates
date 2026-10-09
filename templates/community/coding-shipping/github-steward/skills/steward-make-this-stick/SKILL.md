---
name: steward-make-this-stick
description: "Use this when first run has worked and the owner says \"make this stick\", accepts the one-time offer, or says \"pause\". Saves the Steward skills and, only on yes, creates two quiet routines: weekday standup and weekly drift check."
---

## When to use
- Only after steward-first-run succeeded. Opt-in only.
- "Make this stick", "keep an eye on it", "remind me each day".
- "Pause", "stop the routines", "turn the routines back on".

## Inputs
- Board id, repo list, watchdog list, slug map from the snapshot.
- Fleet lead: if the owner runs a fleet lead bot, it owns routine times (step 4).
- Time without one: state the default (weekday 9:00 in the owner's timezone, weekly on Monday); do not ask.

## Steps
1. Offer once: "I can check your board each weekday and tidy weekly. Reply stick. Or skip."
2. Nothing is created until they say yes.
3. Save the Steward skills with Grok Bot's skill feature so they load instead of improvising.
4. Time slot: with a fleet lead, message it the routine names, cadence, and preferred time, and use the exact slot it returns; it leads, so never pick your own or override it. Without one, use the default time, on a minute no other routine uses. Same step before moving any routine later.
5. On yes, create two routines with Grok Bot's automation feature, using the prompts below as written (fill TIME and DAY). Only these two are created on "stick".
   - Key renewal reminder: a separate one-line offer, only when the key has a real expiry. Read it from the `github-authentication-token-expiration` response header on any API call made with the key. No header means it never expires: offer and schedule nothing. Never assume a length.
6. Event triggers, if used: the numeric GitHub repo id from a repo search, never the name.
7. Record "Routines: on" with times in the snapshot. Save the preference to memory (replace the old note).
8. "Pause": pause both and set "Routines: paused". Also pause them yourself if the workflow changes. "Turn the routines back on": resume.

Routine 1, weekday standup (Mon-Fri at TIME):
```text
You are GitHub Steward running the weekday standup. Load steward-status.
Read the snapshot issue, the umbrella board, open draft PRs waiting for a yes,
review requests and mentions, and the latest watchdog runs. Every fact must come
from a connector read in this run. If nothing needs the owner (no Needs you, no
blocked items, no failed watchdog), send nothing and end silently.
Otherwise send at most five lines, Needs you first, then Blocked, then Failed
watchdog, with one link per line as a receipt and exactly one next step.
Never report individual commits or pushes. Never change anything on GitHub in this run.
```

Routine 2, weekly drift check (DAY at TIME):
```text
You are GitHub Steward running the weekly drift check. Load steward-status (housekeeping).
Compare the repo list with the umbrella board and the slug map. Find repos off the
board, bots with no folder, extra Projects, and public repos that should be private.
Compare each housed bot's live profile and skills (where readable) to its home mirror,
and sync any drift per steward-house-a-bot (Update a home); those mirror commits to
docs-only bot-* homes are pre-approved. Every fact must come from a connector read in
this run. If there is no other drift, send nothing and end silently. Otherwise list the
drift in at most five lines and offer ONE fix marked Recommended, as "Reply yes". Never
delete, archive, or change anything else without the owner's yes. Never report
individual commits or pushes.
```

## Validate
- Grok Bot's automation list shows both routines with the right times (or paused), and a renewal reminder only if one was accepted, on the header's date.
- The snapshot shows the routine state.

## Return
- One sentence: "Done. I will only message you when something needs you."
- Snapshot link as receipt.
- One next step, for example "Tell me the first thing you need."
