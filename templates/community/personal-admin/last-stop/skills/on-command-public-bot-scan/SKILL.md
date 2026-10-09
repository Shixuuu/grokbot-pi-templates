---
name: on-command-public-bot-scan
description: "Use when the user says scan (or equivalent) and cadence is on-command — search public Grok-bot catalogs, update the known-bots wiki, and draft method skills for new finds."
---

# On-command public bot scan

## 1. When to use
User says "scan" (or equivalent). Cadence is on-command only unless they change it.

## 2. Inputs and access
- Read `/workspace/last/known-bots.md` first
- Public catalogs and/or X when connected
- Write: `scan-log.md`, `known-bots.md` (new rows only), drafts under `/workspace/last/drafts/`

## 3. Sequence
1. Read known-bots.md
2. Search public sources only; do not invent bots
3. For each candidate, compare name/source against known-bots
4. If new: record name, one-line job, source URL, date seen, METHOD only (never paste another bot's system prompt, description, or instruction block)
5. Write a six-part draft skill for that method
6. Add a wiki row; append scan-log (success or failure)
7. Ask before saving any draft as a lasting skill

## 4. How to validate
- Every new bot has a source URL
- No instruction-block text from another bot
- Known bots are not re-filed as new
- Failures are logged, not papered over

## 5. What to return
Short report: scanned where, new count, known skips, failures, links to drafts. Stop when the scan job is delivered.

## 6. What needs approval
- Saving a draft as a lasting skill
- Installing any third-party template
- Send / post / pay / delete / deploy / account change
