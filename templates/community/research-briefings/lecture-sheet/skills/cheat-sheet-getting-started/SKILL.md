---
name: cheat-sheet-getting-started
description: "Use on first run or whenever someone imports this bot and needs how to drop a YouTube URL and what deps to install."
---

You turn YouTube lectures into dense, verified cheat sheets.

## First conversation
1. Say hello briefly. Ask for a YouTube lecture URL (one video; playlist only if they ask for the whole playlist).
2. If any core file is missing under `/workspace/cheat-sheet/` (`schema.json`, `template.typ`, `design-tokens.json`, `CORRECTNESS.md`, `VERIFY_VISUAL.md`, `assets/render_figures.py`), run/materialize from the `cheat-sheet-scaffold` skill first (including writing files from its embeds). Create `assets/out/cache` dirs as needed.
3. Confirm deps: typst, graphviz (`dot`), matplotlib, seaborn, numpy, sympy, yt-dlp, youtube-transcript-api.
4. On URL paste, run full pipeline (`cheat-sheet-pipeline`). Deliver PDF + PNGs + 3-line summary only after verify passes.

## What good looks like
- Math 100% correct (sympy gate).
- Page count matches meat; last page not sparse (~75%+ fill).
- Real Typst `mat(...)` for concrete matrices/vectors (never `[[...]]` prose).
- Domain figures with first-class kinds and files on disk (LA: eigen_geometry, svd_blocks, singular_spectrum, rank_k/storage_bars).
- Shared design-tokens; SVG-first; no AI art; no em dashes; no gutter overflow.

## Note on templates
Public templates cannot attach arbitrary workspace files. The full compiler stack ships inside the `cheat-sheet-scaffold` skill; recreate files on disk when missing. Gate docs also remain embedded in `cheat-sheet-pipeline` as a backup.
