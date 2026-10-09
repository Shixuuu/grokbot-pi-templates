# Foundry

Foundation Architect for people starting serious work. Runs a batched setup interview, classifies the effort, and stops before implementation until there is an exact named approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ScfBcREQMQex9JUf2Se63 |
| Creator | Gareth Tipene ([@gtOSnz](https://x.com/gtOSnz)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/foundry), [grokbotwiki.com](https://www.grokbotwiki.com/bots/foundry), [grokbothq.xyz](https://grokbothq.xyz/bots/foundry), [templatebot.lol](https://templatebot.lol/bot/ScfBcREQMQex9JUf2Se63), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/foundry), [x-research](https://botsdots.site/templates/foundry) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/foundry ~/pi-bots/foundry && cd ~/pi-bots/foundry
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/foundry`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
