---
name: local-protocol-loader
description: "Use this when the owner provides an institutional document (renal dosing protocol, formulary or restriction list, antibiogram, order-set dosing table) that should outrank national sources, and when answering from one already loaded. It is a procedure: cell-by-cell verified CSV plus a notes file under /workspace/curbside/local/, then answers local-first with a label comparison."
---

# Local protocol loader (procedure)

A local document is only useful if every stored number matches the printed page. Extraction is fast; verification is the job.

## Load
1. **Screen first.** Confirm the owner may share it and that it has no patient information; if a page shows identifiers, stop (PHI rule). Do not copy personal names, signatures, employee numbers, or PDF author metadata anywhere.
2. **Set up** `/workspace/curbside/local/<slug>/` (slug such as `renal-dosing-2025`):
   - Keep `source.pdf` and record its `sha256sum` and page count (`pdfinfo`).
   - Extract text per page with `pdftotext -layout -f N -l N`.
   - Render every page with `pdftoppm -r 300 -png` into `renders/`.
   - A page with no text layer is scanned: transcribe it from the render, and flag every cell UNCERTAIN until double-checked.
   - For DOCX or XLSX, convert to PDF first (`soffice --headless --convert-to pdf`).
3. **Transcribe to `table.csv`,** one row per printed cell, with these columns: `row_id, page, drug, indication, mode (renal/hd/pd/crrt/other/note/restriction/susceptibility/formulary), column_header, measure (CrCl/eGFR/weight), band_low, band_high, low_incl, high_incl, cell_text, dosing_weight, flags, notes`.
   - `cell_text` is **verbatim**: symbols, footnote marks, and odd wording included.
   - Record bands exactly as printed. ">30" means low 30, exclusive. "15-29" means both ends inclusive. "<10" means high 10, exclusive.
4. **Verify every cell by eye** against the 300-dpi render. Crop and zoom small print (`pdftoppm -r 300 -f N -l N -x X -y Y -W W -H H`). Do two passes, row by row and then column by column, to catch shifted rows. Check merged headers and footnote attachment. Never "fix" a printed value.
   Flags: **UNCERTAIN** (can't read with certainty), **AMBIGUOUS** (legible, meaning unclear), **INCONSISTENT** (document contradicts itself), **PRINTED_GAP** (no band covers a range), **RESTRICTED / NON_FORMULARY** (only when printed), **REFER_OTHER** (points to another document), **LOW_N** (antibiogram isolates under the reporting threshold, usually 30).
5. **Band gaps and edges.** Sort each drug's bands and look for holes and overlaps:
   - "30-50" next to "51-90" leaves 50.5 uncovered.
   - "≤30" next to "≥30" overlaps at 30.
   - A header whose columns skip a range is a header gap.
   Record each one. Never pick a dose across a gap or at an ambiguous edge, and never round CrCl to fit unless the document says how.
6. **Write `notes.md`:** name, version or date as printed, approval date, date received, sha256, pages; scope (including what it refers to but doesn't contain); printed gaps; every UNCERTAIN and AMBIGUOUS cell verbatim with page; a verification line (date, cells checked, flag counts). Say "verified" only if you really checked every cell.
7. **Save a memory** with the slug, name, version, approval date, coverage, and the counts. Tell the owner the counts and ask them to resolve the UNCERTAIN cells.

## Answer
- **Local first.** Give the document name, version, approval date, page, and the cell text verbatim, with any flags. If the date is missing or more than 3 years old, ask the owner to confirm the document is current.
- **Then the label** (label-dosing-lookup) for the same drug and population, marked **DIFFERS FROM LABEL**, **SAME AS LABEL**, or **LABEL SILENT**. State the difference plainly, for example "local: 2 g q12h at CrCl 30-50; label: 2 g q24h at CrCl 30-60".
- **Report these as they are, never resolved:**
  - **BAND GAP:** the value falls in a gap; show both neighbouring rows verbatim.
  - **BAND-EDGE AMBIGUITY:** the value sits on an edge two bands could claim.
  - **LOCAL SILENT:** no entry for that population. Don't borrow another column's dose.
  - UNCERTAIN or AMBIGUOUS cells.
  Ask the owner about each one.
- **Never call a drug unrestricted or on formulary** unless the document says so. No flag, or no entry, means "this document does not address it."
- **Antibiograms** are percent susceptible for that site, period, and specimen type. Quote the date and isolate count, flag LOW_N, and use them for empiric choice only.
- **A newer version** replaces the old one. Rename the old folder to `<slug>-superseded` and update the memory.
