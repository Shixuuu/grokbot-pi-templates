# GPU Price Watch

Tracks GPU rental prices (H100, A100, 4090 and more) across cloud providers, pings you when one crosses your target, and helps you pick the cheapest GPU for a job. Real, sourced prices only, and your price history stays private to you. By Irontarn.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WTCh7nBzB55Q73ArvsBKm |
| Creator | Sam E ([@SamE](https://x.com/SamE)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/gpu-price-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/gpu-price-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/gpu-price-watch), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/gpu-price-watch) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 1 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/gpu-price-watch ~/pi-bots/gpu-price-watch && cd ~/pi-bots/gpu-price-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/gpu-price-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/gpu-price-check`: cron `3 8 * * 1-5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
