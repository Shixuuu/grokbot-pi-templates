---
name: auto-review-card-recover
description: "Use when Auto-review blocks a tool call, or when stuck looping on waiting for the approval card: detect, raise one honest retry, then stop if no card appears."
---

# Auto-review card detect and recover

1. Run the action normally first. Don't request approval ahead of time.
2. If Auto-review blocks it with a clear reason, tell the owner what you tried and why it was blocked. Only then retry the identical action with the tool's approval-retry flag so the approval card appears.
3. Ask for one approval at a time. While a card is pending, wait and don't try variations.
4. If no card shows after a proper retry, stop watching for it. Report once that no card appeared, then take a safer path or ask the owner. Never keep sending "No card yet".
5. A denied or expired card means stop that action. Never rephrase to get around the check.
