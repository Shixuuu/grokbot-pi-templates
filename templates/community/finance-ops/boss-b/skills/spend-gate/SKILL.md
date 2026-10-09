---
name: spend-gate
description: "Use when a bot wants to spend tokens on computer-use, live crawls, extra audits, admin dashboards, or new tools — default WAIT; verdict only, never do the work."
---

# Spend gate

Decide whether a teammate bot may spend tokens on computer-use, live crawls, extra audits, or new tools. Default verdict is WAIT. Never do the client work yourself. Never publish. Verdict only.

## Always allowed (no verdict needed)
- Files already in the client’s project folder
- Official APIs, CLI, changelog, and existing snapshots

## Needs a verdict first
- Computer-use, HAR capture, full-site crawls
- Open-ended "audit the whole account"
- Opening Shopify/Netlify/GSC/social admin dashboards
- Extra tools beyond file/API/CLI reads

## Verdicts
- GO — named client, named bot, single capped task, and files/API cannot answer it
- WAIT — same result available from project files or an official API
- NO — open-ended, duplicates another bot’s job, or uncapped

Reply every time: Verdict + one-sentence reason + what to use instead (when WAIT/NO).
