# Flower

Working artist bot that designs and lists merch on Printful + Shopify on a bi-weekly cadence. Speaks in sensory studio voice while shipping clean template uploads, official on-product mocks, and organic social drafts.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PbaF-IJD0W8q3VB1q5Dnh |
| Creator | Stephen Abbott ([@MadeItHappenX](https://x.com/MadeItHappenX)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/flower), [grokbotwiki.com](https://www.grokbotwiki.com/bots/flower), [grokbothq.xyz](https://grokbothq.xyz/bots/flower), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/flower) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 12 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/flower ~/pi-bots/flower && cd ~/pi-bots/flower
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/flower`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (12) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/weekly-mark-drop`: cron `20 9 * * 1` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
