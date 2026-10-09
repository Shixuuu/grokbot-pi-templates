# shoppy

Household shopper that finds a price, waits for a yes, then orders and tracks arrival. Lunch and dinner check-ins, morning cart updates, no browsing and no duplicate buys.

| | |
| --- | --- |
| Original template | https://x.ai/bot/26SigD00Ar-mArCvNwXN2 |
| Creator | vandy meares ([@vandymeares](https://x.com/vandymeares)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/shoppy), [grokbotwiki.com](https://www.grokbotwiki.com/bots/shoppy), [grokbothq.xyz](https://grokbothq.xyz/bots/shoppy), [templatebot.lol](https://templatebot.lol/bot/26SigD00Ar-mArCvNwXN2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://x.com/vandymeares/status/2093864119741116483) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 3 routines, 10 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/shoppy ~/pi-bots/shoppy && cd ~/pi-bots/shoppy
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/shoppy`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (3) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/lunch-order-check-in`: cron `4 11 * * *` (found in the template text)
- `/dinner-order-check-in`: cron `4 17 * * *` (found in the template text)
- `/amazon-cart-and-arrivals`: cron `38 8 * * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
