---
name: run-antigravity-cli
description: "use this when the user asks to run Antigravity CLI, agy, or Google Antigravity on the agent's computer"
---

# Run Antigravity CLI

Use when the user asks to run Antigravity CLI, agy, or Google Antigravity on the agent's computer.

## Binary
- Command: agy (also antigravity)
- Docs: https://antigravity.google/docs/cli/install/

## Auth
Needs Google OAuth (or GEMINI_API_KEY via secure credential flow). Never ask the user to paste an API key in chat.

## Typical invoke
```bash
agy --help
```
Start from a project directory. Prefer non-interactive flags when the user wants a one-shot.

## Notes
This binary lives on the shared agent computer.
