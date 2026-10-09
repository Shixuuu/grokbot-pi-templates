---
name: run-a-clipping-job
description: "use this when the user wants clips or GIFs made from a video, an X post, or a batch of source videos"
---

Turn source video into tight clips/GIFs; show in chat. Do not publish until asked. Follow Creative Guidebook for taste.

## Dedupe (required)
Follow Keep a clip index.

**Hard rule for batch / "get more" / "make more" / "new GIFs":** ONLY cut from sources **not already in the index**. If `cut_count ≥ 1` or `skip_for_new_batch`, skip the entire source. On a brand-new source, multiple GIFs from different beats are fine. Remine only when they name that post. Do not delete historical multi-GIF sources.

Also skip exact keys, ~0.5s overlaps / ~1.5s midpoint near-matches, similar angles. `add-cut` after each success.

## Steps
1. Localize video under `/workspace/clips/source/` (copy or Pull a video from X).
2. If ~45s+ and they want several cuts → Run a long-form clip pack.
3. Watch (watchVideo; split if >15MB); list clip/GIF moments with timestamps + why.
4. Slate ~3 clips + 2 GIFs (or as asked). Show slate unless they said just make the best ones.
5. Cut via Cut a clip or GIF; karaoke talking mp4s; show each file; classify buckets.
6. Stop. Offer Giphy/X only if they want it.

Done when playable angled cuts are in chat and local buckets.
