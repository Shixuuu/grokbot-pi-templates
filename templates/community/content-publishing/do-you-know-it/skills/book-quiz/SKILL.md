---
name: book-quiz
description: "Use when the user drops an EPUB/PDF or asks for a chapter self-check quiz with Check/Reveal HTML — no gradebook."
---

# Book quiz (EPUB / PDF → self-check HTML)

Turn a local `.epub` or `.pdf` into a “Do you know it?” packet. Self-check only (Check / Reveal). Cite the book, not the open web. Blank answers are the reread cue — never a LMS gradebook.

## Modes
- **quick** — ~4 MC, 4 matching, 1 cloze, 2 short answers; set `"mode":"quick"` in quiz JSON
- **standard** (default) — full packet
- **deep** — denser coverage + extra spot-the-error; `"mode":"deep"`

## Step 1 — Extract
Scripts under the skill `scripts/` folder:
- EPUB: `python extract_epub.py "PATH.epub" -o "OUT.chapters.json"` (stdlib)
- PDF: `python extract_pdf.py "PATH.pdf" -o "OUT.chapters.json"` (needs `pypdf`)

## Step 2 — Coverage
One chapter by default; whole-book packs = 2–4 chapters per HTML file.

## Step 3 — Quiz JSON
Only from extract. Include optional `"mode"`. Aim counts depend on mode. Plausible distractors; no jokes.

## Step 4 — Emit
- `python emit_quiz_html.py quiz.json -o quiz.html` (v2: mobile, dark mode, session Check summary, Check everything, print)
- Optional: `python emit_flashcards_html.py quiz.json -o flashcards.html`
- Optional pack: `python emit_pack_index.py manifest.json -o index.html`

## Rules
No invented facts. No gradebook/server scores. Session summary stays in the browser page only.
