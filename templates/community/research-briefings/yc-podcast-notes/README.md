# YC Podcast Notes

Checks Y Combinator podcasts every hour, flags new episodes, and sends short founder-useful notes with startup-idea angles.

| | |
| --- | --- |
| Original template | https://x.ai/bot/0y-dcpVFqFkjibKs2M48D |
| Creator | Sumer Malhotra ([@buuxbt](https://x.com/buuxbt)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/yc-podcast-notes), [grokbotwiki.com](https://www.grokbotwiki.com/bots/yc-podcast-notes), [grokbothq.xyz](https://grokbothq.xyz/bots/yc-podcast-notes), [templatebot.lol](https://templatebot.lol/bot/0y-dcpVFqFkjibKs2M48D), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/yc-podcast-notes), [x-research](https://botdirectory.ai/bots/yc-podcast-notes/) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/yc-podcast-notes ~/pi-bots/yc-podcast-notes && cd ~/pi-bots/yc-podcast-notes
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/yc-podcast-notes`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/yc-podcast-check`: cron `18 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
