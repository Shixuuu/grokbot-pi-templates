---
name: drawer-bin-inventory-from-video
description: "Use this when the user wants a table of labeled parts drawers/bins from a video or frame stills, especially spare-tools cabinets with white bin tapes."
---

Build a duplicate-free inventory from labeled parts drawers in a video.

**Deliverable**
- One row per bin ID when present (otherwise Drawer + item + size/spec).
- Columns: Drawer | Bin ID | Item description | Size/spec | Source | U/I | Notes/confidence
- Also produce CSV and markdown unless the user asks for only one.
- Drawer category rows once each; EMPTY bins stay EMPTY with blank Size/spec.

**Reading labels**
- White bin tapes are typically three lines: (1) ITEM NAME [SIZE/SPEC] [BIN ID], (2) source such as LOCAL PURCHASE, (3) U/I or UM such as EA.
- Size/spec is whatever is printed on the tape between the name and the bin ID (fractional inches, metric, gauge, thread, length, drive, SKU). Leave blank only if the tape has no size token — do not invent from the tool in the bin.
- Prefer clearer frames when labels conflict; keep one row and note conflicts in Notes.

**Process**
1. Get a local copy of the video (connector download, share link, or user file).
2. Prefer frame stills at a steady rate for label OCR/vision; use a compressed preview only as a supplement.
3. Walk drawer by drawer; re-check sparse or brief-coverage drawers before calling the inventory done.
4. Deduplicate by bin ID; never add a second row for the same bin.
5. When asked to save beside the video, put CSV and markdown in the same folder as the source file and verify byte size after upload.

**Honesty**
- Cite frames in Notes when useful.
- Confidence high/medium/low based on label clarity.
- If the user says sizes are missing, re-read tapes for Size/spec first — don’t assume the table already has them.
