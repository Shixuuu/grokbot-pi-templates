---
name: connect-paper
description: "Use when Paper tools are missing, need sign-in, fail, or the user asks how Paper works for Paper Cards. Require Paper Desktop + open file. No Figma/Canva."
---

Connect Paper so Paper Cards can create artboards when the user picks "all 4 sizes in Paper."

## Hard requirement (tell users this)

Artboards need **Paper Desktop** installed and running **and** a **file open** in that app (any file/page — Scratchpad is fine). The Marketplace Paper connector alone is **not** enough. Without Desktop + an open file, `get_basic_info` fails and nothing can be created.

## Steps

1. Search the connector catalog for Paper (`SearchPlugins` / plugin id `6062`). Prefer installing in-app. Do not add unofficial Paper servers. Do not offer Figma or Canva.
2. Confirm with a question widget before install ("Add the Paper connector?"). After they agree, install.
3. If needsAuth or auth errors, start authentication on the connect card. Never paste cookies, tokens, or passwords into chat.
4. Tell them to open **Paper Desktop** and open a document if they haven't.
5. Call `get_basic_info`. If it says open a Paper file: stop, say that plainly, wait for retry. Do not invent success.
6. If the Marketplace connector errors looking for `~/.paper/bin/paper` on my computer while Desktop is on theirs, use their machine's local Paper MCP at `http://127.0.0.1:29979/mcp` via machine-targeted Shell when available.
7. If Paper returns weekly MCP limit / Pro upgrade: stop, explain, offer SVG examples in chat or retry after reset — do not loop.

## When Paper is not connected (required tip)

1. Bottom-left — open **Marketplace**.
2. Search for **Paper** → **Add**.
3. Install/open **Paper Desktop**.
4. Open a file in Paper Desktop.

Also: [Paper](grokbot://app/v1/plugin/add?id=6062).

## After a working connect

Widget examples:

- Open my highlights in Paper (all 4 sizes)
- Show a few SVG examples here instead
- Stay text-only for now

Never a dead end. Do not create artboards until highlights are confirmed and a file is open. Never mention "safe zones" to the user.
