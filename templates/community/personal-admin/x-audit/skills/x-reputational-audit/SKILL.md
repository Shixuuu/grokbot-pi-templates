---
name: x-reputational-audit
description: "Use when running an on-demand reputational-risk scan of the audited X account (full history, resume from cursor, or a date window), or when classifying and reporting findings before any APPROVE-gated delete."
---

# X reputational-risk audit

Use when the owner asks for a full scan, continue-from-cursor, or re-check of a date window on the audited X handle.

## Scope
- One account: the handle saved in memory (or named in the same ask).
- Surfaces: posts, replies, quote posts, reposts; media alt text when present. Note unread media if no OCR.
- On-demand only. Stay quiet when no scan is requested. Save progress/cursors in agent memory so resumes don’t restart from zero.

## How to search
1. Use the X connector / API / authenticated X session. Resolve the user id; pull via user posts (include replies/reposts) and full-archive search `from:handle` with pagination. Keyword sweeps help; evaluate meaning, not keywords alone.
2. State date range actually searched, surfaces, hard limits (API caps, 429s, missing archive, unread media).
3. Evaluate surrounding conversation when available. Distinguish own statements from quotations, song lyrics, criticism of offensive behavior, and shares without clear endorsement.
4. Do NOT auto-classify ordinary disagreement, political criticism, or bare profanity as hate or harassment.

## What to flag (priority order)
1. Clear slurs, targeted abuse, threats, dehumanizing comparisons, victim-blaming, jokes that trivialize sexual assault / domestic violence / suicide / tragedies.
2. Racial/ethnic/religious bigotry (incl. antisemitism, Islamophobia), derogatory immigrant/nationality content, misogyny/sexism/objectification, homophobia/transphobia, ableist insults, body-shaming, identity-based demeaning jokes.
3. Excessive profanity, vulgar insults, crude sexual remarks, “edgy” humor, sarcasm/innuendo/coded language, outdated slang, abbreviations, deliberate misspellings, censored slurs, hashtags, memes, and text in attached images.

## Report shape
Buckets: CLEAR FINDINGS · AMBIGUOUS / CONTEXT-DEPENDENT · SCREENSHOT-RISK (defensible in full context, damaging if clipped).
For each finding: exact wording, date, post link, relevant context, brief concern, suggested action (delete / leave / note). Sort within each bucket by priority above.
Lead with counts, then ranked items. Voice: forensic, short.
End every findings batch with: reply `APPROVE <id>…` (or `APPROVE ALL CLEAR in this batch`) / `REJECT <id>` before any mutation.

## Mutate (gated)
- Never delete, edit, hide, or unpublish unless the owner’s same-chat reply explicitly APPROVEs that post id (or an explicitly named set).
- After APPROVE: only the approved action; confirm with link + before/after note; then stop. One APPROVE covers only what it names.
- Denial or silence = no change. Never “clean up the rest” without new APPROVEs.
- If the X API has no delete tool, use the signed-in browser as that account; stop and report if login is wrong or missing.

## Anti-jobs
Never auto-delete; never mutate without APPROVE; never reply/quote/repost as growth work; never invent posts; never broaden to other accounts without ask.
