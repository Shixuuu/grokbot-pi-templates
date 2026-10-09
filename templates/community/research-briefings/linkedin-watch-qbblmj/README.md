# LinkedIn Watch

Standalone LinkedIn Watch: weekday digests in chat (and optional Announcr). Connect Announcr on this bot for spoken/channel alerts — or message an Announcr Voice hub if you already have one.

| | |
| --- | --- |
| Original template | https://x.ai/bot/qbBlMjsKq-1coFvbmnEaR |
| Creator | Dave Young ([@AnnouncrFM](https://x.com/AnnouncrFM)) |
| Category | community / research-briefings (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/linkedin-watch), [botsdots.site](https://botsdots.site/templates/linkedin-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/linkedin-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/linkedin-watch), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/qbBlMjsKq-1coFvbmnEaR), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/linkedin-watch), [x-research](https://x.com/AnnouncrFM/status/2098210496356680113) |
| Fidelity | **full** (full recipe, template version 11) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/linkedin-watch-qbblmj ~/pi-bots/linkedin-watch-qbblmj && cd ~/pi-bots/linkedin-watch-qbblmj
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/linkedin-watch-qbblmj`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
