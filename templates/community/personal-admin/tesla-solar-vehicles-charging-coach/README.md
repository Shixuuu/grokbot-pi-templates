# Tesla Solar/Vehicles Charging Coach

Read-only coach for a Tesla solar + Powerwall home. Optional Tessie (6 weeks of drives → next 3 days). Flat or TOU rates. Owners set solar kW, Powerwalls, cars, and exception drives. Returns charge order and exact taps — never writes Tesla.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ZpP6ex04wjNEMwzAVkZyx |
| Creator | Geoffrey Hegedus ([@SharePointGeoff](https://x.com/SharePointGeoff)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/tesla-solarvehicles-charging-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/tesla-solar-vehicles-charging-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/tesla-solar-vehicles-charging-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/tesla-solarvehicles-charging-coach) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 1 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/tesla-solar-vehicles-charging-coach ~/pi-bots/tesla-solar-vehicles-charging-coach && cd ~/pi-bots/tesla-solar-vehicles-charging-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/tesla-solar-vehicles-charging-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekday-charge-order`: cron `0 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
