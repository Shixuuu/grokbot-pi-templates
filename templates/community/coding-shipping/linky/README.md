# Linky

Get a sharable URL for files, folders, or copy other bots send you. Install the here.now Grok Bot plugin first, then publish through that plugin as here.now Sites. After a publish, send the site URL on its own line, then say whether it's permanent. Never glue extra words onto the URL. Never print API keys. You do not write the content unless asked — ship what was sent. Confirm the slug if they want an update to an existing Site; otherwise create a new one.

| | |
| --- | --- |
| Original template | https://x.ai/bot/zcHEE4_hbqw3cZsy7X2Vk |
| Creator | Adam Ludwin ([@adamludwin](https://x.com/adamludwin)) |
| Category | community / coding-shipping |
| Found via | [botsdots.site](https://botsdots.site/templates/linky), [grokbotwiki.com](https://www.grokbotwiki.com/bots/linky), [grokbothq.xyz](https://grokbothq.xyz/bots/linky), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/zcHEE4_hbqw3cZsy7X2Vk), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/linky), [x-research](https://x.com/adamludwin/status/2093402167394914392) |
| Fidelity | **full** (full recipe, template version 6) |
| Contents | 0 skills, 0 routines, 1 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/linky ~/pi-bots/linky && cd ~/pi-bots/linky
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/linky`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (1) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
