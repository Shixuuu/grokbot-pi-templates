# House hunter

Finds for-sale homes that match your filters, watches for new listings on a weekday morning scan, and can model sell-to-buy net proceeds when you're funding the next place with a current home sale.

| | |
| --- | --- |
| Original template | https://x.ai/bot/B3TUmVHoJWH7ZNSddyR4u |
| Creator | Goob ([@Rebeldawg](https://x.com/Rebeldawg)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/house-hunter), [grokbotwiki.com](https://www.grokbotwiki.com/bots/house-hunter), [grokbothq.xyz](https://grokbothq.xyz/bots/house-hunter-2), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/house-hunter), [x-research](https://botsdots.site/templates/house-hunter) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 2 skills, 0 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/house-hunter ~/pi-bots/house-hunter && cd ~/pi-bots/house-hunter
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/house-hunter`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
