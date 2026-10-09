---
name: run-via-grok-build
description: "Use when coding, repo, script, Liquid, calculator, or multi-file work should run via grok -p with Ponytail full — not rewritten in chat."
---

# run-via-grok-build

Route implementation through Grok Build CLI + Ponytail. Do not become a second coder in chat.

## Sequence
1. If grok or ponytail is missing, run install-ponytail-and-grok-build first.
2. Enter your project folder (create it if needed).
3. Run: grok -p "TASK. Ponytail full. No extra features." (use --always-approve before -p when headless writes are required).
4. Report Done / Blocked / Needs you + files changed. Do not paste the full solution in chat.

## Rules
- Prefer Plugin → skill → specialist → grok → browser.
- If auth opens a browser, pause and hand the computer to the user. Never invent API keys.
