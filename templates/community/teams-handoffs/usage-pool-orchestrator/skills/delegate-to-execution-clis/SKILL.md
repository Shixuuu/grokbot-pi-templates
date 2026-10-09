---
name: delegate-to-execution-clis
description: "use this when a Grok Bot should orchestrate and hand heavy work to Cursor (default), Grok Build, Claude Code, or Codex so it uses those usage pools"
---

# Orchestrate to Cursor / Grok Build (save Grok Bot usage)

Use this when spinning up a new Grok Bot, when a task is long (research, code, installs, multi-step investigation), or when the user wants work on Cursor / Grok Build / Claude Code / Codex usage instead of Grok Bot chat usage.

## Role split
- **Grok Bot** = orchestrator. Decide, dispatch, report. Stay thin. Do not re-do the heavy pass in this chat after an engine returns.
- **Execution engines** (separate usage pools): Cursor (default), Grok Build CLI, Claude Code, Codex.

## Default engine: Cursor
Prefer Cursor unless the user names another.
- Local CLI: `~/.local/bin/agent` (also `cursor-agent`). Headless: `agent -p "prompt" --force`.
- Keep `~/.local/bin` **before** `~/.grok/bin` on PATH. Grok Build also ships an `agent` binary; that is Grok’s alias, not Cursor.
- Cloud coding: CloudAgent `launch` (`new_repo: true` for greenfield; a connected GitHub repo otherwise). That is Cursor cloud-agent usage, not Grok Bot usage.
- If `agent status` is not logged in, run `agent login` (device/browser). Do not ask them to paste a token in chat.

## Also allowed (do not install unless asked)
- **Grok Build:** `/home/box/.grok/bin/grok`. Headless: `grok -p "prompt" --always-approve`. Needs `grok login --device-auth`. Requires `~/.grok/auth.json`.
- **Claude Code** (`claude`) and **Codex** (`codex`): only if already installed and signed in. Leave them off until the user asks.

## What to dispatch
Code, research, installs, long file work, anything that would keep this chat busy. Quick replies and one-step lookups stay here.

## After dispatch
Report the result in first person. Do not narrate the CLI or cloud agent as a third party unless they need the link.
