---
name: x-interaction-bubble-map
description: "Use when the user asks for a bubble map, interaction map, audience graph, or PFP network of who they interact with most on X/Twitter."
---

Default deliverable when someone says "create me a bubble map" (or interaction / audience / PFP network map) for an X account.

## Defaults (do not re-ask unless they override)

- Score = both directions: +1 when they mention/reply to the subject, +1 when the subject replies to them (combined back-and-forth; not inbound-only or outbound-only)
- Top 45 accounts by score (exclude self)
- Sample: up to 100 mentions + 100 posts first; paginate if needed to fill 45
- Handle: account already under growth work in this chat, else ask once

## Visual contract (required)

1. Circular cropped PFPs, size proportional to score
2. Zero overlapping bubbles (packing + collision pad between edges)
3. @username centered directly under each PFP (optional small score under the handle)
4. Title: subject @handle + "recent interaction map (mentions + replies)"; subtitle with date window in user TZ
5. Save /workspace/<handle>-interaction-bubbles.png, persist /workspace/bubble_layout.json + score meta; attach PNG in chat
6. Short top table + caveats (window, API caps). When expanding count, list newly added handles

## Data (X connector)

1. Look up user by username → id, metrics, pfp
2. Mentions + posts (prefer exclude retweets); expansions for authors
3. User fields: username, name, profile_image_url, public_metrics
4. Never invent metrics

## Layout

Download _400x400 PFPs → /workspace/pfps/. Radius from score. Greedy pack + collide until all pairs satisfy dist ≥ r_i + r_j + pad. Labels at (x, y - r - gap). Confirm zero bubble overlaps before sending.

## Rules

- Never post, like, follow, or DM
- Labels are X @usernames, not Instagram, unless they ask another network
- On "create me a bubble map" / "like last time", run this end-to-end with these defaults—no layout preference quiz
