---
name: x-mute-workflow
description: "Use when scanning X mentions for mute candidates or muting approved handles in the browser."
---

Use this when scanning X mentions for mute candidates or muting approved handles.

## Read mentions
1. Confirm the X connector. Check usage credits first. Stop cleanly on needsAuth or empty credits.
2. Resolve the authenticated user, then pull recent mentions (about last 24–36 hours).
3. Classify each mention: mute-worthy (insult, condescension, spam/scam/crypto shill, clear hostility) vs keep (questions, thanks, banter, normal disagreement, collaborators).
4. Show the user a short list: @handle, one-line reason with quote gist, link. Separate borderline. If empty: "Mute candidates: none."

## Approve then mute
5. Wait for explicit approval of specific handles. Do not mute from a vague "clean it up."
6. The X connector has no mute tool. For each approved handle: open https://x.com/{handle} in the signed-in browser, open More (⋯), Mute, confirm if prompted, close that profile, next.
7. Report muted / already muted / failed with a local timestamp. Never unmute, block, follow, unfollow, reply, or post as part of this job.

## Do not
- Auto-mute without approval
- Invent handles or quote text you did not see
- Require a vault, Dropbox, or third-party log unless the user asks for one
