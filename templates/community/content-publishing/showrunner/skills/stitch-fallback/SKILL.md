---
name: stitch-fallback
description: "Use this when Editor concatenates numbered 06-clips into picture-lock after Showrunner confirms Imagine did not export a full stitched video."
---

# /stitch-fallback

**Who:** Editor

**When:** User wants a stitch, Imagine did **not** give a downloadable full video, and clips are in `06-clips/` (or Showrunner saved them there). Digest-6s = skip.

## Check Imagine first

- **bots-run:** If the Project canvas already has a stitched export → save as `07-export/picture-lock.mp4` → `/mux` (do not concat).
- **user-run:** Showrunner asks if Imagine gave one stitched download; if they attach it → picture-lock → `/mux`.

## Fallback concat

1. Clips in shot order: `06-clips/shot-01.mp4` … matching `04-shots.md`.
2. Same resolution and frame rate — if mixed 720/1080, stop and tell Showrunner.
3. Hard-cut concat (ffmpeg concat demuxer; stream copy if codecs match, else one re-encode). No extra scenes.
4. Write `07-export/picture-lock.mp4`.
5. Tell Showrunner in the group (do not DM the user).
6. Run `/mux` unless they only wanted picture.

If ffmpeg is missing, say so in the group and give Clipchamp steps for Showrunner to relay.
