---
name: grok-bot-usage-attribution
description: "Use this when attributing Cursor Usage CSV rows to individual Grok Bots vs the editor, or when checking whether a per-bot estimate is uniquely classified at 95%+"
---

Cursor's Usage CSV does not name Grok Bots. Cloud-agent rows already have a Cloud Agent ID; leave those out of this join. Untagged grok/composer/auto rows mix Grok Bots and editor Grok. Attribute those with a two-pass timestamp join against each bot's local clocks.

This is a partition of untagged Grok tokens (one bot XOR editor XOR overlap). It is not a Cursor bill and not 95% unique per bot.

Inputs

1. Usage CSV from cursor.com/dashboard/spending (hard-refresh the page before quoting dashboard bars). Columns used: Date, Cloud Agent ID, Model, token fields, Cost.
2. Each Grok Bot folder under the agents directory:
   - store.db table transcript_entries with kind: spend-initiation (agentId, timestampMs). These are the primary clocks.
   - audit.jsonl timestamps as fallback clocks for bots that never stamp spend-init (MCP-only or sparse inits).
3. The Grok Bot weekly window (dashboard resets date). Only CSV rows inside that window.

Two-pass join (locked rule)

Do not search windows to maximize unique coverage. Lock these first:

- Pass 1 window: plus or minus 90 seconds around each spend-init.
- Pass 2 window: plus or minus 12 seconds around leftover fallback clocks.
- CSV row model filter: grok / composer / auto, no Cloud Agent ID.
- A row matches a bot if its Date is inside that bot's window.

Pass 1. Match untagged grok rows to spend-init clocks. Keep a row only if exactly one bot hits it.

Pass 2. Take unmatched leftovers. Match them to bots that have no spend-init this week, using audit/transcript clocks. Keep a row only if exactly one of those bots hits it.

Buckets

- Unique: exactly one bot.
- Editor / unmatched: no bot in either pass. Label it editor, but say that MCP-only bots with no nearby clock can hide here.
- Overlap: two or more bots. Do not split this into per-bot shares.

95% bar

Report three percents of the untagged grok pool: unique (one bot), unique + editor (exclusive partition), overlap.

The shareable claim is unique + editor at 95% or more, and overlap is the leak. Unique-only will usually sit well below 95%. Do not advertise per-bot billing at 95%.

If overlap is above about 5%, tighten windows (do not widen them to fish unique). Prefer the locked 90s/12s pair; a 90 to 120s / 12 to 30s band should stay in the same neighborhood.

What to publish

- Cloud-agent tokens from CSV tags (those are certain).
- Other Models from CSV tags (those are certain).
- Untagged grok: unique per bot, plus editor, plus overlap.
- Caveats in the same breath: leftover editor may include unclocked bot work; bots with zero spend-init will be under-counted if their audits do not sit on grok CSV timestamps.

Do not

- Invent token counts.
- Treat a first screenshot of Spending as current; hard-refresh first.
- Scale from audit-event counts alone and call it 95%. That is a prior, weaker estimate.
- Put overlap tokens onto a named bot.
