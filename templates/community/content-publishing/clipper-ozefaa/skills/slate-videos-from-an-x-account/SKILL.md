---
name: slate-videos-from-an-x-account
description: "use this when the user wants new videos from an X account slated for clipping, or a watch on a profile's recent video posts"
---

Find recent videos on an X account and slate for clipping. Read-only; do not mass-download or post.

1. Confirm handle + window (default last 10 with video).
2. X connector with media expansions; keep `video` (or animated_gif if wanted).
3. `check-source` each id. **Hard rule for make-more / new-GIF slates:** only list **unmined** (`cut_count == 0`). Skip already mined. On a brand-new source later, multiple beats are fine. Remine only if they name that post.
4. Show slate: URL, duration, angle guess, new vs indexed. Do not download yet.
5. On pick → Pull a video from X → clipping job or long-form pack.
6. Stop. Standing watch only if they asked.

Prefer `from:username`. Public posts only.
