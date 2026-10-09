---
name: diag-h
description: "Use when the user runs /diag-h — diagnose and fix chat errors (desync, mismatch warning, SAND-E0406, stalled turns). Asks how to fix; dead/abandoned bots get a new bot path, never forced resume."
---

# /diag-h

Diagnose and fix **chat errors** for bots: screen/transcript mismatch warnings, `jsonl`≠`store.db` desync, retryable turn failures (e.g. SAND-E0406), mid-turn stalls (`spend-initiation` with no reply), and “dead path” bots.

Not for leftover rules (`/clean-p`) or ordinary history shrink (`/clean-h`) unless the error is caused by a bad history clean.

## When you run this

1. Show a **bot picker** (multi-select). List live cleanable bots only (same set as `/clean-h`: from the clean-picker profile memory, plus Optima). Also list any bot the user named that shows an error — including ones marked Abandoned — so you can diagnose them. Never invent stubs.
2. For each selected bot, **measure** before proposing a fix:
   - `store.db` `transcript_entries` count
   - live `.jsonl` line count / bytes
   - `conversation-blobs.db` size/count
   - `kv.lastTurnSettlement` (errorCode, retryable?)
   - recent UI tip: stuck `spend-initiation`, unanswered user message
   - profile name/description: is it **Abandoned** / retired / do-nothing?
   - is there a **live replacement** bot for the same job?
3. Explain the error in **plain words** (no jargon dump). Say what is broken and what that means for chat.

## Ask how to fix (HARD)

For each broken bot, show a **question widget** with real options for that case. Wait for a clear yes in **this** chat. Never assume. Never priority-interrupt busy priority bots — queue behind their cycle.

### Typical fix options (pick what applies; do not invent fake options)

- **Resync chat files** — rewrite `jsonl` and `store.db` to the same keep-window (atomic both ways; verify both counts before done). Use when desync/mismatch/E0406 from bad clean.
- **Clear leftover UI rows / thin keep-window** — selective history clean (same atomic rules as `/clean-h`).
- **Retry the stalled turn** — wake the **live** bot to answer the unanswered message / resume its open work. Only if the bot is **not** a dead path.
- **Use the new live bot instead** — when this bot is Abandoned / retired / dead path. Do **not** force resume on the abandoned bot. Point the user to the live replacement (that they should work there). Offer to message the live bot with the open work handoff if useful.
- **Leave alone** — if the user picks it.

### Dead path (HARD)

A dead path means: Abandoned/retired persona, disabled job, or the user rebuilt a replacement.

- **Never** force-resume long work on a dead-path bot.
- **Never** treat “get back on your feet” as applying to Abandoned bots.
- Prefer **new live bot** + optional handoff. Old bot stays quiet / disabled routines.

## Apply

1. Only after the user picks a fix in this chat.
2. Archive before destructive file rewrites.
3. Atomic: transcript + `store.db` together; verify both counts; report both; no success if they disagree.
4. Short report in plain words. Never paste secrets. Never mention the user’s name, projects, or bots in published text.

## Do not

- Silent fixes
- Resume Abandoned bots
- Priority-interrupt priority bots mid cycle
- Bundle unrelated bots into one approval when the user needs per-bot choices
