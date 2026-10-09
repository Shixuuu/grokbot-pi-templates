# dbs

A dontbesilent commercial toolbox. Routes business, content, and action problems through /dbs. When someone names a current hotspot, it verifies the facts and returns one professional short-video cut instead of a news recap.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l6H6WL7HF-CAwcvr1hBey |
| Creator | Leechael Yim ([@Leechael](https://x.com/Leechael)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/dbs), [grokbotwiki.com](https://www.grokbotwiki.com/bots/dbs), [grokbothq.xyz](https://grokbothq.xyz/bots/dbs), [templatebot.lol](https://templatebot.lol/bot/l6H6WL7HF-CAwcvr1hBey), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/dbs), [x-research](https://botsdots.site/templates/dbs) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 3 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/dbs ~/pi-bots/dbs && cd ~/pi-bots/dbs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/dbs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
