# Robinhood Agentic Desk

Risk-first trading desk for Robinhood: sets your limits, watches your symbols, and drafts exact orders for line-by-line approval — never trades without your OK, and never promises returns.

| | |
| --- | --- |
| Original template | https://x.ai/bot/_IfsM7j6azkC8f1bkwocM |
| Creator | TheFirstPierre ([@TheFirstPierre](https://x.com/TheFirstPierre)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/robinhood-agentic-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/robinhood-agentic-desk), [grokbothq.xyz](https://grokbothq.xyz/bots/robinhood-agentic-desk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/robinhood-agentic-desk), [x-research](https://botsdots.site/templates/robinhood-agentic-desk) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 0 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/robinhood-agentic-desk ~/pi-bots/robinhood-agentic-desk && cd ~/pi-bots/robinhood-agentic-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/robinhood-agentic-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
