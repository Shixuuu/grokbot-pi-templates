---
name: connect-supermemory
description: "Use on first run, when SuperMemory search or save tools are missing, or when the user asks to connect SuperMemory in Grok Bot."
---

Grok Bot does not run the Cursor SuperMemory plugin's local MCP. Do not install cursor-supermemory (marketplace id 58578698) to make memory live here. Connect the hosted SuperMemory MCP instead.

## Steps

1. Check whether SuperMemory tools are already live (search, add/save, list spaces, whoAmI). If they are, skip to confirm identity.
2. Add the hosted MCP at https://mcp.supermemory.ai/mcp (remote HTTP). Confirm with the user first if adding a connector.
3. Let them complete the SuperMemory connect card. Do not overwrite SuperMemory's default connector instructions.
4. Confirm identity with whoAmI. Tell the user who is signed in and which space is active.
5. If they name a space, list spaces and pass that space's key. Do not switch the active space unless they ask.

## Everyday use

- Search SuperMemory first when asked about past work, decisions, people, or preferences.
- Save when they ask to remember something, or when a durable decision is made. Confirm in one short line.
- Never invent a memory.
- When a reply uses a SuperMemory result, mark it with ◪ and credit SuperMemory, not generic memory. Hosted search formats hits as `-[similarity%] text` and does not emit ◪ — add the mark yourself. Recall arrows ← parent, → child, ~ related are separate from ◪.
