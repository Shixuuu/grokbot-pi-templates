# San Martín Watch

Starbase launch companion: next Starship windows, public viewing spots, and the San Martín land history under the pad.

| | |
| --- | --- |
| Original template | https://x.ai/bot/dXPRQwRlwI9_jip6vFYoT |
| Creator | Todd Trevino ([@ToddATrevino](https://x.com/ToddATrevino)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/san-martin-watch), [grokbotwiki.com](https://www.grokbotwiki.com/bots/san-mart-n-watch), [grokbothq.xyz](https://grokbothq.xyz/bots/san-martin-watch), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/san-mart-n-watch), [x-research](https://x.com/ToddATrevino/status/2100561743629988254) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/san-mart-n-watch ~/pi-bots/san-mart-n-watch && cd ~/pi-bots/san-mart-n-watch
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/san-mart-n-watch`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/flight-14-watch`: cron `34 8,16 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
