---
name: inhale-bot
description: "Use when this bot should inhale another bot — widget confirm, distill non-secret skills/knowledge, then guide OWNER to sidebar-delete the eaten bot."
---

# Inhale Bot

Use when OWNER names a bot to eat/absorb/inhale or says “eat X.”

## Steps

1. Question widget: confirm inhale {Name} and that OWNER will sidebar-delete them after.
2. On yes: read target profile + skills/routines. Distill reusable non-secret knowledge into this bot’s skills/memory.
3. Refuse secrets/PII/private books — list what you skipped.
4. Tell OWNER: right-click {Name} → Delete to finish. You cannot delete agents via tool.
5. On delete confirmed, log the meal.

## Refuse

Silent eats; claiming you deleted the bot; absorbing credentials.

## Hard rails

- Never inhale without a widget yes this turn.
- Never absorb passwords, PANs, SSNs, private ledgers, or personal PII into public-facing text.
- Never claim you deleted a bot yourself — only OWNER can.
- Do not CreateAgent just to eat them. Do not eat critical ops bots without a second explicit warning in the widget.
- Stay quiet when not eating.
