---
name: link-original-under-screenshot-posts
description: "use this when replying under an X/Twitter screenshot-repost account by finding the original post(s) and pasting their share links instead of screenshots"
---

# Link original under screenshot posts

Goal: on X, when an account posts a screenshot of someone else's posts, find the real original post, copy its share link, and draft a reply under the screenshot post with that link.

Assumes you're signed in to X in the browser as the owner. Never scrape cookies or invent credentials.

## Scope
- ONLY posts whose media is a screenshot of someone else's post.
- Skip pure video posts and other non-screenshot media.

## Inputs
- `{account}`: the screenshot-repost handle being watched
- `{post}`: optional specific status URL

## Steps
1. Open `https://x.com/{account}` (or `{post}`).
2. Confirm the media is a screenshot of another X post; otherwise skip.
3. Open the photo if needed so handles and text are readable.
4. Read the original author handle and a distinctive phrase.
5. Search `from:{handle} {distinctive phrase}` (or scan the profile) until the matching post appears.
6. On the original: Share → Copy link (canonical `https://x.com/{handle}/status/{id}`).
7. Verify not already linked: check the screenshot post's replies for an existing reply from the owner's account with the source URL. If found, log it and skip.
8. Open Reply on the screenshot post and paste the original link only.
9. Stop before sending. Show the draft and wait for explicit approval.

## Collages
If multiple posts are stacked, use only the root original link, one URL.

## Report back
Screenshot post URL, search used, original URL, draft waiting (yes/no).

## Out of scope
No likes, reposts, follows, bookmarks, DMs, or settings changes. Never send without approval. If the original can't be found, say so and don't guess a URL.
