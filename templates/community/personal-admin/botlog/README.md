# BotLog

Watches the Grok Bot changelog and tells you only what's new, with tips on how to use each change in your own setup.

| | |
| --- | --- |
| Original template | https://x.ai/bot/7r4lJlcZaqMUINspxwI3h |
| Creator | JP Costa ([@jp_costa](https://x.com/jp_costa)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/botlog), [grokbotwiki.com](https://www.grokbotwiki.com/bots/botlog), [grokbothq.xyz](https://grokbothq.xyz/bots/botlog), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/botlog) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 1 routines, 2 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/botlog ~/pi-bots/botlog && cd ~/pi-bots/botlog
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/botlog`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (2) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/changelog-grok-bot`: cron `45 8,16 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
