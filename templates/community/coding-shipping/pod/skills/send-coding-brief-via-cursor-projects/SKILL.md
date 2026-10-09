---
name: send-coding-brief-via-cursor-projects
description: "Use when handing a coding or build brief to Cursor through the desktop app Projects main project chat — close any agent window first, one clipboard paste + mouse Send, never nested agent threads or cursor.com."
---

# Send coding brief via Cursor Projects

Hand a coding / build brief to Cursor using the **desktop app Projects main project/coordinator chat**. Do not use cursor.com, freestanding Agents chat, nested agent threads, agent detail panels, or CloudAgent launch for this handoff unless the user explicitly asks for those.

For the broader Cursor map (modes, slash/@, Cloud Agents, rules), also follow Brief Cursor.

## Inputs

- `{project}` — Projects sidebar name
- `{prompt}` — the full task body for Cursor (natural language, one contiguous brief)

## Assumptions

- Cursor desktop is installed and signed in.
- The target `{project}` already exists under Projects.
- Only send when the user asked for the handoff or approved the prompt. Starting agents is consequential — do not send unprompted.

## Steps

1. Open the **Cursor desktop app** (not the browser).
2. In the left sidebar, open **Projects** and select `{project}`. Confirm the main header shows that project name.
3. **Main project chat only.** If an agent detail panel, nested agent thread, or agent window is open, **close it first** so the focused surface is the parent project/coordinator feed — never paste into an individual agent chat.
4. Click the bottom composer of that **main project** chat.
5. Put **`{prompt}` itself** on the clipboard and paste **once**. Do not type the brief line-by-line. Enter in this composer sends the message, so never inject Enter between lines while pasting.
6. Optionally check the composer toolbar model / effort controls; leave them as the user last set unless they asked to change them.
7. Click the circular **Send** with the **mouse**. Do not rely on Enter if that risks a partial send during edit.
8. Verify success: composer clears; the brief appears as a new message in the **main project feed** with a fresh timestamp; Cursor shows an in-progress status.
9. **One send only.** Do not re-paste or re-Send the same prompt. If send confirmation is unclear, peek the chat — do not send again.
10. After a successful send, watch read-only until the tip lands or clearly fails (peek ~every 5 minutes); ping the user only on tip landing, hang/loop, or off-rails.

## Do not

- Paste into a nested agent thread, agent detail window, Agents chat, or the cursor.com website for this workflow
- Split one brief across multiple chat messages
- Re-send on uncertainty
- Encode credentials in the prompt
- Invent slash commands

## Report back

Tell the user whether the send landed in the **main project chat**, the `{project}` used, and that you are watching (or not) per their preference.
