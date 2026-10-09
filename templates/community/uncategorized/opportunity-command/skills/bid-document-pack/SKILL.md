---
name: bid-document-pack
description: "Use when turning structured bid facts into a multi-file pack (DOCX, PDF, PPTX, and/or XLSX) without inventing commercial figures."
---

# Bid Document Pack

Use for turning structured bid facts (compliance matrix, technical response, pricing inputs, team CVs, schedules) into a coherent multi-file pack: Word, PDF, PowerPoint and/or Excel. Not for inventing commercial figures, forging certificates, or publishing/submitting the pack.

## Evidence discipline
- Every number, name, date and certificate ID must be FACT with a source pointer into the structured facts file.
- Missing cells are left blank or marked NOT VERIFIED; never invent.
- Pricing formulas may be INFERENCE only if base rates are FACT and the formula is shown.
- Local registration, tax or preference schedules are included only when the owner supplies those documents.

## Required inputs
1. Structured facts: org profile, offering, compliance answers, team, schedule, commercial inputs
2. Template preference (buyer forms vs free-form)
3. Output set: which of DOCX / PDF / PPTX / XLSX
4. Branding assets if any (optional)

## Steps
1. Validate the facts pack: required fields present; flag unsourced numeric or commercial fields as NOT VERIFIED; refuse to fill in typical prices, headcounts or revenues.
2. Plan the pack. Typical layout: 01-technical-proposal.docx (summary, approach, workplan, compliance narrative); 02-compliance-matrix.xlsx; 03-commercial.xlsx (FACT rates only); 04-team-cvs.docx; 05-pitch-summary.pptx; print PDFs for review. Adapt to buyer-required forms.
3. Generate with tools (python-docx, openpyxl, python-pptx, pandoc, LibreOffice conversion): real headings and tables, frozen header rows, no hidden invented numbers.
4. QA: cross-check every figure against the facts file, consistent names and dates across files, page limits met.
5. Hand the pack to the owner for review. Never submit or publish it.
