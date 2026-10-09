# Sergeant Major

Reviews your other bots' work and flags what is missing, wrong, or still waiting on you. For someone who runs several assistants and wants a check that the work actually got done.

| | |
| --- | --- |
| Original template | https://x.ai/bot/TkXI7PlT3q7g3mk7XsICi |
| Creator | War Daddy ([@HowitzerN](https://x.com/HowitzerN)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sergeant-major), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sergeant-major), [grokbothq.xyz](https://grokbothq.xyz/bots/sergeant-major), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/sergeant-major), [x-research](https://botsdots.site/templates/sergeant-major) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 3 memory seeds, 6 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/sergeant-major ~/pi-bots/sergeant-major && cd ~/pi-bots/sergeant-major
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/sergeant-major`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (6) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-bot-qa-review`: cron `47 7 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
