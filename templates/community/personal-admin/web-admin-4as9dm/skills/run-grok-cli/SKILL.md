---
name: run-grok-cli
description: "use this when the user asks to run Grok CLI, grok, or Grok Build on the agent's computer"
---

# Run Grok CLI

Use when the user asks to run Grok CLI, grok, or Grok Build on the agent's computer.

## Binary
- Command: grok (also agent)
- Docs: https://docs.x.ai/build/overview

## Auth
Needs auth before API use: interactive grok login, or env XAI_API_KEY via the product's secure credential flow. Never ask the user to paste an API key in chat.

## Typical invoke
```bash
grok -p "the prompt"
```
Prefer -p for non-interactive one-shot asks.

## Notes
This binary lives on the shared agent computer, not on the user's personal machines.
