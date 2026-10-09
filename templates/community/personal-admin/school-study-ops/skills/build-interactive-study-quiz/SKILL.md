---
name: build-interactive-study-quiz
description: "Use this when turning posted study guides or Classroom materials into a desktop HTML practice quiz (multiple choice, review tabs, diagram visuals) for a student."
---

# Build interactive study quiz (desktop HTML)

Turn posted quiz/test prep materials into a single self-contained HTML file the student opens in Chrome on a laptop/desktop.

## Inputs

- `{student}`: student first name for the header
- `{subject}` and `{unit-or-quiz-title}`
- `{quiz-date}` if known
- Source materials: study guide PDF/slides, Classroom classwork sheets that the guide references, teacher notes
- `{drive-folder}`: parent Drive folder for the finished HTML (optional)

## Source rules

1. Prefer **class-sourced** items: definitions, examples, and questions that appear in the study guide or linked Classroom work.
2. If the study guide lists a skill but Classroom PDFs do not define it, you may add **General practice** teaching examples — clearly labeled as teaching examples, not as class wording.
3. Do **not** invent quiz content that pretends to be from the teacher. Skip topics with no class definition.
4. Subject depth: Language Arts can be deeper (review tabs + MC). History and Science stay simpler. Math prep is often unclear — flag gaps instead of guessing the prep path.
5. If a study guide references completed Classroom classwork, include that material too.

## HTML shape

Build one file with:

1. **Home** — quiz date, topic list, how-to, warning that Drive preview will not run the quiz
2. **Review** — tabs for class-sourced topics first; separate tabs for labeled General practice
3. **Multiple Choice** — progress bar, immediate green/red feedback, short explanation, score summary + retry
4. Optional **diagram** visuals (SVG) when the guide asks for sentence diagrams or similar

Hardening:

- Guard DOM lookups so a missing element does not blank the page
- Prefer download + open in Chrome; do not rely on Google Drive preview

## Delivery

1. Save the HTML locally, smoke-check it opens
2. Upload the full file to `{drive-folder}` (if the Drive connector truncates large HTML bodies, use the browser file upload instead)
3. Hand the parent the Drive link **and** a direct download path
4. Do **not** email teachers, post in Classroom, or share with a co-parent until the parent names the exact send/share action

## Report back

- Question counts: class-sourced vs general practice
- Topics covered / topics skipped and why
- Drive link + reminder to download and open in Chrome
- Gaps (especially Math) flagged for the parent

## Never

- Invent teacher wording or fake scores
- Post, comment, or submit in Classroom
- Send or share outside the parent’s review without an explicit send/share verb
- Assume a Math prep path without Classroom evidence
