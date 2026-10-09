---
name: kids-book-ready-to-publish-checklist
description: "Use this before making, laying out, calling \"ready\", or uploading any children's picture book to KDP, and before generating art for a new book (build recipe, edge and margin rules, character sheet, page-reuse rules)."
---

# Ready-to-publish checklist (show it filled in before saying a book is ready)
- [ ] The complete labeled review PDF (FRONT COVER, title page, copyright page, every interior page with its label and book page number, BACK COVER, in order) is built, checked, and delivered in chat BEFORE any KDP step, even if the owner never publishes.
- [ ] PREFLIGHT PASSES (mandatory, blocks any upload): run `python3 preflight_pdf.py interior.pdf 24` (script in the build playbook) and see RESULT: PASS. Zero blank or solid-color pages (a flat green, cream or white page is a failure), the LAST pages are real content (story, coloring, puzzles), page count and page size are right, and every page it lists as having white edges is deliberately white (coloring or activity pages). Then LOOK at the last 8 pages as images.
- [ ] Every story or art page is filled to the bleed with one full-bleed picture. Padding to reach 24 pages uses real extra pages (coloring and activity pages), never a flat fill or a blank.
- [ ] KDP Previewer last-pages check: open the Previewer, look at the last 8 pages, the page count matches the file, zero warnings.
- [ ] After submitting: verify the change really took (post-submit verification in the build playbook). A Submitted on date that did not change means nothing was submitted.
- [ ] Every page matches the book's character sheet (compare each page to the reference images).
- [ ] All text is at least 0.375 in inside the trim on every side, inside edge too (aim 0.5 in). Verify with a script and by eye. Full-bleed art makes automatic checkers flag pages, so also do the visual safe-box check.
- [ ] Page size is exactly what KDP wants for the trim (for 8.5x8.5 with bleed the interior is 8.625 wide x 8.75 tall; cover size comes from KDP's cover calculator for the page count and paper).
- [ ] Images are 300 dpi at print size or better; note any upscaled art honestly.
- [ ] No blank pages anywhere. No duplicated pages, page order matches the story.
- [ ] Spine and cover math checked; no spine text under 79 pages; barcode area clear.
- [ ] Fonts embedded, PDF flattened.
- [ ] Author name is identical everywhere and in KDP metadata; no "Published by" line.
- [ ] Lesson is clear and not a repeat of an earlier book's lesson.
- [ ] KDP Previewer shows zero issues (screenshot) before any submit.
Nothing is uploaded, priced, or published without the owner typing their approval phrase in chat.

# Art rules
1. Every page and the front cover is ONE square picture that fills the whole page. No frames, borders, green or blurry edges, stacked pictures, or pasted-on extensions. (Coloring and activity pages at the back are black line art on white by design.)
2. Use Grok Imagine in the browser at 1:1 (see the build playbook), not GenerateImage.
3. Bake the story text into the art. Never reword the author's text.
4. EDGE SAFETY: all text, lettering, faces and key characters sit at least 0.5 in inside the trim (KDP minimum 0.375). Ask Imagine to keep everything well inside, then verify with a drawn safe box.
5. Back cover: ONE full-bleed picture filling the whole back. Barcode reserve is a white 2.0 x 1.2 in box bottom-right, 0.25 in inside trim.

# Review packet rules
- Always send a LABELED preview: FRONT COVER, INSIDE title page, INSIDE copyright page, INSIDE pages 1..N, BACK COVER (plus a cover-wrap image).
- Check the preview yourself before sending; do not send pages with cut-off words.

# Character sheet (one per book)
Save reference images plus a standard prompt block: each character's look (colors, clothing, props, what they never wear), art style, and palette. For each new page, generate with the prompt block, then compare to the reference images. Note drift (glossy/3D look, extra hats, changed colors).

# Reuse rules
Keep approved pages as-is. Regenerate only pages that fail the checks above.

# KDP session flow
Use one browser session and keep a short status note (what step, what is uploaded) so a dead session does not lose work. Never type a password. If login or session fails, stop, leave the draft as it is, and tell the owner once in chat.
