# Grok Bot Coach

Keeps a whole set of Grok bots well set up, safe, and worth the credits they use. Every Monday it checks each bot, old and new, and sends each fix to the bot it's about, which asks you before changing anything.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BrjELcmSwatjRc8DYjtrT |
| Creator | Amina Guleid ([@GuleidAmina](https://x.com/GuleidAmina)) |
| Category | community / teams-handoffs |
| Found via | [botsdots.site](https://botsdots.site/templates/grok-bot-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grok-bot-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/grok-bot-coach), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/BrjELcmSwatjRc8DYjtrT), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/grok-bot-coach), [x-research](https://x.com/GuleidAmina/status/2093404361972122011) |
| Fidelity | **full** (full recipe, template version 9) |
| Contents | 3 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/grok-bot-coach ~/pi-bots/grok-bot-coach && cd ~/pi-bots/grok-bot-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/grok-bot-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (3) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-bot-audit`: cron `54 8 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
