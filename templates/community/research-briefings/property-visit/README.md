# Property Visit

Drop an address, lat/lon, or parcel ID. Get a visit-ready land pack — soils, flood, slope, parcel map — plus a 15-day workability window and checklist files (`brief.md`, `aoi.geojson`, `window.csv`).

| | |
| --- | --- |
| Original template | https://x.ai/bot/85qsR6t4r8jI3oKbPm5Uu |
| Creator | David Beitz ([@dzbeitz](https://x.com/dzbeitz)) |
| Category | community / research-briefings |
| Found via | [botsdots.site](https://botsdots.site/templates/property-visit), [grokbotwiki.com](https://www.grokbotwiki.com/bots/property-visit), [grokbothq.xyz](https://grokbothq.xyz/bots/property-visit), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/property-visit), [x-research](https://x.com/dzbeitz/status/2100332867960135839) |
| Fidelity | **full** (full recipe, template version 10) |
| Contents | 1 skills, 0 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/research-briefings/property-visit ~/pi-bots/property-visit && cd ~/pi-bots/property-visit
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/research-briefings/property-visit`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

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
