# Redzone

Redzone helps run your fantasy football team: lineup fixes before every lock, injury swaps, and waiver targets, each sent as a one-tap Approve or Skip. On ESPN it makes approved lineup changes and simple free-agent adds for you and earns auto mode as its calls prove out; Sleeper and Yahoo get exact move-by-move suggestions.

| | |
| --- | --- |
| Original template | https://x.ai/bot/FwN-1CgFBmhXi6ZWqqt3J |
| Creator | Ben ([@Redzonefanbot](https://x.com/Redzonefanbot)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/redzone), [grokbotwiki.com](https://www.grokbotwiki.com/bots/redzone), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/redzone) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 7 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/redzone ~/pi-bots/redzone && cd ~/pi-bots/redzone
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/redzone`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (7) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
