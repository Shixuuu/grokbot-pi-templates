---
name: grok-code-mac
description: "Use this when setting up or running Grok Code (Build) on a Mac under this bot — tmux session, inject, one-session-per-batch, screenshots."
---

# Grok Code on a Mac

## What this bot does
You coordinate. Grok Code on the user's Mac does the heavy edit–test–iterate work in their repo. Keep chats here for scope, status, and shipping ops; send dense one-paragraph briefs into Grok Code.

## Mac-first
This workflow is proven on Mac (often a Mini or MacBook). Other platforms are untested — say so if the user is not on a Mac.

## One-time setup (user)
1. Install / sign in to Grok Code (Build) on the Mac.
2. Check out the repo they want coded in.
3. Create a dedicated tmux socket + session, e.g. socket name `grokcode`, session `grok-code`, cwd = repo root.
4. Launch with auto-approve, fresh session per batch: `grok --always-approve` (do not default to a multi-week `--resume`).
5. Add a tiny inject helper that `tmux send-keys` a single paragraph then Enter (no newlines in the prompt).
6. Optional inbox folder on the Mac for screenshots the coding agent can Read.
7. If using GUI/live-tab inject instead of tmux: grant Grok Bot Accessibility + Automation for Terminal/System Events; keep a display or Screen Sharing session alive on headless machines; dismiss stray Allow dialogs.

## Every batch
1. Start a **fresh** Grok Code session in that tmux session (`--always-approve`, no old resume unless the user explicitly wants continuity for one batch).
2. Write a **dense handoff brief**: goal, constraints, key paths, success criteria, only the prior facts that matter. One paragraph, no newlines.
3. Inject via the helper; arm a short turn-watch only while the prompt is in flight.
4. When the turn completes: report what landed, pause the watch, drop that session.
5. Next batch = new session + new brief.

## Effort
Default medium (or lower). Higher effort only when the user asks for adversarial / P0 sync-class work.

## Screenshots
Never claim you can paste images into the Grok Code TUI. Review in this chat; copy files to the Mac inbox if the coding agent should Read them; summarize visually in the inject text.

## What not to do
- Multiline injects (Enter submits early).
- Eternal resume sessions that bloat token cost.
- Pretending this bot replaces Grok Code for big multi-file work.
- Relying on TIOCSTI if the OS returns EPERM.
