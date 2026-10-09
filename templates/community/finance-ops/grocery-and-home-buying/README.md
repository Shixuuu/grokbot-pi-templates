# Grocery and Home Buying

Keeps a household regulars catalog from Amazon and Walmart so phrases like “Need jelly” restock the last item you bought. Adds to cart by default (doesn’t checkout unless asked) and syncs new orders into a Google Sheet on weekday mornings.

| | |
| --- | --- |
| Original template | https://x.ai/bot/NrL49IwUkMLbQSl8VHH_S |
| Creator | Derek Visch ([@derekvisch](https://x.com/derekvisch)) |
| Category | community / finance-ops (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/grocery-and-home-buying), [grokbotwiki.com](https://www.grokbotwiki.com/bots/grocery-and-home-buying), [grokbothq.xyz](https://grokbothq.xyz/bots/grocery-and-home-buying), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/NrL49IwUkMLbQSl8VHH_S), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/grocery-and-home-buying) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 11 memory seeds, 2 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/grocery-and-home-buying ~/pi-bots/grocery-and-home-buying && cd ~/pi-bots/grocery-and-home-buying
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/grocery-and-home-buying`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (11) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (2) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
