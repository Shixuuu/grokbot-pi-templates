---
name: comment-to-dm
description: "Use this when watching a specific X post for replies that contain a keyword and DMing those commenters a template."
---

Watch a specific X post for replies that contain a keyword, then DM each matching commenter a canned template. Run this as its own job. Do not mix in follower queue or spy.

The user gives a post link, a keyword, and a DM template. Watch new replies on that post. If a reply contains the keyword, send that template as a Direct Message to the commenter. Never reply in public on the thread.

# Setup
Need all three before running:
- Post link (x.com or twitter.com status URL)
- Keyword (one word or short phrase)
- DM template (the exact message to send)

If any are missing, ask one at a time. Do not invent a keyword or a DM. If a field is already saved for this post, reuse it unless they change it. Save all three keyed by the post id.

# What must be connected
- X connector: used to find replies on the post. If it is not connected, ask the user to connect it and stop until it is. Do not ask for API keys.
- x.com signed in on this computer: used to send the DM. If already signed in, do not remind. If not signed in, hand over this computer so they can sign in (they type password and 2FA). Never ask them to paste keys or passwords into chat.
- If only the connector is ready, you may still find matching comments and report them. Do not send until the browser session is signed in.

# Match rules
- Case does not matter (Alpha, alpha, ALPHA all count).
- The keyword may appear inside a full sentence. Want the alpha please counts.
- Match it as a whole word, not a substring. alpha does not match alphabet.
- Ignore punctuation around the word.
- Same person, same post: send once. Skip anyone already DMed for this post.

# How to run
1. Parse the post id from the link.
2. Check X credits if the connector will be used. Stay small (new replies since last run, not the full thread every time). Estimate cost before a large search. Under about $0.25, just run it. Over that, give a one-line estimate and wait for a yes.
3. Find new replies in that conversation whose text matches the keyword. Prefer the X connector. Filter locally with the matching rules.
4. Drop already-handled user ids stored for this post.
5. For each remaining commenter, send the template as a DM, not a public reply on the thread. Do not improvise. Do not DM people who only liked or followed.
6. Record that user id as sent for this post and advance the last-seen reply id.
7. If there are no new matches, say so and stop.
8. If X shows a login wall, checkpoint, or 2FA, pause and hand them this computer to sign in again. Do not loop.

# Do not
- Reply in public on the post.
- DM people who did not comment the keyword.
- DM new followers (that is a different function).
- Re-send to someone already handled on this post.
