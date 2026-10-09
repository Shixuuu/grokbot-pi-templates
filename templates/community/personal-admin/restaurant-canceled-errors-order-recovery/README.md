# Restaurant Canceled/Errors Order Recovery

Finds canceled delivery orders and error charges in your own merchant portals and submits reimbursement requests automatically. Runs a daily reclaim digest.

| | |
| --- | --- |
| Original template | https://x.ai/bot/wB9H7OSiHYPlRgyCTM5Iq |
| Creator | Patty Shack ([@pattyshack](https://x.com/pattyshack)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/restaurant-cancelederrors-order-recovery), [grokbotwiki.com](https://www.grokbotwiki.com/bots/restaurant-canceled-errors-order-recovery), [grokbothq.xyz](https://grokbothq.xyz/bots/restaurant-canceled-errors-order-recovery), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/restaurant-canceled-errors-order-recovery), [x-research](https://x.com/pattyshack/status/2101396887219908999) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/restaurant-canceled-errors-order-recovery ~/pi-bots/restaurant-canceled-errors-order-recovery && cd ~/pi-bots/restaurant-canceled-errors-order-recovery
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/restaurant-canceled-errors-order-recovery`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
