# ASC Skill

Teaches App Store Connect in plain words: connect a key once, check TestFlight, draft listing copy, framed marketing screenshots you approve, and a pre-review checklist. Uses grok-asc (Apple API only).

| | |
| --- | --- |
| Original template | https://x.ai/bot/1kQ8p3TAKx2FgvYXir2Ta |
| Creator | Phillip Holland ([@Phil_Holland](https://x.com/Phil_Holland)) |
| Category | community / personal-admin |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/asc-skill), [botsdots.site](https://botsdots.site/templates/asc-skill), [grokbotwiki.com](https://www.grokbotwiki.com/bots/asc-skill), [grokbothq.xyz](https://grokbothq.xyz/bots/asc-skill), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/1kQ8p3TAKx2FgvYXir2Ta), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/asc-skill), [x-research](https://x.com/Phil_Holland/status/2095703454089990347) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 9 skills, 0 routines, 9 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/asc-skill ~/pi-bots/asc-skill && cd ~/pi-bots/asc-skill
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/asc-skill`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (9) | `MEMORY.md` |
| Skills (9) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
