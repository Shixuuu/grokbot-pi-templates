---
name: ghost-diff
description: "Use when a second Grok/xAI export arrives, or the owner asks what changed since last GrandBot ingest — produce DIFF.md and a changelog delta without rewriting the whole graph."
---

# Ghost Diff

Use when the owner drops a second (or later) Grok/xAI export, asks what changed since last ingest, wants a versioned history, or says "diff my archive."

## Preconditions

- A prior ingest exists under grandbot/ (normalized + CHANGELOG).
- New file is an official export zip or prod-grok-backend.json — never scrape.

## Steps

1. Ingest the new export as Stage 0–1 (hash, normalize). Do not smash MEMORY_GRAPH; treat as a delta.
2. Compare to the previous normalized snapshot:
   - New conversations (id/title/date)
   - Gone / missing (deleted or not in this export — say "absent from this file," not "deleted forever" unless clear)
   - Grown threads (message_count up)
   - Quiet projects (no new turns since last ingest)
3. Write public/DIFF.md with:
   - Ingest A → Ingest B dates + hashes
   - Opened loops that closed
   - New open loops
   - Decisions with title + date evidence
   - Three "you forgot you asked for this" items (recurring asks with no ship)
4. Append CHANGELOG.md with one entry: counts added/removed/changed.
5. Show the Count delta first (conversations +/−, date range), then DIFF highlights. Wait for orders before regenerating full ORG_BRIEF unless asked.

## Rules

- Evidence over vibes. Every claim points at a conversation title + date.
- Leave personal identifiers out of anything leaving private/.
- If no prior ingest, say so and run a normal first ingest instead.
