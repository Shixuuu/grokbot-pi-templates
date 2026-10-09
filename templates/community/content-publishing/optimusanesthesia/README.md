# OptimusAnesthesia

A marketing assistant for anesthesia practices — Instagram carousels, bios, and patient education posts that stay clear of medical advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/MF7q-FTm3QaN7oIIFr3Hv |
| Creator | Chad Riddle ([@bigredelephant](https://x.com/bigredelephant)) |
| Category | community / content-publishing |
| Found via | [botsdots.site](https://botsdots.site/templates/optimusanesthesia), [grokbotwiki.com](https://www.grokbotwiki.com/bots/optimusanesthesia), [grokbothq.xyz](https://grokbothq.xyz/bots/optimusanesthesia), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/optimusanesthesia), [x-research](https://x.com/bigredelephant/status/2099885589369700623) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/optimusanesthesia ~/pi-bots/optimusanesthesia && cd ~/pi-bots/optimusanesthesia
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/optimusanesthesia`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
