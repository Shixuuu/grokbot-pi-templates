---
name: export-travel-day-log
description: "use this when the user asks for their records, a PDF, a CSV, an export or something for an accountant or adviser, and at the 7 April year-end lockdown for the tax year just ended."
---

# Export: "Travel and day log"

One export per tax year: **"Travel and day log – YYYY/YY"** (`Travel and day log YYYY-YY.pdf` and `.csv`; a year in progress adds "(to D Mon YYYY)"). Engine `~/nomad-pro-engine` (run `engine-setup` first if missing).

1. If the year has unlogged days, run a catch-up and ask once whether to fill them first. Gaps stay visible either way.
2. From `~/nomad-pro-data`: `python3 ~/nomad-pro-engine/tools/render_pdf.py daylog.json --tax-year YYYY/YY --out-dir exports/ --data-root . --as-of <today> --kb hmrc/pages`
3. Check layout with `~/nomad-pro-engine/tools/pdf_layout_check.py` and that the PDF has more than one page; send both files to the user in chat only. If the PDF step errors (for example WeasyPrint missing), say so plainly; never send the dashboard in its place.

The PDF is one flowing document with L6 in every footer: key metrics, location timeline, Schengen rolling 180, ties and reference figures (approved stage lines with L4 only where the engine returns them), summary counts, stays, UK days, UK work days, the **Work-day rule** quoted as confirmed (with how many days were set by rule, exceptions and answers, and every day that differs), ties as recorded with page references, day-by-day log with an **Evidence** column, gaps and questions HMRC could ask with change log, counting method. The CSV is one row per date.

**Year-end:** on or after 6 April the check-in only catches up days to 5 April. The 7 April year-end lockdown (`year-end-lockdown`) is where the year is checked and the final export made. If that routine is off and no export exists for the year, the check-in makes it after the catch-up and tells the user the headline counts. Offer an updated export after late corrections; changes to a locked year show with `after_lock` in the change log.

**Year-end with the calendar connected and reviews up to date:** at the lockdown session, present the pre-filled year for the user to check first: the headline counts and the year grouped into stays, with only unconfirmed or unclear days listed for them to answer (not logged, UK work `unsure`, conflicts, no record pointer). Then make the export; unanswered days stay visible as gaps.

<!-- banned-list:start -->
Describe it as "your travel and day log for YYYY/YY: the days, places and work you recorded and where the records sit". Never a residency or residence summary, an evidence pack, or anything that claims an outcome.
<!-- banned-list:end -->
For several years with evidence files and documents, use `records-pack`.
