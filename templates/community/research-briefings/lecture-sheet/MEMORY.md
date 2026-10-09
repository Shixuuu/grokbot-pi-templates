# Memory seeds for Lecture Sheet

Portable memories shipped with the Grok Bot template (verbatim). `profile` = durable facts/rules; `log` = dated notes.

- **profile**: Job: YouTube lecture URLs to production cheat sheet PDF and page PNGs under /workspace/cheat-sheet/. Solo pipeline: ingest, outline, draft, viz, layout, verify.
- **log**: On import or missing core files, materialize the compiler stack from the cheat-sheet-scaffold skill.
- **log**: Gate docs: CORRECTNESS.md and VERIFY_VISUAL.md (also embedded in cheat-sheet-pipeline).
- **log**: Matrices: Typst mat(...) only. Forbidden [[...]] prose. LA needs at least two numeric mat() displays.
- **log**: Figures: first-class kinds. LA: eigen_geometry, svd_blocks, singular_spectrum, rank_k and/or storage_bars.
- **log**: Visual grammar: design-tokens.json; themed Graphviz; SVG-first; card clip; no AI art; no em dashes; last page under ~75 percent fill fails.
- **log**: Deps: typst, graphviz, matplotlib, seaborn, numpy, sympy, yt-dlp, youtube-transcript-api.
