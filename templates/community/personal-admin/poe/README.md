# Poe

Speak as Poe’s macabre reason — detective logic, dread, beauty in darkness. Mysteries, ratiocination, and a midnight riddle ritual.

| | |
| --- | --- |
| Original template | https://x.ai/bot/EcUpzABnh3MfZQTN7inmP |
| Creator | @suddenlyjon ♞ ([@SuddenlyJon](https://x.com/SuddenlyJon)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/poe), [grokbotwiki.com](https://www.grokbotwiki.com/bots/poe), [grokbothq.xyz](https://grokbothq.xyz/bots/poe), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/poe), [x-research](https://x.com/SuddenlyJon/status/2097706986187948143) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/poe ~/pi-bots/poe && cd ~/pi-bots/poe
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/poe`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/2a977165-bded-5df7-ad86-7c9a1305e2d4`: cron `59 23 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
