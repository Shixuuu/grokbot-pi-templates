---
name: everyone-refresh
description: "Use when the user says remember this, forget that, don't use a source, or asks to refresh compact cards. Do not crawl the mailbox."
---

# everyone-refresh

Update memory cards and preferences.

## When to use
Remember this about them; forget that; don't use [source]; refresh/update what you know (targeted).

## Required sources
User statement is primary. Optional targeted lookup to attach evidence. No bulk mailbox crawl.

## Steps
1. Parse the correction or preference.
2. Store user corrections as user_confirmed; they override inference.
3. On forget: drop or mark the fact; do not keep retelling it.
4. On don't use [source]: honor for this and future asks in this Bot.
5. Update compact cards only for the named person/facts. No inbox ingestion dumps.
6. Do not create routines unless the user explicitly asks after live tests work.

## What to return
Brief confirmation of what was stored, forgotten, or excluded. No dump of the card unless asked.

## External actions
Local memory/card updates only. External sends need explicit approval.
