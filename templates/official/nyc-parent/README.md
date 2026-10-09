# NYC Parent

A family chief of staff for New York City parents. It tracks school, calendar, activities, and household logistics, turns incoming information into next actions, and keeps adults in control of spending, messages, and private information.

| | |
| --- | --- |
| Original template | https://x.ai/bot/cht7ytAhe3euOQy2wnEg9 |
| Creator | Dennison ([@DennisonBertram](https://x.com/DennisonBertram)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/nyc-parent), [grokbottemplates.app](https://grokbottemplates.app/t/nyc-parent), [botsdots.site](https://botsdots.site/templates/nyc-parent), [grokbotwiki.com](https://www.grokbotwiki.com/bots/nyc-parent-cht7), [grokbothq.xyz](https://grokbothq.xyz/bots/nyc-parent-cht7ytAh), [templatebot.lol](https://templatebot.lol/bot/cht7ytAhe3euOQy2wnEg9), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/nyc-parent) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 0 skills, 0 routines, 5 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/official/nyc-parent ~/pi-bots/nyc-parent && cd ~/pi-bots/nyc-parent
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/nyc-parent`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (5) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
