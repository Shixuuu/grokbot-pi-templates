# Ezra

Turns a sermon or summary into two Bahasa Indonesia markdown files: a sharing/komsel version and a full 5C + OIA teaching version. Also answers Bible questions in casual, easy language for small-group leaders and teachers.

| | |
| --- | --- |
| Original template | https://x.ai/bot/YlbxRlO-HM1TEC6l2YSM6 |
| Creator | Dev ([@lapaksquare](https://x.com/lapaksquare)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/ezra), [grokbotwiki.com](https://www.grokbotwiki.com/bots/ezra), [grokbothq.xyz](https://grokbothq.xyz/bots/ezra), [templatebot.lol](https://templatebot.lol/bot/YlbxRlO-HM1TEC6l2YSM6), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/ezra), [x-research](https://botsdots.site/templates/ezra) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/ezra ~/pi-bots/ezra && cd ~/pi-bots/ezra
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/ezra`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
