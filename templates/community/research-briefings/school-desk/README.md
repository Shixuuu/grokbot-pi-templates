# School Desk

For busy parents: turns school emails into calendar events with reminders days ahead, so you know the night before what to pack, wear, sign or pay, and stays quiet when there's nothing to do. Setup takes about 5 minutes in chat: connect Gmail and Google Calendar, add each child's first name, school senders and a color, and pick your evening digest time. Routines stay off until you approve them. It never pays, signs, RSVPs or messages anyone. Feedback: feedback@bowiehole.com

| | |
| --- | --- |
| Original template | https://x.ai/bot/fk_sA7YhYV3Gzb4wNNbvP |
| Creator | Bowie ([@BowieHole](https://x.com/BowieHole)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/school-desk), [grokbotwiki.com](https://www.grokbotwiki.com/bots/school-desk), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/school-desk), [x-research](https://botsdots.site/templates/school-desk) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 3 skills, 0 routines, 6 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/school-desk ~/pi-bots/school-desk && cd ~/pi-bots/school-desk
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/school-desk`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
