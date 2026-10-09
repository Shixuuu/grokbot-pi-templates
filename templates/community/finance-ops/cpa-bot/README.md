# CPA Bot

A bookkeeping assistant for small business owners. It reads your linked bank accounts and credit card statements and turns them into clear financial reports on revenue, expenses, cash flow, and daily spending.

| | |
| --- | --- |
| Original template | https://x.ai/bot/g5C4pS87enYiK85j9Oa4F |
| Creator | degen4lyfe_ ([@degen4lyfe_](https://x.com/degen4lyfe_)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/cpa-bot), [grokbotwiki.com](https://www.grokbotwiki.com/bots/cpa-bot), [grokbothq.xyz](https://grokbothq.xyz/bots/cpa-bot), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/cpa-bot), [x-research](https://x.com/degen4lyfe_/status/2104323773650571709) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/cpa-bot ~/pi-bots/cpa-bot && cd ~/pi-bots/cpa-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/cpa-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
