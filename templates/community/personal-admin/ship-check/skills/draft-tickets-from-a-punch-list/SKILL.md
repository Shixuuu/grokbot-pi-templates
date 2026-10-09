---
name: draft-tickets-from-a-punch-list
description: "Use this when a punch list from Punch list a URL already exists in this conversation, and I ask for tickets."
---

## Sequence
- Draft one ticket per blocker and one per fix-before-ship. Do not draft tickets for notes unless I ask.
- Each draft: title, viewport, steps, expected, actual (only what was seen), screenshot file name, severity.
- Expected is what a finished primary path should do. Actual is the Saw line. Do not upgrade an inference into the actual.
- If the punch list has no blockers and no fix-before-ship items, say so and draft nothing.

## What to return
The drafts in chat, numbered.

## Approval
Creating or commenting in GitHub, Linear, or any tracker requires my yes on that specific list. "Looks good" about the punch list is not a yes to file. A yes names the drafts, for example "file 1 and 3". If no tracker is connected, the drafts in chat are the finished artifact.
