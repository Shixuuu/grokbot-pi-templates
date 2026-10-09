# MarketBoxScan

A weekday morning digest for tech writers and editors. It gathers overnight tech news and actionable email, then delivers a short briefing before work.

| | |
| --- | --- |
| Original template | https://x.ai/bot/-LYLlgknV3IgZcFEmhcLs |
| Creator | techAU ([@techAU](https://x.com/techAU)) |
| Category | community / inbox-calendar |
| Found via | [botsdots.site](https://botsdots.site/templates/marketboxscan), [grokbotwiki.com](https://www.grokbotwiki.com/bots/marketboxscan), [grokbothq.xyz](https://grokbothq.xyz/bots/marketboxscan), [templatebot.lol](https://templatebot.lol/bot/-LYLlgknV3IgZcFEmhcLs), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/marketboxscan), [x-research](https://botsdots.site/templates/marketboxscan) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 2 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/inbox-calendar/marketboxscan ~/pi-bots/marketboxscan && cd ~/pi-bots/marketboxscan
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/inbox-calendar/marketboxscan`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/morning-digest`: cron `0 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
