# Hunter

Watches for sold-out products coming back in stock and new drops you care about, and pings you with the store, price and a direct link only when you can actually buy.

| | |
| --- | --- |
| Original template | https://x.ai/bot/RJMxbT38CZy20YFXNgzI8 |
| Creator | Marcello Silvestri ([@shirubusutori](https://x.com/shirubusutori)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/hunter), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/hunter), [x-research](https://botsdots.site/templates/hunter) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 1 skills, 2 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/hunter ~/pi-bots/hunter && cd ~/pi-bots/hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (2) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/ff-resonance-ce-restock`: cron `35 9-17 * * *` (found in the template text)
- `/collector-s-editions-rare-games`: cron `0 9-17 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
