# Fodda Earnings Context Analyst

Decodes public-company earnings calls for strategists and analysts: what leadership claimed, what they dodged, and what category evidence shows. Requires the Fodda Earnings Intelligence connector.

| | |
| --- | --- |
| Original template | https://x.ai/bot/BT47pPtgjRk5qylFBqoeV |
| Creator | Piers Fawkes ([@piers_fawkes](https://x.com/piers_fawkes)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/fodda-earnings-context-analyst), [grokbotwiki.com](https://www.grokbotwiki.com/bots/fodda-earnings-context-analyst), [grokbothq.xyz](https://grokbothq.xyz/bots/fodda-earnings-context-analyst), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/fodda-earnings-context-analyst), [x-research](https://x.com/piers_fawkes/status/2100997532897734785) |
| Fidelity | **full** (full recipe, template version 2) |
| Contents | 0 skills, 0 routines, 3 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/fodda-earnings-context-analyst-bt47pp ~/pi-bots/fodda-earnings-context-analyst-bt47pp && cd ~/pi-bots/fodda-earnings-context-analyst-bt47pp
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/fodda-earnings-context-analyst-bt47pp`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (0) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
