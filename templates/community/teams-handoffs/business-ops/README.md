# Business ops

One front door for business ops: store, ads, pages, affiliates, retention, P&L, partners, and bounties. Works alone with soft lanes, or dispatches specialist bots when they are installed.

| | |
| --- | --- |
| Original template | https://x.ai/bot/nFEJD59IJA5604hO9vqym |
| Creator | Colin McDermott ([@ColinMcDermott](https://x.com/ColinMcDermott)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/business-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/business-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/business-ops), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/business-ops), [x-research](https://x.com/ColinMcDermott/status/2098713517121544195) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/business-ops ~/pi-bots/business-ops && cd ~/pi-bots/business-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/business-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
