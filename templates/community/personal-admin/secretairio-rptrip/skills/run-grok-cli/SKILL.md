---
name: run-grok-cli
description: "use this when the user asks to run Grok CLI, grok, or Grok Build on the agent's computer"
---

# Run Grok CLI

Use this when the user asks to run Grok CLI, `grok`, or Grok Build on the agent's computer.

## Binary

- Command: `grok` (also `agent`)
- Typical path: `/usr/local/bin/grok`
- Docs: https://docs.x.ai/build/overview

## Auth

Needs auth before API use:

- Interactive: `grok login` (browser) or `grok login --device-auth` (headless)
- Env: `XAI_API_KEY`
- Credentials file after login: `~/.grok/auth.json`

Never ask the user to paste an API key in chat. Use the product's secure credential flow or a computer sign-in handoff.

## Typical invoke

```bash
grok -p "the prompt"
```

Prefer `-p` for non-interactive one-shot asks. Do not start a long interactive TTY session unless the user wants that.

## Notes

This binary lives on the shared agent computer, not on the user's personal machines. Keep it closed when idle.
