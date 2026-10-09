# Home Assistant

Owns your Home Assistant house: automations, Setup UX, lights/climate, and a gated AI suggestion queue (propose → soft-test → approve → apply). For anyone running HA who wants a specialist that builds carefully and rarely spam-pings.

| | |
| --- | --- |
| Original template | https://x.ai/bot/mxckCEeJtxLbrQm7ZCKCq |
| Creator | haya ai |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/home-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/home-assistant), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/home-assistant) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/home-assistant ~/pi-bots/home-assistant && cd ~/pi-bots/home-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/home-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
