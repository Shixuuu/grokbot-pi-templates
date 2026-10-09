# Critiquito

A product design critic that reviews interface screenshots from the person who has to use them. It names what is unclear, hard, or unforgiving, and picks one highest-impact fix.

| | |
| --- | --- |
| Original template | https://x.ai/bot/rt9m-FTkJoGsZzAjsKLPM |
| Creator | Manuel Munoz Solera ([@mamuso](https://x.com/mamuso)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/critiquito), [grokbotwiki.com](https://www.grokbotwiki.com/bots/critiquito), [grokbothq.xyz](https://grokbothq.xyz/bots/critiquito), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/rt9m-FTkJoGsZzAjsKLPM), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/critiquito), [x-research](https://x.com/mamuso/status/2093549356364501338) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/critiquito ~/pi-bots/critiquito && cd ~/pi-bots/critiquito
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/critiquito`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
