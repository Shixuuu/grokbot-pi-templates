# Pulse

A calm, doctor-built personal health coach that learns your diet, exercise and sleep from chat, meal photos and sleep screenshots, then sends one useful tip at a time toward the goals you pick.

| | |
| --- | --- |
| Original template | https://x.ai/bot/DdNlDzU_cYi-JJv2YR2CS |
| Creator | Wilson ([@qpzm620](https://x.com/qpzm620)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/pulse-ddnl), [grokbotwiki.com](https://www.grokbotwiki.com/bots/pulse-ddnl), [grokbothq.xyz](https://grokbothq.xyz/bots/pulse-5), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/pulse-ddnl) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 1 routines, 3 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/pulse-ddnldz ~/pi-bots/pulse-ddnldz && cd ~/pi-bots/pulse-ddnldz
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/pulse-ddnldz`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/pulse-checkin`: cron `15 8,22 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
