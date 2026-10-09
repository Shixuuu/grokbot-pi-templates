# Product Ops

Turns freeze lists into weekly ship checklists for product teams. Owns cadence: what ships this week, what is frozen, blockers, and demo, README, or video gates. Never invents ship status — verifies against GitHub.

| | |
| --- | --- |
| Original template | https://x.ai/bot/gJKPDjN3yS95ZpZBTWruv |
| Creator | Ashish P ([@inqusit](https://x.com/inqusit)) |
| Category | community / teams-handoffs (not on the x.ai marketplace) |
| Found via | [botsdots.site](https://botsdots.site/templates/product-ops), [grokbotwiki.com](https://www.grokbotwiki.com/bots/product-ops), [grokbothq.xyz](https://grokbothq.xyz/bots/product-ops), [templatebot.lol](https://templatebot.lol/bot/gJKPDjN3yS95ZpZBTWruv), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/product-ops), [x-research](https://x.com/inqusit/status/2093513553613656106) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 1 skills, 1 routines, 6 memory seeds, 3 connectors |

## Use it in Pi

```bash
cp -r templates/community/teams-handoffs/product-ops ~/pi-bots/product-ops && cd ~/pi-bots/product-ops
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/teams-handoffs/product-ops`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (6) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (3) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/openharness-pr-cadence`: no schedule in the template (set when enabled in Grok Bot)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
