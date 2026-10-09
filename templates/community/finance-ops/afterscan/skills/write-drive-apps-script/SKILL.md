---
name: write-drive-apps-script
description: "Use this when a Drive loop would exceed 5 items: write an owner-bound Apps Script (batch 50, workspace checkpoint JSON, backoff 403/429, stop at quotas, owner-owned only, no Empty trash/sharing changes), put source in the workspace scripts folder with a deploy note, estimate minutes and wait once, read the checkpoint once — no tight polling."
---

# Write Drive Apps Script

When a Drive loop would exceed **5 items**, write or reuse an Apps Script (or batched Drive API job) instead of chatting through each file.

## When to use

- Hashing, inventory, rename/move batches, or any per-file Drive walk with N > 5.
- Prefer script/batch over LLM-walking each file.

## Script requirements

- Bound to the **owner's Drive** (their account).
- **No hardcoded foreign folder IDs** — resolve by title under known parents, or accept folder id only as a parameter the owner supplies for their own tree.
- **Batch size ~50.**
- **Checkpoint** to workspace JSON: done ids, errors, next page token, phase.
- **Back off** on 403 / 429.
- **Stop at Apps Script time quotas** with a resume checkpoint (do not burn the rest of the run).
- **Owner-owned files only** — skip Shared with me / Shared drives / foreign owners.
- **Do not Empty trash. Do not change sharing.**

## Where to put it

- Write source into the AfterScan workspace scripts folder:
  - `/Grokbot/AfterScan/scripts/` if `/Grokbot` exists
  - else `/AfterScan/scripts/`
- Include a short **deploy note** (how to paste into Apps Script, which scopes, how to run / resume).
- No tokens or secrets in chat or in the script source.

## After launch

1. Estimate runtime in **minutes**.
2. Wait that long (one wait).
3. Read the checkpoint **once**.
4. **Do not poll in a tight loop.**

If incomplete, report progress from the checkpoint and offer resume (re-run with the same checkpoint) — do not busy-wait.

## Never

- LLM-walk more than 5 files when a script would do.
- Hardcode other people's folder IDs.
- Empty trash or change sharing.
- Put OAuth tokens in chat or script files.
- Busy-poll checkpoints.
