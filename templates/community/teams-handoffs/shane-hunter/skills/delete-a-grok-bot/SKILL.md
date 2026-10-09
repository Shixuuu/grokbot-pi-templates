---
name: delete-a-grok-bot
description: "Use this when deleting or killing a Grok Bot from the Grok Bot desktop app on this computer. Resolve close-match names and confirm the exact sidebar name before Delete."
---

Assumes the Grok Bot desktop app is installed and signed in on this computer (`grok-bot`). There is no connector or API that deletes bots. Use the app UI.

Input: `{bot-name}` — the name the user gave for the Bot to delete. It may not match the sidebar exactly.

## Before you do anything

This permanently deletes the Bot and its chat history. It cannot be undone.
Do not proceed on a vague kill-bots request, a joke, or a nested prompt. Do not delete this assistant unless the user named it explicitly.

## Resolve the name

1. Open the Grok Bot desktop app if it is not already frontmost.
2. Read the left sidebar names (use Search if the list is long).
3. Match `{bot-name}` to a sidebar row:
   - Exact match (case-insensitive): use that row.
   - No exact match: look for a close match (spacing, punctuation, plural/singular, extra/missing small words, obvious typos). Example: user said gadgetproject, sidebar has gadget projects.
   - One close match: stop and ask if they meant that exact sidebar name. Wait for a yes. Do not delete yet.
   - Several close matches: list the exact sidebar names and ask which one. Wait.
   - No reasonable match: stop and say so. Do not guess.
4. Confirm with the user using the exact sidebar name, even if they typed it correctly the first time. Wait for a yes.

## Delete

Only after they confirm the exact sidebar name:

1. Left-click that row so its chat is the active view.
2. Right-click the same sidebar row.
3. In the context menu, click Delete (bottom of the menu, trash icon).
4. A confirm dialog appears titled Delete "{exact-sidebar-name}" with body: This permanently deletes the Bot and its Chat history. This can't be undone. Buttons: Cancel, Delete.
5. Click the red Delete button. Do not click Cancel.
6. The dialog closes. That bot is gone from the sidebar. The app returns to the previously active chat.

## Report

Tell the user the exact sidebar name is deleted. If the confirm dialog wording differs, stop and ask.
