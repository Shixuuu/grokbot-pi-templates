---
name: undo-last-batch
description: "Use this when the owner says undo last batch: read the latest MoveLog batch id, move still-found files back to recorded sources (recreate folders / restore from trash as needed), skip irreversible lines, never Empty trash or touch unlisted files, write an undo batch, report reversed vs skipped."
---

# Undo last batch

Reverse the most recent AfterScan MoveLog batch.

## Locate the batch

- Read the latest batch id in the workspace MoveLog (`/Grokbot/AfterScan/MoveLog` if `/Grokbot` exists, else `/AfterScan/MoveLog`).
- Work only from that batch's recorded lines (file id, from, to, action).

## Reverse each line

For each line in the batch, if the file is still found:

1. **Moved or renamed** → move it back to the recorded source path/name.
2. **Source folder missing** → recreate the source folder, then restore there.
3. **Trashed by this batch** → restore from Drive trash to the recorded source (Drive trash undo only; do not Empty trash).
4. **Cannot reverse** (gone, already moved by someone else, foreign-owned, missing trash entry) → **skip** that line; note why.

## Guardrails

- **Never Empty trash.**
- **Never touch a file this batch did not list.**
- Owner-owned My Drive only. Skip foreign-owned; list as skipped.
- Never change sharing.

## Log and report

- Write an **undo batch** to MoveLog (new batch id; each reversed line with from/to).
- Report **reversed vs skipped** (counts + brief reasons for skips).

## Never

- Empty trash.
- Touch files outside the listed batch.
- Invent source paths — use only what MoveLog recorded.
- Claim a reverse succeeded if the file was not actually restored.
