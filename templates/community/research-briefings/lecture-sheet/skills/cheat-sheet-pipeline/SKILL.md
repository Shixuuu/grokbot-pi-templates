---
name: cheat-sheet-pipeline
description: "Use whenever running or repairing the YouTube to cheat sheet pipeline (ingest through verify)."
---

# Cheat sheet pipeline

Run alone, in order. Stack root: `/workspace/cheat-sheet/`.
Never use em dashes in any user-facing text, captions, or summaries.

If `CORRECTNESS.md` or `VERIFY_VISUAL.md` are missing under the stack root, write them from the Embedded copies at the bottom of this skill before verify.

## Visual grammar (required)
- Single palette: `design-tokens.json` for Typst + Graphviz + matplotlib.
- Theme Graphviz structural diagrams (rounded navy/muted fills). No comic default colors. No leftover ML taxonomy defaults.
- Matplotlib: token rcParams. Prefer SVG embeds. PNG optional.
- `template.typ` cards `clip: true`. Hybrid prose → `text:` lines. Pure equations → math lines. Never centered math hybrids that spill.
- No AI image-gen for diagrams.

## Matrices and vectors (required)
- Concrete matrices/vectors in formulas, tables, and worked examples MUST be Typst math: `mat(1, 2; 3, 4)` or `mat(delim: "[", 1, 2; 3, 4)`.
- Column vector: `mat(1; 2; 3)` (not `[1,2,3]^T` as the only display).
- FORBIDDEN display forms: `[[1,2],[3,4]]`, ASCII bracket grids, comma-lists pretending to be matrices.
- Linear algebra sheets: at least two concrete numeric `mat(...)` displays from the lecture or `[extension]`.

## 1) INGEST to lecture.json (+ cache/)
- Prefer captions (yt-dlp / youtube-transcript-api). Whisper only if no captions.
- Record caption_quality, duration_sec, title, chapters when present.
- Playlist: only the given video unless asked.
- Flag ASR / board-math risk. Cache under `cache/`.

## 2) OUTLINE to outline.json
- page_target by meat: 1 thin; 2 normal; **3 to 4 required** for full courses / multi-hour with many units.
- Include figure_plan with FIRST-CLASS kinds (never plan `other` for domain plots).
- LA figure_plan when topics appear: `eigen_geometry`, `svd_blocks`, `singular_spectrum`, and `rank_k` and/or `storage_bars`.
- Kill bio/UI/banter.

## 3) DRAFT to sheet.json
- Typst-math for pure display math (including every `mat(...)`).
- Hybrid prose → `text:` lines only.
- Every claim timestamp-cited.
- Worked numericals from transcript OR `[extension]` with correct arithmetic; show the actual matrix with `mat(...)`.
- Sympy-check formulas/micros.
- figures[]: set `kind` to the real kind (`eigen_geometry`, `svd_blocks`, …), not `other`. Include renderer + spec.
- No em dashes.

## 4) VIZ via assets/render_figures.py
- Graphviz for taxonomy/pipeline/tree (`spec.tree`).
- Matplotlib with token theme for plot kinds.
- After render: assert every `figures[].path` exists. Missing file = fail and re-render.
- No AI image-gen.

## 5) LAYOUT via typst
- `typst compile --root . template.typ out/sheet.pdf` then page PNGs.
- Heading + first block atomic.
- Last page fill under ~75% = densify/repack before ship.
- No gutter overflow.

## 6) VERIFY then deliver
Follow CORRECTNESS.md and VERIFY_VISUAL.md (create from Embedded sections below if missing).
AUTO-FAIL: orphan heading; empty/sparse last page; overflow; gutter bleed; monospace formulas; fake examples without `[extension]`; bad cites; filler; false math; **no `mat(...)` on LA sheet**; **`[[...]]` matrix prose**; **missing figure files**; **LA sheet without eigen_geometry + svd_blocks + singular_spectrum (or rank_k) kinds**.
On fail: fix yourself (max 2 loops) then deliver.
On pass: PDF/PNG paths + 3-line summary.

## Correctness (before layout)
Extract every formula, table math cell, worked_example answer/steps. Sympy-check. Theorem hypotheses required. If unverifiable, omit.

---

## Embedded CORRECTNESS.md

Copy this file to `/workspace/cheat-sheet/CORRECTNESS.md` when missing:

