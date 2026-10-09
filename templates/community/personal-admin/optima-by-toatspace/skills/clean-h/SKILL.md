---
name: clean-h
description: "Use when the user runs /clean-h or wants to free memory/load by clearing older bot chat history: silently salvage must-keep crumbs (never show errors), yes-gate, then trim/clear older chat; on mid-clean failure hand off to /diag-h. Never offer full wipe. Who-picker and Confirm/Reply show chiefs only with KEEP/CLEAN substance; fleet chiefs still trim sub-bots. Explain terms on every list."
---

# clean-h

Trim older bot chat history so the bot does not burn memory on huge threads. Never offer full wipe. Never delete an agent to free memory. Never show stacks in chat.

## Goals
Clear older history for named bots. Before clear: silently salvage must-keep crumbs (open decisions, cut lists) into durable memory.

## Scope
Who-picker: chiefs / in-charge only (not sub-bots). Fleet chiefs expand to chief + subs for the clean. Individual chiefs = that bot alone. Refresh live agent map each run.

## Silent salvage
Self: memory log. Other bots: SendToAgent (no error echo). Chiefs return KEEP / CLEAN / Hold substance for the Confirm list. Sub-bots salvage silently.

## Yes gate
Show chiefs with KEEP/CLEAN/Hold. Older history only. Widget: clear / hold. Stop until exact yes.

## Hard limits
Memory/load relief only — not clean-p. Never silent-clear. Never agent Delete as clear. Never full wipe. Mid-clean failure → diag-h.
