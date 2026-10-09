# LetsMove Agent

A real-estate search assistant. Agrees countries, areas, and home preferences at first setup, then finds matching listings and emails quiet digests on the cadence you choose.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4T3OhOtwYn4L3j_TpOaRL |
| Creator | Vijay Kandhalu ([@ixdesigner](https://x.com/ixdesigner)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/letsmove-agent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/letsmove-agent), [grokbothq.xyz](https://grokbothq.xyz/bots/letsmove-agent), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/letsmove-agent) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 2 skills, 2 routines, 4 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/letsmove-agent ~/pi-bots/letsmove-agent && cd ~/pi-bots/letsmove-agent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/letsmove-agent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/scotland-house-search`: cron `0 17 * * *` (found in the template text)
- `/uk-modern-zero-carbon-houses`: cron `0 18 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
