# Solar Trailer → Tesla Charge

Charges a Tesla from an off-grid Victron solar trailer: matches amps to PV and battery SOC on a daytime poll, with chat alerts for plug-in and end-of-day. For owners using Victron VRM + TeslaFi.

| | |
| --- | --- |
| Original template | https://x.ai/bot/l1UJtFYw-3KTHuGvjROIN |
| Creator | Electric Tech Adventures ([@ElectricTechAdv](https://x.com/ElectricTechAdv)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/solar-trailer-tesla-charge), [grokbotwiki.com](https://www.grokbotwiki.com/bots/solar-trailer-tesla-charge), [grokbothq.xyz](https://grokbothq.xyz/bots/solar-trailer-tesla-charge), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/solar-trailer-tesla-charge), [x-research](https://botsdots.site/templates/solar-trailer-tesla-charge) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 0 routines, 11 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/solar-trailer-tesla-charge-l1ujtf ~/pi-bots/solar-trailer-tesla-charge-l1ujtf && cd ~/pi-bots/solar-trailer-tesla-charge-l1ujtf
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/solar-trailer-tesla-charge-l1ujtf`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
