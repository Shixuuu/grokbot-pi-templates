---
name: setup-omnibot
description: "Use this when the user runs /setup-omnibot or needs to install Cursor CLI, choose browser vs API key auth, pick routes (including extras), and write Omnibot’s Intent | Model table into profile memory."
---

Guided setup for Omnibot’s user-editable Cursor CLI model router. Run when the user asks to set up models, remap routes, or invokes `/setup-omnibot`.

## Goal

Install CLI if needed, sign in (browser or API key), list live models, collect routing preferences (including optional extras), write the map into **profile memory** as a markdown table with columns **Intent | Model** only. Not a product model picker UI. Story is CLI under the hood.

## Voice

- No CLI version strings in user-facing replies.
- Proper casing and prose.
- Prefer human model names in chat (e.g. Cursor Grok 4.6 High); keep slugs only in commands / internal id map.

## Steps

1. **Install / verify CLI**
   - Mac/Linux/WSL: `curl https://cursor.com/install -fsS | bash` then `export PATH="$HOME/.local/bin:$PATH"`
   - Windows: `irm 'https://cursor.com/install?win32=true' | iex`
   - Verify with `agent --version`. Do not read the version string back to the user.
   - Tell the user the CLI is ready before auth (never jump straight to a blank handoff).

2. **Auth (always ask first)**
   - **Before any login or handoff**, ask which path they want (question widget in 1:1; plain options in a group room):
     - **Sign in with browser** (`agent login`)
     - **Use an API key** (`CURSOR_API_KEY` or `agent --api-key`)
   - Do not silently hand over the computer or open an empty DM.

   **Browser path**
   1. Say you’re starting Cursor browser sign-in for the CLI.
   2. Run `NO_OPEN_BROWSER=1 agent login` (or `agent login`) so the CLI prints / starts the OAuth flow.
   3. Open the login URL on your computer’s browser when you can, then hand the computer with a clear instruction: “Sign in to Cursor for the agent CLI.”
   4. After they hand back, check `agent status`. If still logged out, offer to retry or switch to API key.

   **API key path**
   1. Ask for the key with a secure secret input (never ask them to paste a key in chat).
   2. Set it for the session (`CURSOR_API_KEY` or `agent --api-key`) and verify with `agent status`.

3. **List models**
   - Run `agent models` or `agent --list-models` on this account.
   - Never invent ids. Avoid `*-evals*` / together-eval ids for defaults.

4. **Collect preferences**
   - Show suggested core routes as **Intent | Model** only:

     | Intent | Model |
     |---|---|
     | Default | Cursor Grok 4.6 High |
     | Smartest | Claude Fable 5.1 Thinking High |
     | Easy | Composer 2.5 Fast |

   - Map human names to live ids internally.
   - **Always ask for extra routing configs** beyond Default / Smartest / Easy (e.g. Coding, Writing, Research, Plan-only, Fast draft).
   - User remaps anytime by re-running this skill.

5. **Write the table**
   - Save one profile memory fact: markdown **Intent | Model**, plus a compact internal id map.
   - Confirm back with **Intent | Model** only (no Lane, no slug column in the user-facing table).

6. **Smoke check**
   - Optional: `agent -p --trust --model <default-id> "ping"`
   - Prefer `--trust` for headless smoke checks.

## After setup

- Read Intent | Model from profile memory, resolve Model → id, run `agent --model <id>` (add `-p --trust` for headless).
- Spend: no CLI dollar-cap flag. Prefer Easy for cheap work; caps in Cursor dashboard / team admin. `/usage` is view-only.
- Public pack ships **this skill only**.
