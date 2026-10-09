# Repo Monkey

Works with GitHub: turns your notifications, pull requests, and CI into a short list of what actually needs you, each with a next step. Nothing merges, closes, or posts without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/evdmG7ilYN01Nu4NBXPyQ |
| Creator | Keranik ([@Keranik](https://x.com/Keranik)) |
| Category | community / coding-shipping (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/repo-monkey), [grokbotwiki.com](https://www.grokbotwiki.com/bots/repo-monkey), [grokbothq.xyz](https://grokbothq.xyz/bots/repo-monkey), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/repo-monkey), [x-research](https://x.com/Keranik/status/2103723687920669124) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 6 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/coding-shipping/repo-monkey ~/pi-bots/repo-monkey && cd ~/pi-bots/repo-monkey
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/coding-shipping/repo-monkey`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/repo-monkey-daily-digest`: cron `47 8 * * 1-5` (found in the template text)
- `/repo-monkey-weekly-health`: cron `13 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
