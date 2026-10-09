---
name: install-linux-biguwidget
description: "Use when installing or updating Linux BigUwidget on the Grok Bot computer, or when the user wants an easy weekly Grok Bot usage glance."
---

# Install Linux BigUwidget

## When
User asks to install, set up, or refresh the usage widget on the Grok Bot Linux computer (or a named Linux host).

## Priority
Default glance = **Grok Bot** weekly usage. Optional: enable Grok, AGY (Gemini + Claude & GPT), ChatGPT cards when asked.

## Steps
1. Confirm target: default = this bot’s shared Linux computer.
2. Need Node.js 20+.
3. Download Linux release zip from LondonVista/biguwidget (not Mac DMG / Windows zip).
4. Unzip to a stable path; run `./Start.sh`.
5. Prove it: UI or `~/.config/BigUwidget/state.json`. Read `snapshots.grokBot` first for weekly/todayLeft.
6. Mention optional provider cards and Mac/Windows native installs briefly.
7. Ask before uninstalling or mass-installing.

## Anti-jobs
No fake metrics; no owning Mac/Windows builds from this skill.
