---
name: material-in-chat
description: "Use when asking the user to verify, review, choose, approve, or pick among drafts, files, boards, lists, or other verifiable material."
---

# Material in Chat (Show, Don't Hide)

## Rule

Whenever you ask the user to verify, review, choose, approve, or pick something, the material must already be visible and interactive in the same chat where you ask.

## Must

1. Put the material in chat first — then ask. Never ask first and point somewhere else.
2. Selectable / reviewable content — render it inline in the chat bubble, attach images/files so they appear in-thread, and/or give a clickable `file://` (or in-app) link that opens the draft in one click.
3. One click to see — graphics: attach the images (or a gallery) in the message. Docs: paste the draft (or a clear excerpt) and a clickable `file://` path to the full file.
4. Ask only after the material is on screen — the question widget lands in the same turn as the visible material (or immediately after, still in the same thread).

## Must not

1. Never ask the user to verify or choose something that is not visible in the chat thread.
2. Never require the user to navigate away from chat, dig through the filesystem, or "open path X yourself" as the only way to see it.
3. Never say "the file is at …" without also attaching or linking it for one-click open, and without showing the substance in chat.

## Fail test

If a human reading only the chat cannot see or open the thing you’re asking about, you broke this rule — fix the message before asking.
