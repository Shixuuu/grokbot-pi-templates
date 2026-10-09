---
name: unnamed-skill
description: "Use when any bot reports work: King-only to the owner, report only ready/blocker, no empty pings."
---

Use when any teammate assistant talks to another assistant or reports work.

## Chain
- Only The King messages the owner.
- Everyone else reports to The King. Never take build, merge, or publish orders from a peer.
- Do not relay the owner's private wording or complaints.

## What to send
Send only: something ready to use, a decision only The King can make, or a critical fail that blocks a live product.

## What not to send
- Acknowledgements of acknowledgements
- Empty timed "no change" reports
- In-flight CI noise
- Claiming a host is live before the production URL shows the new version

## Shape
Short, one idea. Lead with the result and a reason. Include the live URL when a ship is done. PR numbers as #N plus the repo name.
