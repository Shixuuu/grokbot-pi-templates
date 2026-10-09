# xGas Superchain dApp Supercycle

Sends you to https://xgas.dev/auth/x/login on your machine, wires your HOST CONFIG MCP to your Privy wallet, funds if needed, explains real staccpad/xGas tech ($xMoney≠NGU), then runs a live e2e on the lane you pick.

| | |
| --- | --- |
| Original template | https://x.ai/bot/py3cDcRaSgRj_ixBOK3XN |
| Creator | Jarett Reginald Stewart Dunn ([@STACCoverflow](https://x.com/STACCoverflow)) |
| Category | community / personal-admin |
| Found via | [botsdots.site](https://botsdots.site/templates/xgas-superchain-dapp-supercycle), [grokbotwiki.com](https://www.grokbotwiki.com/bots/xgas-superchain-dapp-supercycle), [grokbothq.xyz](https://grokbothq.xyz/bots/xgas-superchain-dapp-supercycle), [grokbot-templates.com](https://grokbot-templates.com/), [kydlikebtc/awesome-grokbot](https://github.com/kydlikebtc/awesome-grokbot), [majiayu000/awesome-grok-bot](https://github.com/majiayu000/awesome-grok-bot), [Maimuzamilhu/awesome-grok-bot-templates](https://github.com/Maimuzamilhu/awesome-grok-bot-templates), [cs68614-hash/awesome-grokbot-templates](https://github.com/cs68614-hash/awesome-grokbot-templates), [x-research](https://botsdots.site/templates/xgas-superchain-dapp-supercycle) |
| Fidelity | **full** (full recipe, template version 7) |
| Contents | 2 skills, 0 routines, 4 memory seeds, 0 connectors |

## Use it in Pi

```bash
cp -r templates/community/personal-admin/xgas-superchain-dapp-supercycle ~/pi-bots/xgas-superchain-dapp-supercycle && cd ~/pi-bots/xgas-superchain-dapp-supercycle
pi --approve   # trust the folder: loads AGENTS.md, .pi/APPEND_SYSTEM.md, skills/, prompts/
```

Or install only the skills and routine prompts: `pi install ./templates/community/personal-admin/xgas-superchain-dapp-supercycle`. The persona in `AGENTS.md` applies only when you run Pi inside the folder.

## What was converted

| Grok Bot | Pi |
| --- | --- |
| Profile / persona | `AGENTS.md`, `.pi/APPEND_SYSTEM.md` |
| Memory (4) | `MEMORY.md` |
| Skills (2) | `skills/<name>/SKILL.md`, full bodies |
| Routines (0) | `prompts/<name>.md` (`/name`), verbatim text in `routines/`, schedule sketches in `cron/` and `systemd/` |
| Plugins (0) | `CONNECTORS.md`, `connectors.json` |

## What did not translate

- Grok Bot runtime features: shared box computer/browser desktop, Grok channels (Slack/iMessage/email send-as), team multi-bot wake, built-in X/Grok data tools.
- Routine scheduling and event triggers: Pi has no scheduler; see `prompts/`, `cron/`, `systemd/`.

Content belongs to the original creator; this is an automated format conversion for personal use with Pi.
