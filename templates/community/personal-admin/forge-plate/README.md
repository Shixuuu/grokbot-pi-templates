# FORGE PLATE

A lift-and-plate coach for novice and heavy lifters. One command at a time: week grid, log, trend, swaps, ramp, home 30, and a high-protein plate — no invented weights, no medical advice.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ScVcj_ZwEMOz6XLGdru5j |
| Creator | realMAG1775 ([@realMAG1775](https://x.com/realMAG1775)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/forge-plate), [grokbotwiki.com](https://www.grokbotwiki.com/bots/forge-plate), [grokbothq.xyz](https://grokbothq.xyz/bots/forge-plate), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/forge-plate), [x-research](https://x.com/realMAG1775/status/2104309907667480979) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 2 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/forge-plate ~/pi-bots/forge-plate && cd ~/pi-bots/forge-plate
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/forge-plate`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/sunday-week-rebuild`: cron `0 18 * * 0` (found in the template text)
- `/saturday-trend-recap`: cron `0 9 * * 6` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
