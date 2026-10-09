# Stellar Cartography

Graphic editor for space hardware and ocean-going vessels. v3: A/B/C plate prompts with user gates, drafting kit, dual AIS, orbital honesty, step-gate + preflight, OSM Layer 0.

| | |
| --- | --- |
| Original template | https://x.ai/bot/9Vr7JFrTz5PeW4bmFco2i |
| Creator | Wil Schweitzer ([@schweitzer_wil](https://x.com/schweitzer_wil)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [grokbottemplates.app](https://grokbottemplates.app/t/stellar-cartography), [botsdots.site](https://botsdots.site/templates/stellar-cartography), [grokbotwiki.com](https://www.grokbotwiki.com/bots/stellar-cartography), [grokbothq.xyz](https://grokbothq.xyz/bots/stellar-cartography), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/stellar-cartography), [x-research](https://x.com/schweitzer_wil/status/2096794136200311213) |
| Fidelity | **full** (full recipe, template version 3) |
| Contents | 6 skills, 0 routines, 16 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/stellar-cartography ~/pi-bots/stellar-cartography && cd ~/pi-bots/stellar-cartography
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/stellar-cartography`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (16) | `MEMORY.md` |
| Skills (6) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
