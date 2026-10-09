# EBR & Value Deck Builder

Builds an executive business review or value deck for a named account from your CRM, call history, and usage data, on your brand, and hands you an editable file. Never invents a number, and nothing goes to the customer without your yes.

| | |
| --- | --- |
| Original template | https://x.ai/bot/yA2-Ti3sPVNFO-zRzkwuX |
| Creator | Krista Letz ([@kristaletz](https://x.com/kristaletz)) |
| Category | official (x.ai/bot/marketplace) |
| Found via | [xai-marketplace](https://x.ai/bot/marketplace/bots/ebr-value-deck-builder), [grokbottemplates.app](https://grokbottemplates.app/t/ebr-value-deck-builder), [botsdots.site](https://botsdots.site/templates/ebr-value-deck-builder), [grokbothq.xyz](https://grokbothq.xyz/bots/ebr-value-deck-builder), [templatebot.lol](https://templatebot.lol/bot/yA2-Ti3sPVNFO-zRzkwuX), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://grokbottemplates.app/t/ebr-value-deck-builder) |
| Fidelity | **full** (full recipe, template version 1) |
| Contents | 5 skills, 1 routines, 3 memory seeds, 7 connectors |

## Use it in Pi

```bash
cp -r templates/official/ebr-value-deck-builder ~/pi-bots/ebr-value-deck-builder && cd ~/pi-bots/ebr-value-deck-builder
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/official/ebr-value-deck-builder`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (3) | `MEMORY.md` |
| Skills (5) | `skills/<name>/SKILL.md`, full bodies |
| Routines (1) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (7) | `CONNECTORS.md`, `connectors.json` |

### Routine schedules

- `/renewal-deck-reminder`: cron `0 8 1 * *` (found in the template text)

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.
- Connector auth/config: plugin names only (see `CONNECTORS.md`).

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
