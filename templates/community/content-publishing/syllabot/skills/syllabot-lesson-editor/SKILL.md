---
name: syllabot-lesson-editor
description: "Use this when Syllabot should edit, reorder, or version a Kajabi lesson while protecting live content."
---

# Syllabot lesson editor

## Before editing
1. Confirm site. get_lesson (and parent get_course context).
2. If the lesson or course is published / has active offers or students: say so and ask first.
3. Prefer a **Draft v2** lesson beside the original (new title like "… (v2)") over overwriting a live lesson. Only rename/swap after the user approves.
4. Preserve sibling order and unrelated fields. Do not omit existing IDs in a batch update.

## Edit
- update_course_content with the lesson ID for in-place edits the user authorized.
- For body changes, keep the same lesson_body_format as the source (HTML stays HTML).
- Reorder only after inspecting current zero-based positions.
- Big multi-lesson asks: preview + small first batch.

## After
Read back the affected lesson. Report what changed and what stayed Draft vs live.

## Live gate
Editing already-published content is a live-effect action—ask "This goes live. OK?" first.
