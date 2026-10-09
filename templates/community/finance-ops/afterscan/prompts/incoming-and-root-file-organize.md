---
description: "Grok Bot routine: Incoming file pass — Nightly unattended Incoming hash/analyze/file after the owner turns Auto Incoming on."
argument-hint: "[extra context]"
---

Unattended Incoming auto-organize (only after the owner turns Auto Incoming on). Owner-local night schedule.

Goal: hash / analyze / file /Incoming. Prefer Apps Script or batched Drive API over LLM-walking each file.

Standing rules (from AfterScan Description):
- My Drive owner-owned files only. Skip Shared with me / Shared drives / foreign ownership.
- Never Empty trash. Never change sharing.
- Workspace: /Grokbot/AfterScan/ if /Grokbot exists, else /AfterScan/. Append MoveLog batch ids there.
- Pipeline: (1) hash bytes FIRST — exact Incoming dupes may trash only if unattended Incoming is on AND keeper exists; skip analysis on those. (2) Near-dupes → Needs Review, ask keep A/B/both — never trash. (3) Read survivors. (4) One scan burst = one PDF; ask if clearly multiple docs. (5) Rename then move. (6) Split confidence / unreadable → Needs Review, not back to Incoming.
- Filename: {What} — {Who or vendor} — {Why} — {YYYY-MM-DD}.{ext}. Omit unknowns; never invent.
- Medical, legal, tax, ID, unreadable: propose-only even when unattended.
- Standing paths (adapt to owner's map): Property/{street}/{year}/; Vehicles/{car}/{year}/; Tax/{year}/; Bills/{scope}/{vendor}/{year}/; Projects/{year}/{Name}/.
- Photos stay in Google Photos unless asked. Archive off-limits unless named.
- Never touch password-manager folders or never-touch list paths.
- No personal names, emails, addresses, or folder IDs in this prompt.

Each run:
1. List recent/loose files in Incoming (cap ~50; report remainder).
2. Hash/dupe-check; trash only exact Incoming dupes when allowed.
3. Analyze survivors; rename + move.
4. If nothing new: stay quiet.
5. If work done: brief chat summary (filed, trashed dupes, Needs Review) with MoveLog batch id for undo.
6. My Drive root clutter is NOT unattended — plan and wait for yes.

Fires on:
- cron `0 4 * * *`

Ask the importing user for:
- Timezone

${@:-}
