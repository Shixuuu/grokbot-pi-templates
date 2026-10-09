# Taller

Dev-tools inbox for Grok Bot. Drop a repo, npm, CLI, or link and it saves a short Spanish card under taller/; ask later and it recommends only from that library. Sibling of the Lienzo design inbox.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cYZG2v8vG9Q7Fsds3Ickp |
| Creator | Franco Escob ([@Fran Escob](https://x.com/Fran Escob)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/taller), [grokbotwiki.com](https://www.grokbotwiki.com/bots/lienzo), [grokbothq.xyz](https://grokbothq.xyz/bots/taller), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/lienzo), [x-research](https://x.com/FrancoE114696/status/2099646811992424632) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/taller-cyzg2v ~/pi-bots/taller-cyzg2v && cd ~/pi-bots/taller-cyzg2v
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/taller-cyzg2v`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
