---
name: dashboard
description: "use this when the user asks for the dashboard, an overview, charts, a picture of their year or \"where do I stand\" in counts, and after onboarding and each export."
---

# Dashboard

Engine `~/nomad-pro-engine` (run `engine-setup` first if missing). From `~/nomad-pro-data`:
`python3 ~/nomad-pro-engine/tools/render_dashboard.py daylog.json dashboard.html --as-of <today> --kb hmrc/pages --data-root .`
It makes one self-contained, offline HTML file. Send it to the user only (optionally a screenshot).

What it shows, verdict-free: tax-year selector, "Recorded to {date}"; overview cards (UK midnights, UK work days >3 hours + unsure, days logged / not logged, top countries, Schengen days in the last 180, upcoming trips); a reference-figures strip ("HMRC's RDR3 uses these day counts: 16, 46, 91, 121, 183. Your UK midnights so far: X.", captioned "A count from your entries. It does not determine residence."); ties-test band with room and proximity; approved stage lines with L4 only where the engine returns them; log health and questions HMRC could ask; UK visits; ties inputs (your answer vs what your log shows); work days against 31 and 40 with the Work-day rule card; Schengen and stay-limit charts with L8; Day log with a clickable **Evidence** column; Records tab; L6 footer on every view.

The dashboard is not a substitute for the "Travel and day log" PDF (`export-travel-day-log`).

<!-- banned-list:start -->
Style: neutral palette (slate, stone, navy); no green/red good/bad; amber only for logging gaps and counts approaching a figure. No word on any surface says resident, non-resident (outside the approved stage sentence), safe, pass, fail, proof, compliant or anything similar.
<!-- banned-list:end -->
