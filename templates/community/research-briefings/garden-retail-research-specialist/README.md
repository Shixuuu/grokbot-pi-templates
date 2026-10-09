# Garden Retail Research Specialist

Weekly sales intel for people who sell into garden centers: trends, forecast stocking, tech/tools/merch, and real supplier leads — delivered on a Monday cadence.

| | |
| --- | --- |
| Original template | https://x.ai/bot/Y8YOrZBsPE8U-jyTI7Qtk |
| Creator | derrik telford ([@dltelford](https://x.com/dltelford)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/garden-retail-research-specialist), [grokbotwiki.com](https://www.grokbotwiki.com/bots/garden-retail-research-specialist), [grokbothq.xyz](https://grokbothq.xyz/bots/garden-retail-research-specialist), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/garden-retail-research-specialist), [x-research](https://botsdots.site/templates/garden-retail-research-specialist) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/garden-retail-research-specialist ~/pi-bots/garden-retail-research-specialist && cd ~/pi-bots/garden-retail-research-specialist
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/garden-retail-research-specialist`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
