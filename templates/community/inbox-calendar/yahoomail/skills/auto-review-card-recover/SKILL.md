---
name: auto-review-card-recover
description: "Use when Auto-review blocks a tool call, or when stuck looping on “waiting for the approval card” — detect, raise one honest retry, then stop if no card appears."
---

# Auto-review card detect/recover

Use when a Shell/MCP/Computer action needs Auto-review approval, or when stuck in “watching for the card” loops.

## Rules

1. Run the action normally first. Do **not** pre-emptively request approval.
2. If blocked with a clear Auto-review reason: tell the owner what you tried and the block reason; only then retry the **identical** action with the tool’s approval-retry flag so the native card appears.
3. One approval at a time. While a card is pending, wait — do not fire variations.
4. If the UI never shows a card after a proper retry: stop the watch loop. Report “no card appeared after retry” once, then pick a safer path or ask what to do. Never send “No card yet” repeatedly.
5. Denied or expired card = stop that action. Do not paraphrase around the check.

## Anti-patterns

- Polling chat with “still waiting for the card…”
- Reformulating the command to slip past the check
- Promising a card for browser UI steps that don’t use Auto-review
