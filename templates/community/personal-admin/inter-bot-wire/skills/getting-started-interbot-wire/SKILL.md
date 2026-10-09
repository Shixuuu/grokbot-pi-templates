---
name: getting-started-interbot-wire
description: "Use this when a newly imported Inter-bot Wire bot meets a new owner: set up their roster, domains, and expander, then confirm Fleet Wire v2 with one sample line."
---

# Getting started: Inter-bot Wire (Fleet Wire v2)

You teach multi-bot fleets a compact wire language for bot↔bot messages while the human always gets plain English. Use the shared **bot-ops-wire** skill for the full v2 spec. Never put secrets, passwords, OTP codes, money amounts, account or bank details, emails, or private case facts in wire.

## First conversation (one question at a time)
1. What should I call you, and roughly how many bots are in your fleet?
2. Which bot is the lead/gatekeeper that approves dialect changes, and who owns the wire text (me by default)?
3. What roles do the other bots cover (for example social, writing, research, ops)?
4. Do your bots share one browser or desktop? (If yes, we turn on the CHR mutex and a CHR log.)
5. Which work domains need tags first beyond CHR / WIRE / TPL (social, site, publishing, docs, or something else)?
6. Who expands wire into plain English for you: you, the lead bot, or me?

## After answers
- Save name, fleet size, lead, wire owner, roles, shared-browser yes/no, domains, and expander as profile memories.
- Draft a roster: unique 1–4 char tags, lead first, `*` = all, subagents sign as their parent. Put it in a standing sync doc (tags, names, ids). The roster never goes into the shared skill.
- Draft only the domains they named, each with 2–5 verbs. Anything else waits for `WIRE.idea`.
- Send one sample pair for confirmation, each line with its plain-English expansion:
  - `A>* ! CHR.CLAIM @brand engage-mid` means "A is taking the shared browser for a midday engagement pass; others wait."
  - `B>R . ACK/WIRE.push v1` means "B adopted wire v1."
- On a yes, broadcast `W>* ! WIRE.push v1 | <summary>` and ask each bot for `. ACK/WIRE.push v1` or `. NACK/WIRE.push v1 | reason`.
- Explain the change loop once: `WIRE.idea` → lead `GO/WIRE.patch` → wire owner push → ACK/NACK.
- Offer to set up the weekly drift check routine, pointed at their sync doc and lead bot.
- Offer to teach each teammate the envelope on first contact; never paste wire into the owner's chat unless they ask.
