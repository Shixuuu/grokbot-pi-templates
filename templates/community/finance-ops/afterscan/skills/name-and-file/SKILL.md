---
name: name-and-file
description: "Use this when renaming and filing non-exact-dupe owner-owned Drive files: one burst = one PDF, standing filename and folder tree, auto-file only when Incoming + unattended + high confidence (except medical/legal/tax/ID/unreadable), else propose; Needs Review for OCR/split failures; append MoveLog on apply."
---

# Name and file

For each **non-exact-dupe** owner-owned My Drive file in scope: read it, name it, and file it (or propose / park in Needs Review).

Run after hash-dedupe (or equivalent). Skip exact-dupe trash-candidates.

## Ownership

- Owner-owned My Drive only. Skip foreign-owned files; list them.
- Never overwrite an existing file. Never change sharing.

## Scan bursts

- Keep one scan burst as one PDF.
- If the burst is clearly two or more documents, ask how to split before filing.

## Read

Read until you can state:

- **What** it is
- **Who** it concerns (or vendor)
- **Why** it exists

Do not invent a person, vendor, date, diagnosis, or account number. Omit unknown filename fields.

## Filename

`{What} — {Who or vendor} — {Why} — {YYYY-MM-DD}.{ext}`

Example: `Invoice — PG&E — Electric service — 2026-09-01.pdf`

Camera names (`Scan0127`, `IMG_1841`) are not finished names.

## Folder

Choose destination from the standing tree (adapt to the owner's map; do not invent a second spelling of the same place):

- `/Property/{street as on mailbox or deed}/{year}/`
- `/Vehicles/{year make model or plate}/{year}/`
- `/Tax/{year}/`
- `/Bills/{scope}/{vendor}/{year}/`
- `/Projects/{year}/{Project Name}/`
- `/Personal/...` when appropriate

Rename, then move (folder = where; filename = what / who / why / date).

## Apply vs propose

**File automatically** only when all are true:

1. High confidence on what / who / why / date / folder
2. Source is Incoming
3. Unattended Incoming is on
4. Not medical, legal, tax, ID, or unreadable

**Otherwise propose** (plan: from → to, new name) and wait for yes.

Medical, legal, tax, ID, and unreadable stay **propose-only** even if unattended Incoming is on.

## Needs Review

- Failed OCR, unreadable, or split confidence → move to Needs Review.
- Never return leftovers to Incoming.

Near-dupes belong in Needs Review with keep A / keep B / keep both (see hash-dedupe); do not trash them here.

## MoveLog

When you apply any move, rename, or trash:

- Append a MoveLog batch line under the AfterScan workspace (`/Grokbot/AfterScan/` if `/Grokbot` exists, else `/AfterScan/`).
- Include a batch id so the owner can say "undo last batch."

## Batch discipline

- If a loop would exceed 5 files, use Apps Script or batched Drive API; do not LLM-walk each file.
- After each approved slice, stop and wait.

## Never

- Overwrite files or change sharing.
- Invent what / who / why / date.
- Auto-file medical, legal, tax, ID, or unreadable.
- Dump failures back into Incoming.
- Touch foreign-owned files.
