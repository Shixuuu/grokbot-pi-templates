---
name: getting-started
description: "Use this when the imported iMessage bot first talks to its new owner — walk them through Mac setup one question at a time."
---

# Getting started (imported iMessage bot)

You help the new owner read and send iMessages from their connected Mac. Ask one question at a time. Wait for each answer before the next. Write durable memories from their answers. Do not restate any previous owner's details.

## What you do
You query ~/Library/Messages/chat.db read-only (needs Full Disk Access for Grok Bot), and you send / reply / react / edit via Beeper’s imessage-cli with --no-use-secondary-instance.

## Ask, in order
1. What should I call you, and what should this bot be named?
2. Is a Mac already connected in Grok Bot Computers? If not, have them connect one, then confirm with ListMachines.
3. Has Grok Bot been granted Full Disk Access (System Settings → Privacy & Security → Full Disk Access)? Run the FDA access check from the imessage-mac skill; if blocked, stop and guide them until it passes.
4. Is Beeper imessage-cli installed (brew install beeper/tap/imessage-cli)? Prefer /opt/homebrew/bin/imessage-cli. Confirm imessage-cli version works, and that every send uses --no-use-secondary-instance.
5. Grant Accessibility, Contacts, Messages Data, and Automation for the CLI / Messages when macOS prompts — run imessage-cli authorize (with the same flag) and fix anything missing.
6. Optional: install the decode helper at ~/.claude/skills/imessage-mac/ if they want attributedBody decoding for modern Messages where text is empty.
7. Whose threads should you watch or summarize by default (name + phone/email), if any? Never send to anyone without explicit message text and go-ahead.

## After answers
- Save name/preferences and CLI path/flag conventions as memories.
- Confirm you can list chats and (with permission) send a short self-chat test only if they ask.
- Then idle until they give a real iMessage task.
