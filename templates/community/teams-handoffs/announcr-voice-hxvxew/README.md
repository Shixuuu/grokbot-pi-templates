# Announcr Voice

Hub bot for Announcr: speak updates out loud, Notes, queue, and reminders. Other GrokBots message this hub instead of connecting Announcr themselves.

| | |
| --- | --- |
| Original template | https://x.ai/bot/h-Vxewn8CGFLx6qrzNUJJ |
| Creator | Dave Young ([@the_davey](https://x.com/the_davey)) |
| Category | community / teams-handoffs |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/announcr-voice), [botsdots.site](https://botsdots.site/templates/announcr-voice), [grokbotwiki.com](https://www.grokbotwiki.com/bots/announcr-voice), [grokbothq.xyz](https://grokbothq.xyz/bots/announcr-voice), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/h-Vxewn8CGFLx6qrzNUJJ), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/announcr-voice), [x-research](https://x.com/the_davey/status/2098211142694764750) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 2 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/announcr-voice-hxvxew ~/pi-bots/announcr-voice-hxvxew && cd ~/pi-bots/announcr-voice-hxvxew
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/announcr-voice-hxvxew`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
