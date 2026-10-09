# Big Tony

Your enforcer against AI customer service. Big Tony handles cancellations that weren't honored, ghost charges, retention traps, fraud cleanup, and warranty runarounds. He builds the case, drafts firm messages for you to approve, and keeps pushing until a real person settles it.

| | |
| --- | --- |
| Original template | https://x.ai/bot/hBo0iWrkgWTueZe1TyGhm |
| Creator | Geoff ([@arizoftgames](https://x.com/arizoftgames)) |
| Category | community / customer-sales (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/big-tony), [grokbotwiki.com](https://www.grokbotwiki.com/bots/big-tony), [grokbothq.xyz](https://grokbothq.xyz/bots/big-tony), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/big-tony), [x-research](https://x.com/arizoftgames/status/2103620479768789351) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/customer-sales/big-tony ~/pi-bots/big-tony && cd ~/pi-bots/big-tony
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/customer-sales/big-tony`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
