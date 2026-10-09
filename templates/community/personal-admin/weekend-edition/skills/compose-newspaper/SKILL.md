---
name: compose-newspaper
description: "use this when composing the approved weekend newspaper letter PDF (masthead, weather, world/nation briefs, meat) — not for printing"
---

# Compose newspaper

Build one letter-size weekend newspaper PDF after a slate is approved. Do not print.

## Preconditions

- Pipeline present: if `/workspace/weekend-edition/compose_newspaper.py` is missing, run [scaffold-weekend-edition](sand-workflow:scaffold-weekend-edition) first.
- `/workspace/weekend-edition/config.json` exists (else run SETUP.md intake first).
- An approved Friday slate exists for this week (or an explicit test run).
- If no approval this week: stop. Do not invent articles or reuse last week’s paper.

## Steps

1. Read config.json and extras.json. Load `/workspace/weekend-edition/published-log.json` when present; skip or flag approved items whose canonical URL is already logged (do not silently reprint past meat).
2. Run find-the-meat for each approved slate item (or use sources already prepared). Video-primary items use transcript → summary (see find-the-meat).
3. Refresh extras as configured (weather / world / US / sports / sections / local). Skip any the config turns off.
4. Compose with `/workspace/weekend-edition/compose_newspaper.py` (story order from approved slate or sources on disk; section kickers from each source’s `SECTION:` header). The composer’s `ensure_paragraph_breaks` invents blank-line breaks for long walls of text (more than 4 sentences **or** ~400 chars without a blank line; groups of ~2–4 sentences) while keeping author breaks.
5. Write `/workspace/weekend-edition/out/YYYY-MM-DD-weekend-edition.pdf` in the paper’s timezone.
6. After a successful **real** (non-test) Saturday compose:
   - Append each story’s canonical URL, title, date, and Vol/issue to `/workspace/weekend-edition/published-log.json` (use `compose_newspaper.py --record-published`, or append the same shape by hand). Never invent URLs/titles.
   - Increment `issue_number` in config.json and save.
7. Tell the reader the PDF path and page count. Do not print unless they say print.

## Masthead / folio (standing design)

- `paper_name` is the main nameplate (NYT-style blackletter when `fonts/UnifrakturMaguntia-Book.ttf` is present).
- `edition_name` (default `Weekend Edition`) sits underneath the nameplate, WSJ-style — not as the main title.
- Dateline: `Vol. {volume}, No. {issue_number}` plus kicker/place. Never print “personal newspaper.”
- Leave printable top margin above the nameplate.
- Page 1: masthead only (no page number). Pages 2+: exactly one centered folio page number — never double-stamp.
- “In this issue” lines fill the column (measure type; do not hard-truncate).

## Images

Only claim-bearing images, B&W-prepped. Skip headshots, quote-cards, video thumbs.

## Rules

- Never print the tweet/repost shell when an X Article or outbound article exists.
- Print is a separate explicit ask (print-local).
- Reader-specific names, zips, and handles come only from config — never hardcode them in this skill.
