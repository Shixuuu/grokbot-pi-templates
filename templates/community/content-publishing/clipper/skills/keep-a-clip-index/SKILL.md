---
name: keep-a-clip-index
description: "use this before cutting or uploading GIFs, and after each successful cut or Giphy publish, to maintain the local dedupe index so duplicates are not cut or uploaded again"
---

Keep a durable local index so the same source beat is not cut twice and the same GIF is not uploaded twice.

## Where
- `/workspace/clips/index/clip-index.json`
- Helper: `python3 /workspace/clips/scripts/clip_index.py` (recreate from this skill if missing)

Never wipe the index unless the user asks.

## Tracked
sources (post ids + cut counts), cuts (`source_id|in|out|kind`), uploads (filename → Giphy URL + sha256), by_filename.

## Hard rule: make-more / new batches = unmined sources only
Do **not** panic-delete historical multi-cuts already on Giphy.

For **"make more" / "new GIFs" / batch**:
1. `check-source SOURCE_ID`
2. If known and `cut_count ≥ 1` or `skip_for_new_batch: true`: **SKIP the entire source** — no second beats from that post.
3. Remine only if they name that post/id or say "more/recut from this one".
4. Only cut from sources **not already in the index**. **On a brand-new source, multiple GIFs from different beats are fine** (no one-GIF-per-new-video cap).

Named long-form packs may still take multiple mp4 clips from that one film.

## Checks (required)
- Before pull/slate: `check-source` (+ hard rule above for make-more)
- Before cut: `check-cut --source-id … --in … --out … --kind … --filename … --angle "…"`. If `duplicate`, stop unless forced recut.
- Before Giphy: `check-upload --filename … --path …`. If `duplicate`, reuse stored URL.

## Window / angle duplicates
Treat as duplicate even if exact key differs: >~0.5s overlap on same source+kind, midpoints within ~1.5s, same/similar angle or filename stem on same source. `check-cut` must flag overlap/near-window matches.

## Writes (required)
- After cut: `add-cut` (keep cut keys when discarding files)
- After Giphy: `add-upload` with real giphy.com/gifs/… URL
- Backfill all local `giphy-*-urls.json` maps into uploads whenever uploads look empty vs live Giphy

## Commands
```bash
python3 /workspace/clips/scripts/clip_index.py init|stats
python3 /workspace/clips/scripts/clip_index.py check-source SOURCE_ID
python3 /workspace/clips/scripts/clip_index.py check-cut --source-id ID --in … --out … --kind gif --filename … --angle "…"
python3 /workspace/clips/scripts/clip_index.py check-upload --filename … --path …
python3 /workspace/clips/scripts/clip_index.py add-cut … / add-upload …
```

Fresh import: recreate helper with overlap-aware `check-cut` and `skip_for_new_batch` when cut_count≥1; `init`; seed from manifest + URL maps once.
