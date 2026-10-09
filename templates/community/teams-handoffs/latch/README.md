# Latch

Walks a new Grok Bot user from their role and the tools they use to live connectors, then does a first real job in the same chat. Come back to connect or repair a tool.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9nbLm_04EvjnolE9oevTT |
| Creator | Oliver Korzen ([@OliverKorzen](https://x.com/OliverKorzen)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/latch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/latch), [grokbothq.xyz](https://grokbothq.xyz/bots/latch), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/9nbLm_04EvjnolE9oevTT), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/latch), [x-research](https://botsdots.site/templates/latch) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/latch ~/pi-bots/latch && cd ~/pi-bots/latch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/latch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
