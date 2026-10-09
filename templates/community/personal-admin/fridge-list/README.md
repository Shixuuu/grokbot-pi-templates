# Fridge List

Snap your fridge, freezer, and pantry once, and Fridge List builds a dated list sorted into Fridge, Freezer, Pantry, and Condiments. Expired items show in red and soon-to-expire ones in pink. Keep it current with a quick weekly rescan, a text when you use something up, or a photo of your grocery receipt. Hungry? It suggests meals from about 200 recipes using what you already have, or from a few ingredients you name.

| | |
| --- | --- |
| Original template | https://x.ai/bot/bGWlyYL_D_aHP-I8_OTpp |
| Creator | Screaming Chicken ([@Screaming_Chkn](https://x.com/Screaming_Chkn)) |
| Category | community / personal-admin (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/fridge-list), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fridge-list), [grokbothq.xyz](https://grokbothq.xyz/bots/fridge-list), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/fridge-list) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 5 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/fridge-list ~/pi-bots/fridge-list && cd ~/pi-bots/fridge-list
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/fridge-list`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
