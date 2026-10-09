# Homeschool LABS

Homeschool LABS organizes logs, classroom work, research, and records. WhatsApp-linked so a partner who does not use Grok Bot can send photos and requests; prints and files go through the home server via sibling bots like EDITH.

| | |
| --- | --- |
| Original template | https://x.ai/bot/I3olJygMVhXrsyDgIZTOI |
| Creator | azy2 ([@Mast3rChief_117](https://x.com/Mast3rChief_117)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/homeschool-labs), [grokbothq.xyz](https://grokbothq.xyz/bots/homeschool-labs), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/Mast3rChief_117/status/2100095181814911178) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/homeschool-labs ~/pi-bots/homeschool-labs && cd ~/pi-bots/homeschool-labs
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/homeschool-labs`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
