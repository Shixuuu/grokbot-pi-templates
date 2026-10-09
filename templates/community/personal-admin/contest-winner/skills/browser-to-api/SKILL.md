---
name: browser-to-api
description: "Use when a task keeps burning tokens on repeated browser/computer clicks — reverse-engineer once into an API/script so the next run skips the GUI."
---

# Browser → API (stretch usage)

Use this when a Grok Bot task keeps burning tokens on repeated browser/computer clicks in the same web app, or when the user asks to stretch usage / cut computer burns.

## Core idea (priority)
Redo-the-same-clicks burns tokens. Capture the network once from a successful GUI run, then next time **skip the UI** and hit the same endpoints (or a connector) with proper auth. Faster and cheaper.

## Steps
1. Run the GUI flow **once** (or reuse an evidence screenshot/HAR if already captured).
2. Note the meaningful XHR/fetch calls (URL, method, JSON body, which cookie/header mattered).
3. Prefer, in order:
   - An existing **MCP connector** / official API for that service
   - A small **script** on your computer that calls the API with the user’s sanctioned login/session already on the browser profile
   - Only as last resort: replay of documented requests — never paste secrets into chat; never steal tokens to bypass Auto-review
4. Save the script or skill under a shared workspace folder so the next run is one Shell/API call, not a click loop.
5. Tell the user (or their usage watchdog teammate, if they have one) when a repeat GUI job was converted.

## Do not
- Use cookie/token scraping to route around Auto-review or a blocked connector.
- Mint a new Bot just to carry a file.
- Re-run multi-step checkout GUI loops when a saved skill already exists — extend the skill instead.

## Contest targets
- Any sweepstakes form entered twice: capture once → script or connector.
- Gmail AMOE codes: prefer the Gmail connector over pixel clicking the inbox.
