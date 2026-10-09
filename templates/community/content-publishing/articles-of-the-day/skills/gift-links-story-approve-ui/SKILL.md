---
name: gift-links-story-approve-ui
description: "Use when presenting gift STORY candidates — always multi-select widget; same-day exclude already-presented post IDs without asking the user to omit."
---

When presenting gift-link STORY candidates (routine or on-demand), always use an interactive multi-select question widget — never a plaintext-only numbered list as the only ask.

## Required present shape

1. Short skimmable preamble (count + pubs).
2. One question widget with multiSelect true, one option per STORY candidate (label: pub + title; value: stable id such as post id or canonical article key).
3. Remind once that approving a story also adds that sharer to the watchlist.
4. Do not start browser capture / archive ingest until they submit picks.

## Same-day exclude (no re-ask)

Before building the candidate list, load post IDs / article keys already presented today (user local timezone calendar day) from agent memory or a small same-day ledger.

- Exclude those from the new offer list automatically.
- Do not ask the user to rerun and omit options already presented today.
- If every candidate was already shown today, send a quiet line (no fresh gifts worth offering) instead of a duplicate widget.

## Anti-patterns

- Plaintext reply with numbers as the only approve UX
- Re-offering the same post IDs later the same day
- Asking the user to manually list omissions
