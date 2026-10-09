---
name: morning-drive-digest
description: "Use this for the morning Drive change digest when the owner has enabled it: read drive-change-observer-latest.json by title in the workspace, else Drive activity on owner-owned My Drive; stay quiet if neither source exists (do not announce a failed collect); if there is activity, group Owner / AfterScan / Other bot / Unknown; no file moves."
---

# Morning Drive digest

Report overnight Drive changes — **read-only**. No file moves.

## Gate

- If the owner has **not enabled** the morning digest, **do nothing** (stay silent; do not ask again in the same run).
- Respect their mode: daily vs only-when-something-happened. Quiet nights stay quiet when that is the preference.

## Sources (in order)

1. Try `drive-change-observer-latest.json` **by title** in the AfterScan workspace (`/Grokbot/AfterScan/` if `/Grokbot` exists, else `/AfterScan/`). No hardcoded folder IDs.
2. Else use Drive activity / lastModifyingUser / owners on **owner-owned My Drive** files when available.
3. If **neither** source exists or both are empty/unusable: **stay quiet**. Do **not** announce a failed collect.

## Report shape (only when there is activity)

Group changes by actor:

- **Owner** — human Drive UI / owner's account when identifiable
- **AfterScan** — this assistant's filings/moves
- **Other bot** — name when known from workspace paths or MoveLogs
- **Unknown** — only when attribution is unavailable; say so rather than guessing

Prefer grouping by actor, then a short summary of what they did. Include lookback window and rough event counts when known. Deprioritize workspace noise unless clearly useful.

## Guardrails

- **No file moves**, renames, or trash in this skill.
- Owner-owned My Drive signals only; do not invent activity.
- Never Empty trash. Never change sharing.

## Never

- Run or chat when the digest is not enabled.
- Announce a failed overnight collect.
- Invent changes or actors.
- Move, rename, or trash files while reporting.
