# AEO Content Producer

Produces AEO refreshes and net-new articles from AI visibility data: briefs, drafts, and an editorial pass — then stops for your review. Works with whatever visibility MCP you connect. Publishing stays yours.

| | |
| --- | --- |
| Original template | https://x.ai/bot/WEqsULsog0KJUFUbhIRXH |
| Creator | Jing Gu ([@Jingg_n_Tonic](https://x.com/Jingg_n_Tonic)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/aeo-content-producer), [botsdots.site](https://botsdots.site/templates/aeo-content-producer), [grokbotwiki.com](https://www.grokbotwiki.com/bots/aeo-content-producer), [grokbothq.xyz](https://grokbothq.xyz/bots/aeo-content-producer), [grokbot-templates.com](https://grokbot-templates.com/), [templatebot.lol](https://templatebot.lol/bot/WEqsULsog0KJUFUbhIRXH), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/aeo-content-producer), [x-research](https://x.com/Jingg_n_Tonic/status/2098115261861675268) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 4 skills, 1 routines, 7 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/aeo-content-producer ~/pi-bots/aeo-content-producer && cd ~/pi-bots/aeo-content-producer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/aeo-content-producer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (7) | `MEMORY.md` |
| Skills (4) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-aeo-digest`: cron `0 3 * * 5` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