```
# Cheat sheet correctness gate (mandatory)

A shipped sheet must be **100% mathematically correct**. Soft / "mostly right" is a fail.

## Before `typst compile`

1. Extract every `type: formula` string, every formula cell in tables, every worked_example answer/steps.
2. Sympy-check (or hand-proof for theorem statements):
   - all numerical answers
   - trig table entries
   - algebraic simplifications in steps
3. Theorem boxes must include the hypotheses students need to apply them safely (L'H, MVT, IVT, EVT, FTC continuity).
4. If ASR conflicts with algebra, keep the **true** formula; never copy a wrong caption.
5. If you cannot verify → **omit**, do not guess.

## Matrix / vector display (Linear Algebra)

Concrete matrices and vectors in `formula`, `table`, or `worked_example` **must** use Typst math `mat(...)` (rows separated by `;`), e.g. `mat(1, 2; 3, 4)` or `mat(delim: "[", 1, 2; 3, 4)`.

- Column vectors: `mat(1; 2; 3)`, not `[1,2,3]^T` as the only display form for a vector object.
- Prose / ASCII-only forms such as `[[1,-2],[0,0]]`, bracket comma-lists, or `[1,2]^T` text where a matrix/vector object is shown → **FAIL** (see `VERIFY_VISUAL.md`).

Prefer real display math lines. Do not wrap entire matrix formulas in `text:` (that renders as italic prose).

## Verify auto-fail

- any false formula
- any wrong micro arithmetic
- any wrong trig table value
- invented numbers without `[extension]` + correct math
- cite on a refuse-example moment
- concrete matrix/vector shown as `[[...]]`, ASCII brackets-only, or comma lists instead of `mat(...)`
- LA eigen/SVD/image sheet missing required `mat(...)` displays or first-class LA figure kinds / files (see `VERIFY_VISUAL.md`)
- missing figure file path referenced by the sheet
- last page content fill under ~75%
- em dashes (use commas, colons, or parentheses)

Also run the visual checklist in `VERIFY_VISUAL.md` before ship.
```

## Embedded VERIFY_VISUAL.md

Copy this file to `/workspace/cheat-sheet/VERIFY_VISUAL.md` when missing:

```
# Visual / scaffold verify checklist (AUTO-FAIL)

Run after draft + viz + layout. Any rule below is an automatic fail. No soft pass.

## Typography / punctuation

- Em dash characters (Unicode U+2014, or `--` used as an em dash) anywhere in sheet body → **FAIL**. Use commas, colons, or parentheses.

## Matrix and vector display

Scan every `formula`, `table` cell, and `worked_example` (givens / steps / answer):

- Any concrete matrix or vector shown as `[[...]]`, ASCII brackets-only, or bare comma lists that should be a matrix → **FAIL**.
- Must use Typst math `mat(...)` with rows separated by `;`, e.g. `mat(1, 2; 3, 4)` or `mat(delim: "[", 1, 2; 3, 4)`.
- Column vectors must be `mat(1; 2; 3)`, not `[1,2,3]^T` as the only form when displaying a vector object.
- Entire matrix/vector formulas wrapped in `text:` (italic prose) instead of display math → **FAIL**.

## Linear Algebra topic pack (eigen / SVD / image)

When the lecture is eigen, SVD, or image-compression LA:

1. Sheet **MUST** include at least **2** real `mat(...)` displays of concrete numbers from the lecture or clearly marked `[extension]`.
2. Sheet **MUST** include first-class figure kinds covering:
   - eigen geometry (`eigen_geometry`)
   - SVD factorization (`svd_blocks`)
   - singular spectrum **or** rank-k / storage (`singular_spectrum`, `rank_k`, `storage_bars`)
3. Those figures must use the **real** `kind` values above, **not** `kind: "other"` with only `spec.plot_type`.
4. Every referenced `figures[].path` must exist on disk after viz. Missing file path → **FAIL**.
5. Domain graphs under-delivered (no real LA kinds / no `mat(...)`) → **FAIL**.

## Figures (all topics)

- Missing figure file for a referenced `figure_id` / `path` → **FAIL**.
- Template should show a visible **FAIL** placeholder when the image path is absent (not a silent blank).
- Prefer SVG paths under `assets/`.

## Density / last page

- Last page content-row fill under **~75%** → **FAIL** (near-empty trailing page).
- Prefer 1–2 filled pages; do not ship a sparse orphan page.

## Cross-check

Math correctness still gated by `CORRECTNESS.md` (100% true formulas; omit if unverified).
```
