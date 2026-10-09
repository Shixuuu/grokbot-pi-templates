# ChargeRight Panel Coach

ChargeRight’s educational panel coach: NEC Article 220 pre-check for Level 2 EV chargers. Locked facts from the audited product — $49.99 web, 220.83(A)/(B) and 220.82, NEC 230.79 verdict test. Not a permit and not Tesla-affiliated.

| | |
| --- | --- |
| Original template | https://x.ai/bot/s9EKFwbfQkmKK9jL44YoP |
| Creator | EV_ChargeRight ([@EV_ChargeRight](https://x.com/EV_ChargeRight)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/chargeright-panel-coach), [grokbotwiki.com](https://www.grokbotwiki.com/bots/chargeright-panel-coach), [grokbothq.xyz](https://grokbothq.xyz/bots/chargeright-panel-coach), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/chargeright-panel-coach), [x-research](https://botsdots.site/templates/chargeright-panel-coach) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 2 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/chargeright-panel-coach ~/pi-bots/chargeright-panel-coach && cd ~/pi-bots/chargeright-panel-coach
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/chargeright-panel-coach`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
