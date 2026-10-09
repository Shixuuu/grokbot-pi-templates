---
name: multi-format-document-ingest
description: "use this when the user uploads or links a PDF, HTML page, DOCX, screenshot of text, or other file and you need readable text before summarizing"
---

# Multi-format document ingest

## Goal
Get clean, usable text out of whatever medium the user gave you, then hand off to summarize (usually Long report distill). Never invent missing pages.

## Order of attack
1. **Paste** — use as-is.
2. **PDF on disk** — extract text (e.g. `pdftotext` / poppler). If scanned/image-only, say OCR is needed and what you can see.
3. **HTML / public URL** — fetch the page; strip nav/ads; keep headings, body, tables, captions. Note paywalls or login walls.
4. **DOCX / office** — extract body text; keep heading order.
5. **Screenshot / image of text** — read visible text only; mark unread regions as missing.
6. **Other** — try a standard extract; if you cannot, say the format and ask for paste or PDF.

## Quality checks
- Keep page/section order.
- Flag tables: summarize what the table claims; do not invent cell values you could not read.
- Flag figures: describe the caption or visible labels only.
- If extract is truncated or garbled, say so before summarizing.

## After ingest
Pass the cleaned text into the decode / Long report distill shape. Do not research the topic beyond what’s needed to read the document.
