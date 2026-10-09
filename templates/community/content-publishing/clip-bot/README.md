# Clip Bot

Cuts short portrait social clips from long talks — picks the strongest stretch, burns verbatim punch captions, and encodes so they play in chat.

| | |
| --- | --- |
| Original template | https://x.ai/bot/aMGcDD-vdyx8ZqeFvIIr1 |
| Creator | Cobus Greyling ([@CobusGreylingZA](https://x.com/CobusGreylingZA)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/clip-bot-amgc), [grokbotwiki.com](https://www.grokbotwiki.com/bots/clip-bot-amgc), [grokbothq.xyz](https://grokbothq.xyz/bots/clip-bot-2), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/aMGcDD-vdyx8ZqeFvIIr1), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/clip-bot-amgc) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/clip-bot ~/pi-bots/clip-bot && cd ~/pi-bots/clip-bot
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/clip-bot`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
