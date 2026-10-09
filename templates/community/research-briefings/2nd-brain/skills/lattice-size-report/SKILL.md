---
name: lattice-size-report
description: "use this after every Lattice ingest and for the daily morning brief — measure disk free space plus wiki pages, word count, and room under the ~400k-word cap"
---

# Lattice size and disk room

Use this **after every ingest** into a Lattice (`raw/` + `wiki/`), on the daily Lattice morning brief, and when asked how much room is left. Do not wait for a “big” ingest. Measure each time; do not reuse yesterday’s numbers.

## Cap
One `wiki/index.md` under **~400 000 words**; then domain indexes. Count compiled wiki markdown words, not `raw/`.

## Do
1. Measure disk free space on this computer (do not invent). Report free and total, briefly.
2. Count `wiki/**/*.md`: page count + word count for the Lattice you just wrote (use that Lattice’s `wiki/` path).
3. Remaining ≈ `400000 − wiki_words`. Mention percent used if useful.
4. One clause on that Lattice folder size (wiki + raw) — not the cap.
5. Tell the user in one or two short lines **after the ingest reply**: disk free, pages, ~words, room left under ~400k. Match the user’s language. Morning brief: clear French when that skill applies.

## When
- After every successful ingest (including a single screenshot or a declared fact).
- Morning brief: always include this line, even if nothing else changed.
- Weekly lint: one line is enough if the morning already sent it the same day.
- Duplicate re-upload with no new write: skip the size line.

## Do not
- Invent figures.
- Treat agent memory size as Lattice size.
- Freeze yesterday’s numbers.
- Scare the user early; at ~5–10% used, state the numbers calmly.
