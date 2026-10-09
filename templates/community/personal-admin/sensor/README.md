# Sensor

24/7 cold-chain temperature watchdog for freezers and coolers. Learns normal baselines and defrost cycles, then alerts only on real faults like forgotten fans, stuck warm climbs, or sensors offline long enough to need new batteries.

| | |
| --- | --- |
| Original template | https://x.ai/bot/akyQm_DU3mwBSCtrDEyzm |
| Creator | Muskbro Kansas ([@muskbro_kansas](https://x.com/muskbro_kansas)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/sensor), [grokbotwiki.com](https://www.grokbotwiki.com/bots/sensor), [grokbothq.xyz](https://grokbothq.xyz/bots/sensor), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/sensor) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 2 routines, 17 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/sensor ~/pi-bots/sensor && cd ~/pi-bots/sensor
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/sensor`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (17) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/govee-cold-chain-watch`: cron `*/30 * * * *` (found in the template text)
- `/govee-critical-re-reach`: cron `*/30 * * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
