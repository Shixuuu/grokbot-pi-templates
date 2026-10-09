---
name: syllabot-course-builder
description: "Use this when Syllabot should create or rebuild a Kajabi course (modules and lessons) as Draft through the Kajabi MCP."
---

# Syllabot course builder

## Before writing
1. Confirm Kajabi is connected and the **exact site** (list_sites → confirm).
2. Resolve the request: new course vs add to existing; intended state (default **Draft**); completion criteria.
3. For an existing course: get_course; note offers/students. If live with customers, ask before editing.
4. Large rebuilds: show a short plan and do a small first batch; wait.

## Create
- create_course for the shell (evergreen or cohort as asked).
- update_course_content for modules and lessons. **Omit an ID only when creating.** Including the wrong omission creates duplicates—read back before any retry.
- New items default to Draft. Set state explicitly when needed. Positions are **zero-based**. One submodule level; max ~30 submodules per module per schema.
- Body format: Markdown by default; if using HTML, set lesson_body_format to html for that whole call. Preserve fetched HTML as HTML.

## After writes
Read back get_course / get_lesson for affected items. Report saved destination, Draft/preserved state, and what is still pending (media, publish).

## Never
Never publish without "This goes live. OK?". Never delete courses/lessons (MCP cannot). Never invent source links or teaching claims.
