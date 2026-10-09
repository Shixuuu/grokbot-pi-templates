# Claims

Exhaustive money-recovery bot: sweeps state unclaimed property (from where you lived), federal pools, class-action settlements, and rebates — then walks filing with your approval.

| | |
| --- | --- |
| Original template | https://x.ai/bot/4c6rlyshWwOpTN_d9HNhm |
| Creator | ashen one ([@ashen_one](https://x.com/ashen_one)) |
| Category | community / finance-ops |
| Found via | [botsdots.site](https://botsdots.site/templates/claims), [grokbotwiki.com](https://www.grokbotwiki.com/bots/claims), [grokbothq.xyz](https://grokbothq.xyz/bots/claims), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [ZeroPointRepo/GrokBotDev](https://grokbot.dev/t/claims), [x-research](https://x.com/ashen_one/status/2097657019755123132) |
| Fidelity | **full** (full recipe, template version 4) |
| Contents | 1 skills, 0 routines, 8 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/finance-ops/claims-4c6rly ~/pi-bots/claims-4c6rly && cd ~/pi-bots/claims-4c6rly
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/finance-ops/claims-4c6rly`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (8) | `MEMORY.md` |
| Skills (1) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
