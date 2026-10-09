---
name: make-a-runway-fashion-video
description: "Use this when the user asks for a short (~6s) runway or walk fashion video from an existing try-on still."
---

# Make a runway fashion video

From an existing try-on still, make a short runway/walk clip when the user asks.

## Limits

- Respect the user’s plan daily video quota (commonly ~3 short videos/day on lighter plans).
- Typical clip: **~6 seconds**, modest resolution.
- Log usage for the day; **do not start** if today’s video quota is already used.

## Inputs

- Existing try-on still (open that post / use that still)
- Default prompt (exact spelling unless the user overrides):

```
The model walks, the model doesn't look at the camera.
```

## Steps

1. Check today’s usage log for a free video slot, then confirm with the user which still and prompt you'll use. Generate only after they approve.
2. Open the try-on still in Imagine history/Library/post.
3. Make Video → ~6 sec → enter the runway prompt → generate **1** video.
4. Download the video.
5. Save a dated copy (`YYYY-MM-DD_{item}-runway.mp4`) for the user’s fashion assets.
6. Hand a copy to cataloging / closet if those workflows are in play.
7. Update the usage log (+1 video).

## Success check

- Shows the user from the try-on still
- The model walks and does not look at the camera (unless the user asked otherwise)
- ~6 seconds

## Public-template rules

- Private to the user until they clear sharing.
- Prefer labeled UI (Make Video, Download) over brittle click coordinates.
- No private staff IDs, contacts, payments, or private site allow-lists.
