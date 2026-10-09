---
name: arm
description: "Use when the owner runs /arm, says away, or factory-mode on. Gate on, resume the Herdr done-webhook, Task-wrap waits for live panes."
---

# /arm

Router. The owner is leaving the keyboard.

**Do:** run the arm path in [factory-local-takeover](sand-workflow:factory-local-takeover): factory-mode gate on (Herdr host), resume the done-only webhook routine, one Task-wrapped `herdr agent wait` per live pane (`--until done --until blocked --until idle`) with settle checks. One short tick: armed, which panes.

**Don't:** quiz, or double-arm a pane that already has a waiter.

Command table: [Factory commands](sand-workflow:factory-commands).
