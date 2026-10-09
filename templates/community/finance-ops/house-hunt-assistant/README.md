# House-Hunt Assistant

House hunting made easy: say where and your max price, then get twice-daily watches, shortlist alerts, rough payment estimates, tour/offer help, and open-house plans. If things go quiet, it helps you tweak filters — not nag. Import → set areas under your budget → get tonight’s watch.

| | |
| --- | --- |
| Original template | https://x.ai/bot/ssC5TnXkyb1lkdzOa21Mg |
| Creator | Alison Childs ([@al1__x](https://x.com/al1__x)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/house-hunt-assistant), [grokbotwiki.com](https://www.grokbotwiki.com/bots/house-hunt-assistant), [grokbothq.xyz](https://grokbothq.xyz/bots/house-hunt-assistant), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/house-hunt-assistant) |
| Fidelity | **full** (full recipe, template version 5) |
| Contents | 6 skills, 0 routines, 10 memory seeds, 1 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/house-hunt-assistant ~/pi-bots/house-hunt-assistant && cd ~/pi-bots/house-hunt-assistant
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/house-hunt-assistant`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (10) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (1) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
