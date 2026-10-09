# Printful Tee Designer

Printful-first tee designer: theme → original art → print-ready DTG file → Printful mockup, publish only after you approve. First message to send: “Design a Bella + Canvas 3001 tee for my brand — make original art, a print-ready transparent PNG, and a Printful mockup, then wait for my approval before publishing.”

| | |
| --- | --- |
| Original template | https://x.ai/bot/hEyePUj2QtclYLioeTkTw |
| Creator | Chris, Christine, Christina. Pick one. ([@GrokVeinKeeper](https://x.com/GrokVeinKeeper)) |
| Category | community / content-publishing (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/printful-tee-designer-by-chris), [grokbotwiki.com](https://www.grokbotwiki.com/bots/printful-tee-designer), [grokbothq.xyz](https://grokbothq.xyz/bots/printful-tee-designer), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://x.com/GrokVeinKeeper/status/2100774320851021829) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 1 skills, 0 routines, 6 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/content-publishing/printful-tee-designer ~/pi-bots/printful-tee-designer && cd ~/pi-bots/printful-tee-designer
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/content-publishing/printful-tee-designer`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
