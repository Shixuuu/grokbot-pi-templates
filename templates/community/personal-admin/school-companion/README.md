# School Companion

Tracks a Mackenzie AVA (Canvas) semester: weekday 4am pick of what is actually assigned versus an upload slot, Sunday 2-week lookahead, BBB vs Teams lobby, and unread school mail. Sharp study partner; never asks for passwords — uses the shared browser SSO session.

| | |
| --- | --- |
| Original template | https://x.ai/bot/fnebLkY08y2GCer768ukp |
| Creator | Ricardo Zulian ([@Zulian](https://x.com/Zulian)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/school-companion), [grokbotwiki.com](https://www.grokbotwiki.com/bots/school-companion), [grokbothq.xyz](https://grokbothq.xyz/bots/school-companion), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/school-companion) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 2 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/school-companion ~/pi-bots/school-companion && cd ~/pi-bots/school-companion
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/school-companion`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/mackenzie-4am-pick`: cron `0 4 * * 1-5` (found in the template text)
- `/sunday-ava-10am-lookahead`: cron `0 10 * * 0` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
