---
name: clean-h
description: "Use when the user runs /clean-h — clean bloated chat history. Atomic both ways; verify counts before done. Not for leftover rules (/clean-p). Chat errors (desync, mismatch, E0406, stalls) go to /diag-h."
---

# /clean-h

Clean bloated chat history: the transcript file, the chat screen store (`store.db`), and chat attachments.

Not for leftover rules. Use `/clean-p` for that.

If the chat is erroring (mismatch warning, desync, SAND-E0406, stalled turn), use [/diag-h](sand-workflow:diag-h) — ask how to fix; never force-resume an Abandoned bot.

## When you run this

1. Mode picker: all bots · one bot at a time · bots in batches of 5.
2. Bot picker (multi-select): **only** live bots from the clean-picker profile memory (plus Optima). Never stubs. Never dead/old bots. Optima does not create bots.
3. Do not start until mode and bots are chosen (unless already named).

## Default

1. Archive first.
2. Ask the owning bot what chat window is still needed.
3. Ask which attachments can clear.
4. Rewrite live chat to that window only (or clear all if none).
5. Clear attachments only as allowed.

## HARD — atomic both ways

In the **same** apply:
- Never trim the screen store without rewriting the transcript to the same keep-window.
- Never trim the transcript without updating the screen store.

Before saying done: verify and report **both** counts. If they disagree, fix — do not say success. Prefer prevent over explain.

If you find a prior desync: propose a transcript↔screen resync; still need a clear yes in this chat.

## Priority

Never priority-interrupt busy priority bots the user named. Queue clean asks behind their cycle.

## Optima’s own chat

After every `/clean-h`, also clear Optima’s own chat with a yes — transcript and screen store together, then verify counts.

## Steps

1. Map fat stores; split keep window vs the rest.
2. Owning-bot “got it” when it won’t stall them; then keep-window and attachments answer.
3. Propose in plain words; approval as soon as ready. Yes must come from this chat.
4. Wait for clear yes.
5. Archive; apply transcript + screen store to the same window; clear attachments as allowed.
6. Verify both counts; report both; only then say done. Never paste secrets. Never mention the user’s name, projects, or bots in published text.
