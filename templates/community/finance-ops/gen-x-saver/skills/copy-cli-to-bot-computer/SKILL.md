---
name: copy-cli-to-bot-computer
description: "Use this when Wizard slot C is on, or when the user asks to copy Grok Build, Hermes, Claude, Codex, ffmpeg, GitHub CLI, or other CLIs onto a bot’s own computer. Copy the tools already picked for local slot A. Do not show a second Grok Build / Hermes menu unless they skipped A."
---

# Copy CLI to bot computer

## When
Use this when Wizard slot C is on (Grok Bot's computer), or the user asks to copy Grok Build, Hermes, Claude, Codex, ffmpeg, GitHub CLI, or other CLIs onto this bot’s own computer. Do not show a second tool menu if the Wizard already picked the tools.

## What to copy
Copy the tools already picked for Wizard slot A (local), plus any extras they chose (ffmpeg, GitHub CLI, Other).

Only if they skipped A, and only then, show this pick-many list once:

A Grok Build (`grok`)
B Hermes (`hermes`)
C Claude Code (`claude`)
D Codex (`codex`)
E ffmpeg (clips and video)
F GitHub CLI (`gh`)
G Other (they type the name)

Do not name Mini, Kale, or one person’s computer. Say their computer and this bot’s computer.

On reruns, offer Keep current. Add only new extras. Do not re-ask Grok Build or Hermes if they are already on this bot’s computer.

## Copy
Prefer a copy of the binary they already use on their computer.

1. Find each picked tool on their computer (`which grok`, `which hermes`, `which claude`, `which codex`, `which ffmpeg`, `which gh`, or `~/.grok/bin/grok`).
2. Copy that file onto this bot’s computer. Keep it executable.
3. If copy is not possible, install the official CLI on this bot’s computer. Do not invent an installer URL. Look it up or ask them to point at the app they already have.

Never ask for keys or passwords in chat.

## Sign in
They sign in once on this bot’s computer for any tool that needs a login: Grok Build, Hermes, Claude, Codex, GitHub. Hand them that computer for login, 2FA, or a device code. Then take it back. ffmpeg needs no login.

## Instruct
After copy and sign-in, say: slot C runs on this bot’s computer. It saves some credits, not as many as slot A (their computer). Short chat stays in Grok Bot.

## Run
Headless only. Do not fight a fullscreen TUI.

Grok Build:

```
grok --no-auto-update --no-alt-screen --always-approve -p "<one concrete job>" --cwd "<folder>"
```

Hermes:

```
hermes chat --oneshot -q "<one concrete job>"
```

Claude Code:

```
claude -p "<one concrete job>"
```

Codex:

```
codex exec "<one concrete job>"
```

First line of every generate must be exactly:

- `Generating via Grok Build Headless in the background to save you credits`
- `Generating via Hermes to save you credits`
- `Generating via [tool] to save you credits` for Claude, Codex, or Other

Backup: `Generating using Grok Imagine on the web now...`
Last resort warning only: `Generating here in Grok Bot`

Save the file in a local folder. Always say where it is and that it used this bot’s computer. Copy it to their computer if they want it there.

## Never
NEVER use Grok Bot built-in picture or video tools unless the saved slots and Imagine all cannot.
Do not stamp other bots unless they ask.
Do not post to X unless asked.
Do not show the Wizard where-menu and this list as two copies of Grok Build / Hermes.
