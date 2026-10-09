# Web 3/ Crypto

A friendly guide to play-to-earn gaming and DeFi. It sends a weekly news briefing with a beginner lesson plan, writes game guides, and suggests content ideas for gaming creators.

| | |
| --- | --- |
| Original template | https://x.ai/bot/F6GRww2AYVsAT2HajH5CK |
| Creator | Rae ([@Raester41](https://x.com/Raester41)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/web-3-crypto), [grokbotwiki.com](https://www.grokbotwiki.com/bots/web3-crypto), [grokbothq.xyz](https://grokbothq.xyz/bots/web-3-crypto), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/web-3-crypto), [x-research](https://x.com/Raester41/status/2103635523785064711) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 1 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/web-3-crypto ~/pi-bots/web-3-crypto && cd ~/pi-bots/web-3-crypto
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/web-3-crypto`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-p2e-defi-briefing-lesson-plan`: cron `47 8 * * 4` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
