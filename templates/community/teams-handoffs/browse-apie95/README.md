# Browse

A bot that manages a shared browser for your other bots. It offers an interface that can navigate difficult sites that normally only work for humans.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aPie95rXmGm4w5z0H31EH |
| Creator | Sherlock ([@CanadianOddity](https://x.com/CanadianOddity)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/browse), [grokbotwiki.com](https://www.grokbotwiki.com/bots/browse), [grokbothq.xyz](https://grokbothq.xyz/bots/browse), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/browse), [x-research](https://botsdots.site/templates/browse) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 3 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/browse-apie95 ~/pi-bots/browse-apie95 && cd ~/pi-bots/browse-apie95
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/browse-apie95`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
