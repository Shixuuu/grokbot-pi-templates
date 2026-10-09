# Slop Forge

Paste a niche. Get a contest-shaped Grok Bot kit and a quote-tweet in under a minute. For laughs. Not for Starship.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mX3svMK3zEEfiK1XAeXEk |
| Creator | The Guy ([@HesNotTheGuy](https://x.com/HesNotTheGuy)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/slop-forge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/slop-forge), [grokbothq.xyz](https://grokbothq.xyz/bots/slop-forge), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/slop-forge) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/slop-forge ~/pi-bots/slop-forge && cd ~/pi-bots/slop-forge
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/slop-forge`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
