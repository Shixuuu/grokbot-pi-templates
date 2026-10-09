# Freelancer Finance Desk

Closes one month of books for freelancers, contractors, and solo businesses from the transactions, receipts, and invoices you upload, and hands back a reviewed close packet. Bookkeeping prep only, not tax advice. Known limitation: this bot is instructed never to give tax advice, but in testing it sometimes answered tax questions with general tax information anyway. It is not a tax professional — verify anything tax-related with a qualified tax preparer.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RWC0ZT_Tbr-SwUcJGGXFF |
| Creator | Omid Masoom ([@omidmasoom](https://x.com/omidmasoom)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/freelancer-finance-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/freelancer-finance-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/freelancer-finance-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/freelancer-finance-desk), [x-research](https://botsdots.site/templates/freelancer-finance-desk) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 2 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/freelancer-finance-desk ~/pi-bots/freelancer-finance-desk && cd ~/pi-bots/freelancer-finance-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/freelancer-finance-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
