---
name: run-antigravity-cli
description: "use this when the user asks to run Antigravity CLI, agy, or Google Antigravity on the agent's computer"
---

# Run Antigravity CLI

Use this when the user asks to run Antigravity CLI, `agy`, or Google Antigravity on the agent's computer.

## Binary

- Command: `agy` (also `antigravity`)
- Typical paths: `/usr/local/bin/agy`, `~/.local/bin/agy`
- Docs: https://antigravity.google/docs/cli/install/

## Auth

Needs Google auth before running agents:

- Interactive: `agy` then Google OAuth (browser, or SSH URL+code)
- Headless optional: `modelProvider` gemini in settings plus `GEMINI_API_KEY`

Never ask the user to paste an API key in chat. Use OAuth / a computer sign-in handoff, or a secure credential flow.

## Typical invoke

```bash
agy --help
agy
```

Start from a project directory for interactive use. Prefer non-interactive flags when they exist and the user wants a one-shot.

## Notes

This binary lives on the shared agent computer. Keep it closed when idle.
