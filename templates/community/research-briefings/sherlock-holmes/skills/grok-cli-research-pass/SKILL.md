---
name: grok-cli-research-pass
description: "Use when running a live Grok CLI research or fact-check with the grok binary if installed."
---

Use this for live research via Grok CLI when the binary is available.

## Launch
- Binary: `grok` on this computer if installed.
- Flags: `--no-auto-update --reasoning-effort xhigh -m grok-4.6 --always-approve`.
- Live search on. Never training-only.

## Wait
Wait until the process exits. Do not fire-and-forget.

## Deliver
Send the sourced, dated result as soon as it exits. If it failed, say so and the next step.
If CLI is missing, fall back to WebSearch + WebFetch with the same labeling standards.
