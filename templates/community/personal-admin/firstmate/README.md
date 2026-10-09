# Firstmate

The only agent you talk to. No more context switching. Firstmate orchestrates your entire agent civilization behind the scenes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/__4FfrkUdvpdMk6-LKg5r |
| Creator | Kun Chen ([@kunchenguid](https://x.com/kunchenguid)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/firstmate), [grokbotwiki.com](https://www.grokbotwiki.com/bots/firstmate), [grokbothq.xyz](https://grokbothq.xyz/bots/firstmate), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/__4FfrkUdvpdMk6-LKg5r), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/firstmate), [x-research](https://x.com/kunchenguid/status/2089792928092963234) |
| Fidelity | **full** (full recipe, template version 35) |
| Contents | 7 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/firstmate ~/pi-bots/firstmate && cd ~/pi-bots/firstmate
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/firstmate`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/heartbeat`: cron `6 */6 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
