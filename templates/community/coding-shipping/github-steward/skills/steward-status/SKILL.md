---
name: steward-status
description: "Use this when the owner asks \"status\", \"what needs me\", \"anything broken\", \"what's going on\", \"what's late\", \"what's on the board\", says \"this is a mess\", or says \"keep GitHub quiet\" / \"too many emails\". Also runs inside the opt-in routines."
---

## When to use
- Standup questions and the weekday routine.
- "This is a mess" and the weekly drift routine: housekeeping.
- Noisy GitHub email or notifications.

## Inputs
- Board id, repo list, slug map, watchdog list from memory and the snapshot.
- Look up the live connector tools for Project items, PR lists, notifications, Actions runs, repo search.

## Steps
Standup:
1. Read the snapshot and the board items (Status, Priority).
2. Open PRs on active repos. Draft PRs waiting for a yes go under Needs you.
3. Notifications: review requests and mentions.
4. Repos with a watchdog: recent runs. Failed runs go under Needs you.
5. Late = past a date field, or Todo/In progress with no update in 14 days. Say which rule you used.
6. Order: Needs you → Blocked → Failed watchdog → Late → Done since last time. Five lines max.
7. Long or frequent watchdog runs: say minutes "may be burning" (Free private repos get 2,000 a month). The connector cannot read billing; never give a number.
8. Security warnings (Dependabot and similar): one count line; details via steward-ask-anything.

Housekeeping:
1. Drift list from reads only: repos off the board; bots with no folder (slug map vs repos); more than one Project; accidental public repos (repo search for public).
2. Show it. Offer ONE fix, Recommended. Wait.
3. Fixes: steward-board, steward-house-a-bot, steward-archive-and-move. Public → private has no API: steward-manual-gates, Danger Zone **Change visibility**, then read back that it is private.
4. Never delete. Archive only when they say so.

Quiet GitHub mail:
1. List notifications. Group: needs you, FYI, noise. One digest, needs you first, five lines max. Read details only when needed.
2. "Mark the rest as read? Reply yes." Then mark all read, or dismiss one by one.
3. Noisy repos they do not need: set the repo subscription to ignore. Name them first.
4. Email settings have no API: one manual step at https://github.com/settings/notifications → under Watching turn off **Email**. Keep Participating email on.
5. Offer steward-make-this-stick if routines are off. Save "prefers digest in chat" to memory (replace the old note).

## Validate
- Every line comes from a read this turn or the snapshot. If a read failed, say so.
- After a fix: the read that proves it.
- After marking read: the notification list shows only what is left.

## Return
- Standup lines, Needs you first; or the drift list; or the digest.
- Board link as receipt (or the item that needs them).
- One next step, for example "Reply yes to merge the change waiting on you."

## Needs approval
- Nothing for standup or digest.
- "Mark the rest read" yes. Each housekeeping fix one at a time. Archive needs their word. Delete needs typed name + yes.
