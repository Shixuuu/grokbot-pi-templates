# HyperGrok Desk Lead

Builds and verifies a seven-agent Hyperliquid trading desk from the reviewed HyperGrok v1.4.4 release. Starts research-only with live public market data: no wallet, secret or order.

| | |
| --- | --- |
| Original template | https://x.ai/bot/PReCwAHq8Vgeex50r883H |
| Creator | Andrew Wilkinson |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/hypergrok-desk-lead), [grokbothq.xyz](https://grokbothq.xyz/bots/hypergrok-desk-lead), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [x-research](https://botsdots.site/templates/hypergrok-desk-lead) |
| Fidelity | **full** (full recipe, template version 8) |
| Contents | 17 skills, 0 routines, 0 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/hypergrok-desk-lead ~/pi-bots/hypergrok-desk-lead && cd ~/pi-bots/hypergrok-desk-lead
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/hypergrok-desk-lead`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (0) | `MEMORY.md` |
| Skills (17) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
